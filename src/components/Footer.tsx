import { Link } from 'react-router-dom'
import { Container } from './Container'

export function Footer() {
  return (
    <footer className="footer footer-reference" id="contact-footer">
      <Container>
        <div className="footer-reference-main">
          <p className="footer-reference-label"><span aria-hidden="true" />GOT SOMETHING SERIOUS?</p>
          <a className="footer-reference-heading" href="mailto:399349314@qq.com" aria-label="发送邮件至 399349314@qq.com">LET&apos;S <em>TALK</em></a>
          <a className="footer-reference-email" href="mailto:399349314@qq.com">399349314@qq.com</a>
        </div>

        <div className="footer-reference-links">
          <div>
            <p>站点地图</p>
            <Link to="/work">作品</Link>
            <Link to="/about">关于</Link>
            <Link to="/contact">联系</Link>
          </div>
          <div>
            <p>社交账号</p>
            <a href="https://www.zcool.com.cn/u/1366630" target="_blank" rel="noreferrer">zcool</a>
            <a href="https://dribbble.com/lingyu_ui" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </div>

        <a className="footer-reference-top" href="#top" aria-label="Back to top">↑</a>

        <div className="footer-reference-bottom">
          <span>© 2026 LING YI</span>
          <span>LING YI. DESIGN</span>
          <span>MADE TO MOVE</span>
        </div>
      </Container>
    </footer>
  )
}
