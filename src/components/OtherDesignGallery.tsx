import { useCallback, useEffect, useState } from 'react'
import type { OtherDesign } from '../types'

type OtherDesignGalleryProps = {
  items: OtherDesign[]
}

const getColumnCount = () => {
  if (window.innerWidth <= 680) return 1
  if (window.innerWidth <= 900) return 2
  return 3
}

export function OtherDesignGallery({ items }: OtherDesignGalleryProps) {
  const [selected, setSelected] = useState<OtherDesign | null>(null)
  const [columnCount, setColumnCount] = useState(getColumnCount)
  const selectedIndex = selected ? items.findIndex((item) => item.id === selected.id) : -1

  const showPrevious = useCallback(() => {
    if (selectedIndex < 0) return
    setSelected(items[(selectedIndex - 1 + items.length) % items.length])
  }, [items, selectedIndex])

  const showNext = useCallback(() => {
    if (selectedIndex < 0) return
    setSelected(items[(selectedIndex + 1) % items.length])
  }, [items, selectedIndex])

  useEffect(() => {
    const updateColumnCount = () => setColumnCount(getColumnCount())
    window.addEventListener('resize', updateColumnCount)
    return () => window.removeEventListener('resize', updateColumnCount)
  }, [])

  useEffect(() => {
    if (!selected) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected, showNext, showPrevious])

  const columns = Array.from({ length: columnCount }, (_, columnIndex) => items.filter((_, itemIndex) => itemIndex % columnCount === columnIndex))

  return (
    <>
      <div className="other-design-gallery" aria-label="Other 设计作品">
        {columns.map((column, columnIndex) => (
          <div className="other-design-column" key={columnIndex}>
            {column.map((item) => (
              <button
                key={item.id}
                className="other-design-item"
                type="button"
                aria-haspopup="dialog"
                aria-label={`放大查看 ${item.title}`}
                onClick={() => setSelected(item)}
              >
                {item.mediaType === 'video' ? (
                  <video src={item.image} aria-label={item.title} autoPlay loop muted playsInline preload="metadata" />
                ) : (
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                )}
              </button>
            ))}
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="other-design-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} 大图预览`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelected(null)
          }}
        >
          {items.length > 1 && (
            <div className="other-design-lightbox-navigation" aria-label="切换图片">
              <button className="other-design-lightbox-nav" type="button" onClick={showPrevious} aria-label="查看上一张图片">←</button>
              <button className="other-design-lightbox-nav" type="button" onClick={showNext} aria-label="查看下一张图片">→</button>
            </div>
          )}
          <button className="other-design-lightbox-close" type="button" onClick={() => setSelected(null)} aria-label="关闭大图预览">
            <span aria-hidden="true">×</span>
          </button>
          <div className="other-design-lightbox-content">
            {selected.mediaType === 'video' ? (
              <video src={selected.image} aria-label={selected.title} autoPlay controls playsInline />
            ) : (
              <img src={selected.image} alt={selected.title} />
            )}
          </div>
        </div>
      )}
    </>
  )
}
