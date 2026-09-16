import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export function NotFoundPage() {
  useDocumentTitle('404')
  return (
    <section className="not-found section"><Container><p className="eyebrow">404</p><h1>页面不存在。</h1><Link className="text-link" to="/">返回首页 →</Link></Container></section>
  )
}
