import { Mail, Smartphone } from 'lucide-react'
import { Container } from '../components/Container'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name.replace(/\.jpg$/i, '.webp')}`

export function ContactPage() {
  useDocumentTitle('联系')

  return (
    <section className="contact-reference-page">
      <Container>
        <div className="contact-reference-label"><span aria-hidden="true" />联系我</div>
        <div className="contact-reference-grid">
          <div>
            <h1>GET IN <em>TOUCH.</em></h1>
          </div>

          <div className="contact-reference-side">
            <p className="contact-reference-intro">如果你正在寻找一位能从需求到交付推进项目的设计师，欢迎联系我。</p>
            <div className="contact-reference-details">
              <a className="contact-reference-item" href="tel:+8615814051226">
                <Smartphone size={18} aria-hidden="true" />
                <span><small>手机号</small><strong>+(86) 158 1405 1226</strong></span>
              </a>
              <a className="contact-reference-item" href="mailto:399349314@qq.com">
                <Mail size={18} aria-hidden="true" />
                <span><small>邮箱</small><strong>399349314@qq.com</strong></span>
              </a>
              <div className="contact-reference-item contact-reference-social">
                <span className="contact-reference-social-mark" aria-label="小红书">
                  <img src={imagePath('xiaohongshu-logo.svg')} alt="" />
                </span>
                <span><small>小红书账号</small><strong>linglingzi_ui</strong></span>
              </div>
              <div className="contact-reference-qr">
                <img className="contact-reference-qr-image" src={imagePath('wechat-qr.png')} alt="微信二维码" loading="lazy" decoding="async" />
                <span>扫码添加微信</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
