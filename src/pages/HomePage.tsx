import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { projects, site } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name.replace(/\.jpg$/i, '.webp')}`

export function HomePage() {
  useDocumentTitle('资深产品设计师 / 全链路设计开发')
  const [activeWhat, setActiveWhat] = useState(0)
  const [heroScrollShift, setHeroScrollShift] = useState(0)
  const taylorledsProject = projects.find((project) => project.slug === 'taylorleds-website')
  const featuredProjects = projects.slice(0, 4).map((project) => project.slug === 'sansheng-health' ? (taylorledsProject ?? project) : project)

  useEffect(() => {
    let frame = 0
    const updateShift = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => setHeroScrollShift(Math.min(window.scrollY * 0.2, 96)))
    }
    updateShift()
    window.addEventListener('scroll', updateShift, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateShift)
    }
  }, [])

  const whatIActuallyDo = [
    {
      number: '01',
      title: '产品与用户体验',
      code: 'PD-01',
      copy: '视觉设计之前的策略思考：需求梳理、用户流程规划、线框图绘制与产品逻辑打磨。在进入视觉细节前，我优先理清业务诉求。',
      tags: ['需求分析', '用户流程', '线框原型', '交互原型', '产品逻辑梳理'],
    },
    { number: '02', title: '界面与设计系统', code: 'UI-02', copy: '为网站、小程序、B 端平台输出可落地的实用界面；输出统一的设计系统与完整设计规范，保障高效对接开发。', tags: ['B 端界面', '网页 & 小程序', '设计系统', '设计规范', '开发对接'] },
    { number: '03', title: '工作室全链路交付', code: 'DL-03', copy: '从需求沟通到项目上线的商业项目全链路交付，融合前端认知、设计管理经验与 AI 辅助设计工作流。', tags: ['0-1 项目交付', '客户对接', '设计管理', 'AI 辅助设计', '项目验收'] },
  ]

  return (
    <>
      <section className="hero hero-home reference-hero">
        <Container>
          <div className="hero-reference-topline">
            <p className="hero-eyebrow"><span className="hero-accent-dot" aria-hidden="true" />LING YI — SENIOR UI/UX DESIGNER</p>
            <p className="hero-portfolio-label">PORTFOLIO — 2026</p>
          </div>
          <div className="hero-reference-content">
            <h1 className="hero-statement hero-reference-statement" style={{ '--hero-scroll-shift': `${heroScrollShift}px` } as CSSProperties}>
              <span>I DESIGN <span className="hero-image-pill"><img src={imagePath('hero-profile.webp')} alt="LING YI 个人肖像" fetchPriority="high" decoding="async" /></span></span>
              <span>INTERFACES</span>
              <span>THAT <em>MOVE</em> PEOPLE <span className="hero-image-pill hero-image-pill-wide"><img src={imagePath('hero-web.webp')} alt="网页设计项目展示" fetchPriority="high" decoding="async" /></span></span>
            </h1>
            <div className="hero-reference-bottom">
              <p className="hero-supporting-copy">{site.heroNote}</p>
              <a className="hero-scroll" href="#selected-work" aria-label="向下滚动到精选案例"><span className="hero-scroll-dot" aria-hidden="true" />SCROLL</a>
            </div>
          </div>
        </Container>
      </section>

      <section className="selected-work reference-selected-work section" id="selected-work">
        <Container>
          <header className="selected-work-heading">
            <div className="selected-work-heading-copy">
              <p className="eyebrow featured-work-label"><span aria-hidden="true" />精选案例</p>
              <h2>FEATURED <em>CASES.</em></h2>
            </div>
            <span className="selected-work-count">{String(featuredProjects.length).padStart(2, '0')} - SELECTED</span>
          </header>
          <div className="selected-work-card-grid">
            {featuredProjects.map((project) => (
              <Link className="selected-work-card" key={project.slug} to={`/work/${project.slug}`}>
                <div className="selected-work-card-visual" style={{ background: project.accent }}>
                  <img src={project.cardImage ?? project.image} alt={`${project.title} 项目展示`} loading="lazy" decoding="async" />
                </div>
                <div className="selected-work-card-meta">
                  <h2>{project.title}</h2>
                  <span className="selected-work-card-type">{project.category.split('/')[0]}</span>
                  <div className="selected-work-card-tags">
                    <span>{project.type === 'web' ? 'WEB UI' : 'APP UI'}</span>
                    <span>{project.year.slice(0, 4)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link className="selected-work-all" to="/work">查看更多 <img className="home-horizontal-arrow" src={imagePath('arrow-right.svg')} alt="" /></Link>
        </Container>
      </section>

      <section className="about-reference-page homepage-about-reference" id="reference-intro">
        <Container>
          <div className="about-reference-label">
            <span className="about-reference-dot" aria-hidden="true" />
            <p className="eyebrow">关于我</p>
          </div>

          <div className="about-reference-grid">
            <div className="about-reference-visual">
              <h2>DESIGN WITH<br />REAL <em>STAKES.</em></h2>
            </div>

            <div className="about-reference-copy">
              <p>我是李玲，拥有十余年设计从业经验，始终对前沿产品设计趋势与 AI 设计工作流抱有强烈的探索欲。</p>
              <p>我的项目大多服务于企业客户，覆盖小程序、官网以及 B 端数字化系统，合作包含硬件品牌以及成长型初创企业。这类项目需要平衡业务目标与技术实现限制，交付流畅、高可用的用户体验。</p>
              <p>长期实践积累了设计团队管理与个人工作室全案交付的实战经验。我最核心的追求很简单：把抽象的业务诉求，转化为能够真正落地使用的产品界面。</p>
              <p className="about-reference-muted">离开工作屏幕，我依旧保持对设计的思考：梳理设计规范，观察现实场景中的各类交互细节，借助个人项目持续探索 AI 设计新流程。设计于我不只是一份职业，更是我看待问题、拆解问题、解决问题的思维方式。</p>

              <div className="about-reference-stats" aria-label="About statistics">
                <div><strong>10+</strong><span>从业年限</span></div>
                <div><strong>40+</strong><span>服务客户</span></div>
                <div><strong>60+</strong><span>完成项目</span></div>
              </div>
              <Link className="about-reference-button" to="/about">查看更多 <img className="home-horizontal-arrow" src={imagePath('arrow-right.svg')} alt="" /></Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="what-i-do-section" id="what-i-do">
        <Container>
          <div className="what-i-do-label"><span aria-hidden="true" />我能做什么</div>
          <h2>WHAT I ACTUALLY<br /><span className="what-i-do-highlight">DO.</span></h2>
          <div className="what-i-do-list">
            {whatIActuallyDo.map((item, index) => {
              const isOpen = activeWhat === index
              return (
                <div className={`what-i-do-row${isOpen ? ' is-open' : ''}`} key={item.code}>
                  <button type="button" onClick={() => setActiveWhat(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span className="what-i-do-number">{item.number}</span>
                    <span className="what-i-do-title">{item.title}</span>
                    <span className="what-i-do-code">{item.code}</span>
                    <span className="what-i-do-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="what-i-do-details">
                      <p>{item.copy}</p>
                      <div>{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </Container>
      </section>

    </>
  )
}
