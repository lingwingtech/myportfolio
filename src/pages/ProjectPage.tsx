import { Link, Navigate, useParams } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Container } from '../components/Container'
import { projects, powercolorMiniProgramCaseStudy, sanshengCaseStudy, sanyuanLongevityCaseStudy, taylorledsCaseStudy } from '../data/site'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import type { TextCaseStudy } from '../types'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name.replace(/\.jpg$/i, '.webp')}`

function CaseStudyHeading({ title, copy, className = '' }: { title: string; copy?: ReactNode; className?: string }) {
  const highlighted: Record<string, [string, string]> = {
    项目概览: ['项目', '概览'],
    '业务痛点 & 设计目标': ['业务痛点 & 设计', '目标'],
    我的职责: ['我的', '职责'],
    设计过程: ['设计', '过程'],
    项目成果: ['项目', '成果'],
  }
  const pair = highlighted[title]
  return (
    <div className={`case-study-heading${title === '业务痛点 & 设计目标' ? ' case-study-heading-long' : ''}${className ? ` ${className}` : ''}`}>
      <h2>{pair ? <>{pair[0]} <em>{pair[1]}</em></> : title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function CaseStudySpecImage({ src, alt }: { src: string; alt: string }) {
  return (
    <section className="case-study-spec-image">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </section>
  )
}

function SanshengCaseStudy({ firstOverviewImage, overviewImagesOverride, overviewCopy, painPointsCopy, painPointsItems, painPointsImage, responsibilitiesIntro, responsibilitiesItems, processItems, processImage, layoutImage, colorsImage, spacingImage, outcomesCopy, outcomesItems, outcomesImage }: { firstOverviewImage?: string; overviewImagesOverride?: string[]; overviewCopy?: ReactNode; painPointsCopy?: ReactNode; painPointsItems?: string[]; painPointsImage?: string; responsibilitiesIntro?: ReactNode; responsibilitiesItems?: string[]; processItems?: string[]; processImage?: string; layoutImage?: string; colorsImage?: string; spacingImage?: string; outcomesCopy?: ReactNode; outcomesItems?: string[]; outcomesImage?: string } = {}) {
  const detail = sanshengCaseStudy
  const overviewImages = overviewImagesOverride ?? (firstOverviewImage
    ? [firstOverviewImage, ...detail.overview.images.slice(1)]
    : detail.overview.images)
  const resolvedOverviewCopy = overviewCopy ?? detail.overview.copy
  const resolvedPainPointsCopy = painPointsCopy ?? detail.painPoints.copy
  const resolvedPainPointsItems = painPointsItems ?? detail.painPoints.items
  const resolvedPainPointsImage = painPointsImage ?? detail.painPoints.image
  const resolvedResponsibilitiesIntro = responsibilitiesIntro ?? detail.responsibilities.intro
  const resolvedResponsibilitiesItems = responsibilitiesItems ?? detail.responsibilities.items
  const resolvedProcessItems = processItems ?? detail.process.items
  const resolvedProcessImage = processImage ?? detail.process.image
  const resolvedLayoutImage = layoutImage ?? detail.layout.image
  const resolvedColorsImage = colorsImage ?? detail.colors.image
  const resolvedSpacingImage = spacingImage ?? detail.spacing.image
  const resolvedOutcomesCopy = outcomesCopy ?? detail.outcomes.copy
  const resolvedOutcomesItems = outcomesItems ?? detail.outcomes.items
  const resolvedOutcomesImage = outcomesImage ?? detail.outcomes.image
  return (
    <div className="sansheng-case-study">
      <section className="case-study-content-section case-study-overview">
        <CaseStudyHeading title="项目概览" copy={resolvedOverviewCopy} />
        <div className="case-study-media-grid">
          {overviewImages.map((image, index) => (
            <div className="case-study-image-card" key={image}>
              <img src={image} alt={`项目概览界面 ${index + 1}`} loading="lazy" decoding="async" />
            </div>
          ))}
        </div>
      </section>
      <section className="case-study-content-section">
        <CaseStudyHeading title="业务痛点 & 设计目标" copy={resolvedPainPointsCopy} />
        <div className="case-study-list-image">
          <div className="case-study-number-list">{resolvedPainPointsItems.map((item, index) => <p key={item}><b>{index + 1}.</b>{item}</p>)}</div>
          <img src={resolvedPainPointsImage} alt="设计目标与页面方案" loading="lazy" decoding="async" />
        </div>
      </section>
      <section className="case-study-content-section case-study-two-column-copy">
        <CaseStudyHeading title="我的职责" />
        <div>
          <p className="case-study-responsibilities-intro">{resolvedResponsibilitiesIntro}</p>
          <div className="case-study-number-list">{resolvedResponsibilitiesItems.map((item, index) => <p key={item}><b>{index + 1}.</b>{item}</p>)}</div>
        </div>
      </section>
      <section className="case-study-content-section">
        <CaseStudyHeading title="设计过程" />
        <div className="case-study-list-image">
          <div className="case-study-number-list">{resolvedProcessItems.map((item, index) => <p key={item}><b>{index + 1}.</b>{item}</p>)}</div>
          <img src={resolvedProcessImage} alt="设计过程页面拼贴" loading="lazy" decoding="async" />
        </div>
      </section>
      <CaseStudySpecImage src={resolvedLayoutImage} alt="布局与组件规范 Layout & Patterns" />
      <CaseStudySpecImage src={resolvedColorsImage} alt="色彩体系 Color System" />
      <CaseStudySpecImage src={resolvedSpacingImage} alt="间距与圆角 Spacing & Radius" />
      <section className="case-study-content-section case-study-outcomes">
        <CaseStudyHeading title="项目成果" copy={resolvedOutcomesCopy} className="case-study-heading-outcomes" />
        <div className="case-study-list-image case-study-outcome-layout">
          <div className="case-study-number-list">{resolvedOutcomesItems.map((item, index) => <p key={item}><b>{index + 1}.</b>{item}</p>)}</div>
          <img src={resolvedOutcomesImage} alt="项目成果展示" loading="lazy" decoding="async" />
        </div>
      </section>
    </div>
  )
}

function NumberedList({ items }: { items: string[] }) {
  return <div className="case-study-number-list">{items.map((item, index) => <p key={item}><b>{index + 1}.</b>{item}</p>)}</div>
}

function TextCaseStudyPage({ caseStudy }: { caseStudy: TextCaseStudy }) {
  return (
    <div className="sansheng-case-study">
      <section className="case-study-content-section case-study-overview">
        <CaseStudyHeading title="项目概览" copy={caseStudy.overview.copy} />
        {caseStudy.overview.status && <p className="case-study-status-note">{caseStudy.overview.status}</p>}
        {caseStudy.overview.images ? (
          <div className="case-study-media-grid case-study-overview-media-grid">
            {caseStudy.overview.images.map((image, index) => (
              <div className="case-study-image-card" key={image}>
                <img src={image} alt={`项目概览界面展示 ${index + 1}`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        ) : caseStudy.overview.image && <img className="case-study-case-media" src={caseStudy.overview.image} alt="项目核心界面展示" loading="lazy" decoding="async" />}
      </section>
      {caseStudy.painPointsLayout === 'dark-feature' ? (
        <section className="case-study-pain-panel">
          <div className="case-study-pain-panel-inner">
            <CaseStudyHeading title="业务痛点 & 设计目标" copy={caseStudy.painPointsCopy} />
            <div className="case-study-pain-panel-body">
              <div className="case-study-pain-panel-copy">
                <div>
                  <h3>业务痛点</h3>
                  <NumberedList items={caseStudy.painPoints} />
                </div>
                <div>
                  <h3>设计目标</h3>
                  <NumberedList items={caseStudy.goals} />
                </div>
              </div>
              {caseStudy.painPointsImage && <img src={caseStudy.painPointsImage} alt="业务痛点界面展示" loading="lazy" decoding="async" />}
            </div>
          </div>
        </section>
      ) : (
        <section className="case-study-content-section">
          <CaseStudyHeading title="业务痛点 & 设计目标" />
          <div className="case-study-text-columns">
            <div>
              <h3>业务痛点</h3>
              <NumberedList items={caseStudy.painPoints} />
            </div>
            <div>
              <h3>设计目标</h3>
              <NumberedList items={caseStudy.goals} />
            </div>
          </div>
          {caseStudy.painPointsImage && <img className="case-study-pain-points-media" src={caseStudy.painPointsImage} alt="业务痛点界面展示" loading="lazy" decoding="async" />}
        </section>
      )}
      <section className="case-study-content-section case-study-two-column-copy">
        <CaseStudyHeading title="我的职责" />
        <div>
          <p className="case-study-responsibilities-intro">{caseStudy.responsibilities.intro}</p>
          <NumberedList items={caseStudy.responsibilities.items} />
          {caseStudy.responsibilities.note && <p className="case-study-note">{caseStudy.responsibilities.note}</p>}
        </div>
      </section>
      {caseStudy.processLayout === 'dark-feature' ? (
        <div className="case-study-process-stack">
          <section className="case-study-process-panel">
            <div className="case-study-process-panel-inner">
              <CaseStudyHeading title="设计过程" />
              <div className="case-study-process-panel-body">
                <NumberedList items={caseStudy.process} />
                {caseStudy.processFeatureImage && <img src={caseStudy.processFeatureImage} alt="设计过程界面展示" loading="lazy" decoding="async" />}
              </div>
            </div>
          </section>
          {caseStudy.processImages && (
            <div className="case-study-process-supplementary">
              {caseStudy.processImages.filter((image) => image !== caseStudy.processFeatureImage).map((image, index) => (
                <img key={image} src={image} alt={`设计过程步骤图 ${index + 1}`} loading="lazy" decoding="async" />
              ))}
            </div>
          )}
        </div>
      ) : (
        <section className="case-study-content-section">
          <CaseStudyHeading title="设计过程" />
          <NumberedList items={caseStudy.process} />
          {caseStudy.processImages && (
            <div className="case-study-process-images">
              {caseStudy.processImages.map((image, index) => (
                <img key={image} src={image} alt={`设计过程展示 ${index + 1}`} loading="lazy" decoding="async" />
              ))}
            </div>
          )}
        </section>
      )}
      {caseStudy.outcomesLayout === 'dark-feature' ? (
        <section className="case-study-outcomes-panel">
          <div className="case-study-outcomes-panel-inner">
            <CaseStudyHeading title="项目成果" copy={caseStudy.outcomesCopy} />
            <div className="case-study-outcomes-panel-body">
              <NumberedList items={caseStudy.outcomes} />
              {caseStudy.outcomesImage && <img src={caseStudy.outcomesImage} alt="项目成果界面展示" loading="lazy" decoding="async" />}
            </div>
          </div>
        </section>
      ) : (
        <section className="case-study-content-section case-study-outcomes">
          <CaseStudyHeading title="项目成果" />
          <NumberedList items={caseStudy.outcomes} />
          {caseStudy.outcomesImage && <img className="case-study-outcomes-media" src={caseStudy.outcomesImage} alt="项目成果界面展示" loading="lazy" decoding="async" />}
        </section>
      )}
    </div>
  )
}

export function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  useDocumentTitle(project?.title ?? '项目')
  if (!project) return <Navigate to="/404" replace />

  const clientName = project.title.split(/[｜·]/)[0]
  const isSansheng = project.slug === 'sansheng-health'
  const textCaseStudy = project.slug === 'sanyuan-longevity'
    ? sanyuanLongevityCaseStudy
    : project.slug === 'powercolor-mini-program'
      ? powercolorMiniProgramCaseStudy
      : project.slug === 'taylorleds-website'
        ? taylorledsCaseStudy
      : undefined

  return (
    <article className="project-reference-page">
      <Container>
        <Link className="project-reference-back" to="/work">
          <span aria-hidden="true">←</span>
          <span>返回作品</span>
        </Link>
        <header className="project-reference-header">
          <div className="project-reference-title-row">
            <h1>{isSansheng ? <><span>全域智慧</span><em>旅游</em></> : project.slug === 'powercolor-service' ? <><span>数字</span><em>藏品</em></> : project.title}</h1>
            <div className="project-reference-intro">
              <p className="project-reference-summary">{project.summary}</p>
              {project.website && <a className="project-reference-website" href={project.website.href} target="_blank" rel="noreferrer">{project.website.label}</a>}
            </div>
          </div>
          <div className="project-reference-meta" aria-label="项目元信息">
            <div><span>项目类型</span><strong>{project.category}</strong></div>
            <div><span>我的角色</span><strong>{project.role ?? 'UI / UX 设计师'}</strong></div>
            <div><span>客户</span><strong>{clientName}</strong></div>
            <div><span>时间</span><strong>{project.year}</strong></div>
          </div>
        </header>

        <div className="project-reference-cover project-reference-cover-sansheng" style={{ background: project.slug === 'sansheng-health' ? '#000' : project.accent }}>
          {project.image ? <img src={project.image} alt={`${project.title} 项目展示`} fetchPriority="high" decoding="async" /> : <span>{project.cover}</span>}
        </div>

        {/* Every project uses the same long-form case-study rhythm as the
            Sansheng project. Keeping one shared composition makes the detail
            pages feel like a coherent portfolio while preserving each
            project's own title, summary, metadata and cover image above. */}
        {textCaseStudy ? <TextCaseStudyPage caseStudy={textCaseStudy} /> : <SanshengCaseStudy
          firstOverviewImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles.webp') : undefined}
          overviewImagesOverride={project.slug === 'powercolor-service'
            ? [imagePath('digital-collectibles-overview-01.webp'), imagePath('digital-collectibles-overview-02.webp')]
            : undefined}
          overviewCopy={project.slug === 'powercolor-service'
            ? <>本小程序聚焦文物 IP 数字化，对文物进行高精度复刻与创意衍生，依托联盟链完成链上确权。产品以<strong>文化传承、数字收藏、权益赋能</strong>为核心，严格遵守国内“去金融化、实名、法币、限流转”合规规则，区别于炒作类 NFT，重点落地文化价值与收藏使用体验。</>
            : undefined}
          painPointsCopy={project.slug === 'powercolor-service'
            ? <>文物 IP 数字产品缺少标准化展示平台，藏品信息、权益说明分散，同时需要兼顾国内合规约束，既要体现文化收藏价值，又要规避金融炒作导向。设计目标是把文物 IP、链上确权、用户收藏权益整合在同一小程序内，打造合规、有文化质感的数字收藏体验。</>
            : undefined}
          painPointsItems={project.slug === 'powercolor-service'
            ? ['平衡文物文化质感与小程序轻量化展示体验', '厘清藏品、权益、订单信息层级，降低用户理解门槛', '在界面隐性落实合规要求，规避金融炒作类视觉引导', '搭建可复用组件库，支持后续 IP 藏品快速迭代上线']
            : undefined}
          painPointsImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-pain-points.webp') : undefined}
          responsibilitiesIntro={project.slug === 'powercolor-service' ? '' : undefined}
          responsibilitiesItems={project.slug === 'powercolor-service'
            ? ['主导 0‑1 阶段全部 UI 设计，确定产品整体视觉框架，完成首页、藏品详情、个人中心、订单、专题活动页等核心界面输出', '参与需求评审，梳理业务流转逻辑，搭建组件库与全套 UI 设计规范', '输出标注、切图，对接开发团队跟进界面还原，参与页面测试验收，协调解决开发落地问题', '配合运营输出藏品专题、营销活动页面视觉方案']
            : undefined}
          processItems={project.slug === 'powercolor-service'
            ? ['梳理业务流程，明确藏品发行、展示、收藏、权益核销的用户路径，输出页面信息架构', '结合文物 IP 气质定义视觉风格，选定色彩、字体、卡片样式，平衡国风文化感和现代产品简约感', '完成核心页面多版方案推演，迭代首页藏品陈列、藏品详情信息层级，突出藏品图文内容', '沉淀通用组件，搭建组件库，统一弹窗、按钮、列表卡片样式，提升后续迭代效率', '输出开发交付物料，跟进开发还原，根据测试反馈微调界面细节。']
            : undefined}
          processImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-process.webp') : undefined}
          layoutImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-layout-patterns.jpg') : undefined}
          colorsImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-color-system.jpg') : undefined}
          spacingImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-radius-spacing.jpg') : undefined}
          outcomesCopy={project.slug === 'powercolor-service' ? '' : undefined}
          outcomesItems={project.slug === 'powercolor-service'
            ? ['完成数字藏品小程序 1.0 版本全套 UI 设计交付，输出完整设计规范与组件库', '核心业务流程页面全部落地，支持藏品展示、购买、个人藏品查看、权益查看等完整业务', '视觉风格匹配文物 IP 文化定位，页面层级清晰，满足合规产品的用户使用需求。']
            : undefined}
          outcomesImage={project.slug === 'powercolor-service' ? imagePath('digital-collectibles-outcomes.webp') : undefined}
        />}

      </Container>
    </article>
  )
}
