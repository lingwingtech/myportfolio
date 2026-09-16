import { Container } from '../components/Container'
import { experience } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useState } from 'react'

export function AboutPage() {
  useDocumentTitle('关于')
  const [activePrinciple, setActivePrinciple] = useState(1)
  const [activeExperience, setActiveExperience] = useState(0)
  const principles = [
    {
      number: '01',
      title: '设计服务业务目标',
      code: 'PR-01',
      copy: '设计不只是视觉美化，要贴合业务诉求，解决真实问题，让界面价值落地。',
      tags: ['业务理解', '需求拆解', '目标导向'],
    },
    {
      number: '02',
      title: '重视可落地的设计输出',
      code: 'PR-02',
      copy: '好看只是一时，可靠的设计体系才能长久。输出组件、规范，方便开发对接，适配迭代与团队协作。',
      tags: ['设计规范', '组件体系', '开发落地'],
    },
    {
      number: '03',
      title: '追求清晰克制的体验',
      code: 'PR-03',
      copy: '好体验不靠花哨效果，逻辑清晰、层级合理，让用户高效完成任务。',
      tags: ['信息架构', '逻辑梳理', '用户体验'],
    },
  ]

  return (
    <>
      <section className="about-dark-page">
      <Container>
        <div className="about-dark-topline">
          <p className="about-dark-label"><span aria-hidden="true" />关于我-LING YI</p>
        </div>
        <div className="about-dark-layout about-dark-layout-no-photo">
          <div className="about-dark-copy">
            <h1>DESIGN WITH<br />REAL <em>STAKES.</em></h1>
          </div>
          <div className="about-dark-intro-column">
            <div className="about-dark-intro">
              <p>我是李玲，拥有十余年设计从业经验，始终对前沿产品设计趋势与 AI 设计工作流抱有强烈的探索欲。</p>
              <p>我的项目大多服务于企业客户，覆盖小程序、官网以及 B 端数字化系统，合作包含硬件品牌以及成长型初创企业。这类项目需要平衡业务目标与技术实现限制，交付流畅、高可用的用户体验。</p>
              <p>长期实践积累了设计团队管理与个人工作室全案交付的实战经验。我最核心的追求很简单：把抽象的业务诉求，转化为能够真正落地使用的产品界面。</p>
              <p>离开工作屏幕，我依旧保持对设计的思考：梳理设计规范，观察现实场景中的各类交互细节，借助个人项目持续探索 AI 设计新流程。设计于我不只是一份职业，更是我看待问题、拆解问题、解决问题的思维方式。</p>
            </div>
            <div className="about-dark-stats" aria-label="工作数据">
              <div><strong>10+</strong><span>从业年限</span></div>
              <div><strong>40+</strong><span>服务客户</span></div>
              <div><strong>60+</strong><span>完成项目</span></div>
            </div>
          </div>

        </div>
      </Container>
      </section>
      <section className="about-principles-section">
      <Container>
        <div className="about-principles-heading">
          <p className="about-principles-label"><span aria-hidden="true" />我的设计思考</p>
          <h2>HOW I THINK ABOUT<br /><em>DESIGN.</em></h2>
        </div>
        <div className="about-principles-list">
          {principles.map((principle, index) => {
            const isOpen = activePrinciple === index
            return (
              <div className={`about-principle-row${isOpen ? ' is-open' : ''}`} key={principle.code}>
                <button type="button" onClick={() => setActivePrinciple(isOpen ? -1 : index)} aria-expanded={isOpen}>
                  <span className="about-principle-number">{principle.number}</span>
                  <span className="about-principle-title">{principle.title}</span>
                  <span className="about-principle-code">{principle.code}</span>
                  <span className="about-principle-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && principle.copy && (
                  <div className="about-principle-details">
                    <p>{principle.copy}</p>
                    <div>{principle.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                )}
              </div>
            )
          })}
          </div>
      </Container>
      </section>
      <section className="about-experience-section">
        <Container>
          <div className="about-experience-heading">
            <p className="about-dark-label"><span aria-hidden="true" />工作经历</p>
            <h2>WORK<br /><em>EXPERIENCE.</em></h2>
          </div>
          <div className="about-experience-list">
            {experience.map((item, index) => {
              const isOpen = activeExperience === index
              return (
                <article className={`about-experience-row${isOpen ? ' is-open' : ''}`} key={`${item.company}-${item.period}`}>
                  <button type="button" onClick={() => setActiveExperience(isOpen ? -1 : index)} aria-expanded={isOpen}>
                    <span className="about-experience-number">{String(index + 1).padStart(2, '0')}</span>
                    <strong>{item.company}</strong>
                    <span className="about-experience-role">{item.role}</span>
                    <span className="about-experience-period">{item.period}</span>
                    <span className="about-experience-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="about-experience-details">
                      <p className="about-experience-projects">{item.projectsLabel && <strong>{item.projectsLabel}：</strong>}{item.projects}</p>
                      {(item.workflow.length > 0 || item.results.length > 0) && (
                        <div className="about-experience-detail-grid">
                          {item.workflow.length > 0 && (
                            <section>
                              <h3>操盘全流程工作</h3>
                              <ol>{item.workflow.map((detail) => <li key={detail}>{detail}</li>)}</ol>
                            </section>
                          )}
                          {item.results.length > 0 && (
                            <section>
                              <h3>业绩 / 成果</h3>
                              <ol>{item.results.map((result) => <li key={result}>{result}</li>)}</ol>
                              {item.links && <div className="about-experience-links">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}</div>}
                            </section>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
