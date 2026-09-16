import type { Experience, OtherDesign, Project, SanshengCaseStudy, TextCaseStudy } from '../types'

const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name.replace(/\.jpg$/i, '.webp')}`

export const site = {
  name: 'Lin Studio',
  role: '资深产品设计师 / 全链路设计开发',
  location: '上海 · 远程服务全球',
  email: '399349314@qq.com',
  intro: '2007 年参加工作，2012 年开始网页设计，2016 年转型 UI 设计，2023 年起自主经营工作室。擅长从商务对接、需求梳理到 UI 设计、开发协作与项目测试，独立完成小程序、APP、网站、PC、B 端后台与大屏可视化的 0-1 全链路交付。',
  availability: '寻求资深产品设计 / UI 设计机会',
  heroNote: '10+ 互联网设计，跨网页‑移动端，兼具前端与管理能力，\n可独立完成商业项目 0‑1 全链路交付。',
  resumeLabel: '简历 / 索取 PDF',
  socials: [
    { label: 'Behance', href: 'https://www.behance.net/' },
    { label: 'Dribbble', href: 'https://dribbble.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}

export const heroStats = [
  { value: '10+', label: '工作经验' },
  { value: '60+', label: '上线项目' },
  { value: '0-1', label: '全链路交付能力' },
]

export const projects: Project[] = [
  {
    slug: 'powercolor-mini-program',
    title: '撼讯双端小程序',
    year: '2025.05‑2025.12',
    category: '小程序 / 硬件售后与渠道服务',
    summary: '面向硬件品牌的双端小程序，覆盖用户送保与经销商积分业务，推动线下售后、渠道管理线上化。',
    description: '由 C 端用户端与 B 端经销商端组成，整合产品查询、线上送保、扫码积分、兑换与订单管理，并支持后台灵活配置积分规则。',
    services: ['产品规划', '交互设计', 'UI 设计', '设计规范'],
    cover: 'PowerColor 撼讯',
    image: imagePath('powercolor-mini-program-hero.jpg'),
    cardImage: imagePath('powercolor-mini-program-hero.jpg'),
    accent: '#EAF4FB',
    role: '项目负责人（全链路 UI/UX）',
    type: 'product',
  },
  {
    slug: 'sanyuan-longevity',
    title: '三源长生小程序',
    year: '2025.01‑2025.06',
    category: '小程序 / 医疗健康服务',
    summary: '面向高净值人群的健康服务小程序，整合健康档案、专家咨询、服务预约与知情同意签署，构建线上健康管理服务闭环。',
    description: '聚焦干细胞医疗与高端体检咨询业务，完成从健康资料管理到专家方案咨询、预约与线上签署的全流程体验设计。',
    services: ['产品梳理', '交互设计', 'UI 设计', '设计规范'],
    cover: '三源长生',
    image: imagePath('sanyuan-longevity-hero.jpg'),
    cardImage: imagePath('sanyuan-longevity-hero.jpg'),
    accent: '#DDEFE8',
    role: '项目负责人（全链路 UI/UX）',
    type: 'product',
  },
  {
    slug: 'sansheng-health',
    title: '全域智慧旅游平台',
    year: '2022.04‑2023.06',
    category: 'APP / 文旅数字化',
    summary: '面向文旅产业，基于数字孪生打造的一站式全域旅游互联网服务平台，赋能景区、商户与游客，实现线上线下一体化文旅体验。',
    description: '面向文旅产业，基于数字孪生打造的一站式全域旅游互联网服务平台，赋能景区、商户与游客，实现线上线下一体化文旅体验。',
    services: ['产品策略', '交互设计', 'UI 设计', '全链路交付'],
    cover: '全域智慧旅游平台',
    image: imagePath('sansheng-health-hero.jpg'),
    cardImage: imagePath('sansheng-health-hero.jpg'),
    accent: '#E8E4FA',
    featured: true,
    type: 'product',
  },
  {
    slug: 'powercolor-service',
    title: '数字藏品',
    year: '2022.06‑2022.09',
    category: '小程序 / 文化数字收藏',
    summary: '围绕文物IP数字化复刻、链上确权、藏品展示与权益兑换，面向收藏用户的合规文化数字藏品小程序。',
    description: '围绕文物IP数字化复刻、链上确权、藏品展示与权益兑换，面向收藏用户的合规文化数字藏品小程序。',
    services: ['产品策略', '交互设计', 'UI 设计', '小程序交付'],
    cover: '数字藏品',
    image: imagePath('digital-collectibles.webp'),
    cardImage: imagePath('digital-collectibles.webp'),
    accent: '#E7F2FF',
    featured: true,
    type: 'product',
  },
  {
    slug: 'taylorleds-website',
    title: 'Taylorleds品牌官网',
    year: '2024.07-2024.09 / 2025.07-2025.12',
    category: 'Web UI设计 / 海外品牌官网',
    summary: '面向海外 B 端采购客户的制造业英文官网改版，并配套自动化线路图功能子站点，提升产品展示、询盘与自助获取图纸体验。',
    description: '重构海外品牌官网的信息架构与视觉体系，覆盖产品、技术方案、案例与询盘；同步设计支持参数选择并自动生成电路线路示意图的功能子站点。',
    services: ['网站信息架构', '交互设计', 'PC / 移动端 UI', '设计规范'],
    cover: 'Taylorleds',
    image: imagePath('taylorleds-hero.jpg'),
    cardImage: imagePath('taylorleds-hero.jpg'),
    website: {
      href: 'https://www.taylorleds.com',
      label: '访问官网：www.taylorleds.com',
    },
    accent: '#EEF2F5',
    role: '项目负责人（全链路 UI/UX）',
    type: 'web',
  },
]

export const otherDesigns: OtherDesign[] = [
  { id: 'hand-drawn-map', title: '手绘地图', image: imagePath('other-hand-drawn-map.mp4'), mediaType: 'video' },
  { id: 'xinxin-auto-expo', title: '欣芯半导体北京车展', image: imagePath('other-xinxin-auto-expo.jpg') },
  { id: 'uniwhen-autumn', title: '云彣立秋活动', image: imagePath('other-uniwhen-autumn.jpg') },
  { id: 'tesla-glass-film', title: 'Tesla Y 全车玻璃膜促销', image: imagePath('other-tesla-glass-film.jpg') },
  { id: 'panda-tint-tesla', title: 'Tesla Y 玻璃膜促销视觉', image: imagePath('other-panda-tint-tesla.jpg') },
  { id: 'panda-tint-opening', title: 'Panda Tint 开业活动', image: imagePath('other-panda-tint-opening.jpg') },
  { id: 'panda-tint-model-y', title: 'Panda Tint Tesla Model Y', image: imagePath('other-panda-tint-model-y.jpg') },
  { id: 'uniwhen-qixi', title: '云彣七夕活动', image: imagePath('other-uniwhen-qixi.jpg') },
]

export const sanshengCaseStudy: SanshengCaseStudy = {
  overview: {
    copy: '全域智慧旅游平台 APP，面向文旅产业打造的数字化服务产品。依托数字孪生技术，连接景区、商户与游客，打通线上线下服务场景，让旅行规划、游览与消费都更清晰顺畅。',
    images: [imagePath('sansheng-overview-01.webp'), imagePath('sansheng-overview-02.webp')],
  },
  painPoints: {
    copy: '业务信息分散、游客决策链路长，景区与商户也缺少统一的数字化服务入口。设计目标是让复杂的文旅资源被看见、被理解，并在一个平台内完成从发现到出行的完整体验。',
    items: ['统一景区、商户与游客的服务入口', '降低多角色使用门槛，建立清晰的信息层级', '补齐搜索、行程、订单与售后等关键链路', '以可扩展的组件与规范支撑持续迭代'],
    image: imagePath('sansheng-pain-points.webp'),
  },
  responsibilities: {
    intro: '作为 UI 设计负责人主导 APP0-1 设计工作：',
    items: ['参与需求研讨，梳理 APP 整体业务框架与信息架构；', '主导整套 APP 交互与 UI 设计，确定产品主框架、核心首页功能板块；', '跟进 1.0、2.0、3.0 版本迭代设计，输出界面、组件及规范；', '对接产品、开发，评审界面，跟进设计落地，协调版本迭代需求。'],
  },
  process: {
    items: ['从用户任务出发梳理信息架构', '通过低保真原型验证关键路径', '建立统一组件、色彩与版式规则', '在真实场景中持续测试并优化体验'],
    image: imagePath('sansheng-process.webp'),
  },
  layout: {
    image: imagePath('sansheng-layout-patterns.jpg'),
    intro: '屏幕尺寸、导航模式、组件间距统一约束，确保不同页面在开发与迭代中保持一致。',
    groups: [
      { title: '屏幕布局 Screen Layout', intro: '以 375 × 812 为基准建立响应式栅格。', rows: [{ label: '内容区域', description: '左右 16px 内边距，模块间距 16–32px' }, { label: '底部 Tab', description: '固定高度 83px，安全区域内对齐' }] },
      { title: '导航模式 Navigation', intro: '用底部 Tab、顶部返回与分段导航组织任务。', rows: [{ label: '底部 Tab', description: '核心入口保持稳定，当前状态清晰' }, { label: '搜索框', description: '圆角容器，支持历史与快捷筛选' }] },
      { title: '按钮规范 Buttons', intro: '主次按钮有明确层级，优先保证触达与反馈。', rows: [{ label: '主按钮 Primary', description: '高对比填充，承载关键行动', swatch: '#3573FF' }, { label: '次按钮 Secondary', description: '描边样式，适用于次要操作', swatch: '#FFFFFF' }] },
      { title: '图标规范 Icons', intro: '图标保持线性、圆角与统一视觉重量。', rows: [{ label: '导航图标', description: '24px 基准，选中态使用品牌色' }, { label: '功能图标', description: '16px / 20px 两级尺寸' }] },
    ],
  },
  colors: {
    image: imagePath('sansheng-color-system.jpg'),
    intro: '以清晰、可信赖的蓝色为主色，搭配深色与高亮色建立产品层级。',
    groups: [
      { title: '品牌色 Brand Colors', rows: [{ label: 'Primary Blue', description: '#3573FF', swatch: '#3573FF' }, { label: 'Dark Navy', description: '#132A53', swatch: '#132A53' }, { label: 'Coral', description: '#FF735D', swatch: '#FF735D' }] },
      { title: '文字色 Text Colors', rows: [{ label: 'Near Black', description: '#101010', swatch: '#101010' }, { label: 'Dark Gray', description: '#333333', swatch: '#333333' }, { label: 'Medium Gray', description: '#666666', swatch: '#666666' }] },
      { title: '功能色 Functional', rows: [{ label: 'Error Red', description: '错误提示与风险操作', swatch: '#F21818' }, { label: 'Success Green', description: '完成状态与成功反馈', swatch: '#08C885' }] },
      { title: '渐变色 Gradients', rows: [{ label: 'Blue Gradient', description: '#3573FF → #89DAFF', swatch: 'linear-gradient(90deg,#3573ff,#89daff)' }, { label: 'Purple Gradient', description: '#4339FF → #DB8FFF', swatch: 'linear-gradient(90deg,#4339ff,#db8fff)' }] },
    ],
  },
  spacing: {
    image: imagePath('sansheng-spacing-radius.jpg'),
    intro: '统一的间距和圆角规范，确保界面节奏一致、视觉整齐。',
    groups: [
      { title: '间距体系 Spacing Scale', intro: '间距以 4px 为基础单元，采用 4/8/10/16/24/32/40 的级数。', rows: [{ label: 'XS / 4px', description: '图标与文字间距、紧凑元素间隙' }, { label: 'SM / 8px', description: '列表项间距、紧凑布局间隙' }, { label: 'MD / 10px', description: '卡片内元素间距' }, { label: 'BASE / 16px', description: '页面侧边距、标准内边距' }, { label: 'LG / 24px', description: '模块间隔、表单内边距' }, { label: 'XL / 32px', description: '大模块间隔、板块分割' }, { label: '2XL / 40px', description: '页面底部间距、大区域分隔' }] },
      { title: '圆角规范 Corner Radius', intro: '圆角根据组件尺寸分级使用，保持亲和与秩序。', rows: [{ label: 'XS / 3px', description: '小型标签、徽标', count: '×35' }, { label: 'SM / 5px', description: '输入框、小按钮、列表项', count: '×109' }, { label: 'MD / 8px', description: '中等按钮、卡片元素', count: '×34' }, { label: 'LG / 10px', description: '图片容器、对话框', count: '×31' }, { label: 'XL / 12px', description: '卡片、模态弹窗', count: '×32' }, { label: '2XL / 15px', description: '大卡片、底部弹出面板', count: '×60' }, { label: '3XL / 20px', description: '页面级容器、浮层面板', count: '×48' }, { label: 'Full / 30px', description: '胶囊按钮、搜索框、标签', count: '×34' }] },
    ],
  },
  outcomes: {
    copy: '围绕全域旅游平台的核心目标，完成从产品策略、交互设计到视觉规范与开发协作的完整交付。',
    items: ['完成全域旅游 APP 0-1 设计与交付', '建立可复用的组件与设计规范', '覆盖景区、商户、游客多角色体验', '持续优化版本并支持后续业务扩展'],
    image: imagePath('sansheng-outcomes.webp'),
  },
}

export const sanyuanLongevityCaseStudy: TextCaseStudy = {
  overview: {
    copy: '面向高净值人群的健康服务小程序，聚焦干细胞医疗与高端体检咨询业务。整合体检报告上传、个人健康档案管理、专家方案咨询、服务预约、知情同意书签署整套流程，搭建线上健康管理服务闭环。',
    images: [
      imagePath('sanyuan-longevity-overview-01.jpg'),
      imagePath('sanyuan-longevity-overview-02.jpg'),
    ],
  },
  painPoints: [
    '原有健康咨询、体检方案全部线下沟通，客户健康档案分散，资料不易留存查阅。',
    '高端体检、干细胞服务流程环节多，预约、知情确认依靠线下纸质签署，效率低。',
    '客户与健康顾问缺少统一线上服务入口，服务进度无法同步。',
  ],
  painPointsImage: imagePath('sanyuan-longevity-pain-points.jpg'),
  painPointsCopy: '健康咨询、体检方案等服务高度依赖线下沟通，健康档案、服务进度和知情文件分散。设计目标是建立专业、可信赖的线上健康管理服务闭环。',
  painPointsLayout: 'dark-feature',
  goals: [
    '用户侧：线上统一管理个人健康档案，简化体检、医疗服务预约流程，实现知情文件线上签署。',
    '业务侧：沉淀客户健康数据，打通咨询、方案、预约、执行全流程，提升健康顾问服务效率。',
    '体验目标：以专业、稳重的医疗健康视觉感受，降低用户操作认知负担。',
  ],
  responsibilities: {
    intro: '作为项目负责人，独立完成全链路设计工作：',
    items: [
      '对接客户梳理业务需求，梳理业务流程与信息架构。',
      '输出交互原型，完成整套小程序 UI 视觉设计。',
      '输出设计规范、组件库，统一表单、档案、预约模块交互样式。',
      '输出完整交付稿，对接开发团队，把控项目设计质量与项目进度。',
      '项目前期使用 AI 工具辅助梳理业务文档、生成参考视觉方向，提升前期产出效率。',
    ],
  },
  process: [
    '业务流程梳理：梳理报告上传、档案管理、专家咨询、服务预约、知情同意签署完整业务链路，处理表单填写、文件上传等异常分支场景。',
    '信息架构搭建：划分健康档案、服务咨询、预约管理、个人中心四大核心模块；区分普通用户、后台管理权限。',
    '方案迭代取舍：健康类表单字段较多，采用分组、分步填写，降低用户填写压力；对体检报告、知情文件做专门阅读优化。',
    '组件规范输出：搭建医疗健康场景组件，重点优化表单、文件预览、弹窗、状态提示，保障整套界面专业统一。',
  ],
  processImages: [
    imagePath('sanyuan-longevity-process-01.jpg'),
    imagePath('sanyuan-longevity-process-02.jpg'),
    imagePath('sanyuan-longevity-process-03.jpg'),
    imagePath('sanyuan-longevity-process-04.jpg'),
    imagePath('sanyuan-longevity-process-05.jpg'),
    imagePath('sanyuan-longevity-process-06.jpg'),
  ],
  processFeatureImage: imagePath('sanyuan-longevity-process-02.jpg'),
  processLayout: 'dark-feature',
  outcomes: [
    '完成小程序全套交互原型、高保真 UI 设计稿、组件与设计规范完整交付。',
    '实现健康档案、报告上传、专家咨询、服务预约、线上知情签署全业务线上化的设计方案。',
    '完整输出可直接交付开发的设计资产，为后续重启项目做好全部设计储备。',
    '客户确认设计方案，认可整体专业稳重的产品体验。',
  ],
  outcomesImage: imagePath('sanyuan-longevity-outcomes.jpg'),
  outcomesCopy: '围绕高端健康服务小程序的完整链路，完成从业务梳理、交互设计到视觉规范与开发协作的完整交付。',
  outcomesLayout: 'dark-feature',
}

export const powercolorMiniProgramCaseStudy: TextCaseStudy = {
  overview: {
    copy: '这是面向硬件品牌的双端小程序，分为 C 端用户端与 B 端经销商端。用户端实现产品查询、线上送保、送保进度查询、客服咨询；经销商端完成注册认证、扫码积分、积分兑换、订单管理；配套后台可灵活配置积分规则。项目目标是把线下售后、渠道积分业务线上化，简化流程，帮助企业规范渠道管理、降低人力成本。',
    images: [
      imagePath('powercolor-mini-program-overview-01.jpg'),
      imagePath('powercolor-mini-program-overview-02.jpg'),
    ],
  },
  painPoints: [
    '原有线下送保流程靠微信、电话沟通，记录零散，售后进度无法追溯。',
    '经销商积分手工统计，对账繁琐，容易出错，管理成本高。',
    '用户、经销商缺少统一线上服务入口。',
  ],
  painPointsImage: imagePath('powercolor-mini-program-pain-points.jpg'),
  painPointsCopy: '硬件售后与渠道激励长期依赖线下人工协作，信息与进度分散。设计目标是通过双端小程序建立清晰、可追溯的线上服务链路。',
  painPointsLayout: 'dark-feature',
  goals: [
    '用户侧：简化送保提交、进度查询流程，让售后流程透明可追溯，降低用户沟通成本。',
    '经销商侧：实现扫码积分、积分兑换、订单管理，线上完成渠道激励管理。',
    '业务侧：后台灵活配置积分规则，沉淀业务数据，减少线下人工操作。',
  ],
  responsibilities: {
    intro: '作为项目负责人，独立完成全链路设计工作：',
    items: [
      '和客户沟通，梳理业务需求，输出信息架构、业务流程图。',
      '输出交互原型，完成全部页面 UI 视觉设计。',
      '输出项目设计规范、组件，统一页面交互与视觉。',
      '对接开发团队，跟进设计还原、评审，把控项目整体进度，推动项目上线。',
    ],
  },
  process: [
    '梳理业务流程：梳理用户送保全流程、经销商积分全流程，以及资料上传、审核驳回、积分过期等异常状态。',
    '信息架构搭建：区分普通用户、经销商两种角色，做权限隔离，划分产品、售后、积分、个人中心核心模块。',
    '方案迭代取舍：针对送保表单做简化，减少非必要填写项；针对经销商复杂操作，做分步引导，降低操作门槛。',
    '输出组件与规范：统一表单、按钮、弹窗、空状态、加载状态，提升页面一致性，降低开发成本。',
  ],
  processImages: [
    imagePath('powercolor-mini-program-process-01.jpg'),
    imagePath('powercolor-mini-program-process-02.jpg'),
    imagePath('powercolor-mini-program-process-03.jpg'),
    imagePath('powercolor-mini-program-process-04.jpg'),
    imagePath('powercolor-mini-program-process-05.jpg'),
    imagePath('powercolor-mini-program-process-06.jpg'),
  ],
  processFeatureImage: imagePath('powercolor-mini-program-process-02.jpg'),
  processLayout: 'dark-feature',
  outcomes: [
    '用户端小程序正式上线，上线 4 个月累计用户 5652，活跃用户留存 23%+。',
    '将线下送保业务迁移线上，售后单据线上留存，业务流程可追溯，减少人工登记工作量。',
    '输出完整设计稿、组件与交互规范，保障开发落地一致性。',
    '客户对小程序设计、功能落地给出正向评价。',
  ],
  outcomesImage: imagePath('powercolor-mini-program-outcomes.jpg'),
  outcomesCopy: '围绕硬件品牌售后与渠道服务场景，完成从业务梳理、双端体验设计到组件规范与开发协作的完整交付。',
  outcomesLayout: 'dark-feature',
}

export const taylorledsCaseStudy: TextCaseStudy = {
  overview: {
    copy: '面向海外 B 端采购客户的制造业英文官网整体改版升级，同时配套自动化线路图功能子站点。网站主要面向海外采购商，展示企业产品、技术方案、企业实力；子站点支持用户自主选择参数自动生成电路线路示意图。项目目标是重塑海外品牌视觉形象，优化海外客户浏览体验，强化产品信息展示，实现参数生成线路图的定制化功能，提升海外客户获取线索能力。',
    images: [
      imagePath('taylorleds-overview-01.jpg'),
      imagePath('taylorleds-overview-02.jpg'),
    ],
  },
  painPoints: [
    '旧版网站视觉老旧，信息层级混乱，海外采购商查找产品、技术资料效率低。',
    '缺少自动化线路图工具，客户需要人工对接获取线路图纸，沟通成本高。',
    '网站页面适配差，移动端浏览体验不佳，不利于海外客户浏览询盘。',
  ],
  painPointsImage: imagePath('taylorleds-pain-points.jpg'),
  goals: [
    '用户侧：重构网站信息架构，优化产品、案例、技术资料的查找路径，提升海外采购商浏览效率；自动化线路图降低客户获取图纸的沟通成本。',
    '品牌侧：建立国际化现代的品牌视觉，统一全站页面风格，适配 PC + 移动端多终端。',
    '业务侧：完善询盘入口，帮助企业获取海外客户线索。',
  ],
  responsibilities: {
    intro: '作为项目负责人，独立完成全链路设计工作：',
    items: [
      '对接客户梳理海外业务需求，梳理网站信息架构、栏目规划。',
      '输出页面交互原型，完成全站 PC 端、移动端 UI 视觉设计。',
      '制定网站视觉规范、组件，统一按钮、卡片、表单、图文模块样式。',
      '对接开发团队，跟进页面还原、多端适配验收，把控项目交付进度。',
      '项目前期使用 AIGC 辅助参考海外同类站点风格，提升视觉方向探索效率。',
    ],
  },
  process: [
    '信息架构重构：梳理首页、产品中心、技术方案、案例、关于我们、询盘、自动化工具子站点栏目，重新规划导航层级，简化海外用户查找信息路径。',
    '多端交互设计：分别完成 PC 宽屏版、移动端适配原型，重点处理产品列表、参数选择、图纸生成表单的交互逻辑。',
    '方案迭代取舍：参考海外制造业网站审美，平衡商业宣传与信息可读性；针对自动化线路图页面，简化参数选择表单，降低客户操作门槛。',
    '输出网站组件规范：统一卡片、按钮、表单、图文、弹窗、状态提示，保障全站视觉一致性，减少开发工作量。',
  ],
  processImages: [
    imagePath('taylorleds-process-01.jpg'),
    imagePath('taylorleds-process-02.jpg'),
    imagePath('taylorleds-process-03.jpg'),
    imagePath('taylorleds-process-04.jpg'),
  ],
  outcomes: [
    '海外官网、自动化线路图子站点全部正式上线，客户对改版设计及定制功能给予好评。',
    '完成全站 PC + 移动端全套 UI 设计、组件规范输出，实现多终端适配。',
    '自动化线路图功能上线，客户可自主生成线路示意图，减少人工图纸对接工作量。',
    '优化网站信息层级，强化询盘转化入口，提升海外 B 端客户浏览体验。',
  ],
  outcomesImage: imagePath('taylorleds-outcomes.jpg'),
  outcomesCopy: '围绕海外品牌官网与自动化线路图工具的改版目标，完成从信息架构、交互设计到设计规范与开发协作的完整交付。',
  outcomesLayout: 'dark-feature',
}

export const proofPoints = [
  { value: '19 年', label: '正式工作经验' },
  { value: '14 年', label: '网页设计经验' },
  { value: '10 年', label: 'UI / 产品设计经验' },
  { value: '0-1', label: '全链路交付能力' },
]

export const capabilities = [
  {
    number: '01',
    title: '需求与产品策略',
    copy: '承接商务沟通与需求梳理，把业务目标、用户问题和产品范围整理成可执行方案。',
    tags: ['商务对接', '需求分析', '产品规划'],
  },
  {
    number: '02',
    title: 'UI / UX 产品设计',
    copy: '从信息架构、交互流程到视觉界面，覆盖小程序、APP、网站、PC 与 B 端后台体验。',
    tags: ['UX / UI', '交互设计', '设计系统'],
  },
  {
    number: '03',
    title: '开发协作与项目交付',
    copy: '理解前端实现与技术边界，统筹设计、开发、测试和客户两端，推动项目稳定落地。',
    tags: ['前端协作', '项目测试', '交付管理'],
  },
]

export const deliveryProof = [
  { label: '需求', value: '商务沟通 · 需求梳理 · 产品规划' },
  { label: '设计', value: '交互流程 · UI 视觉 · 设计系统' },
  { label: '交付', value: '开发协作 · 项目测试 · 两端统筹' },
]

export const experience: Experience[] = [
  {
    period: '2023.09-至今',
    role: '个人工作室｜数字化设计项目负责人',
    company: '自由设计师',
    projectsLabel: '业务方向',
    projects: '企业定制小程序、APP、海外官网、B 端管理后台全案设计。',
    workflow: [
      '商务与需求统筹：独立对接客户，挖掘业务痛点，完成需求拆解，输出需求清单与交互原型，建立标准化交付流程，减少沟通断层。',
      '全链路设计落地：独立完成原型架构、交互、UI 视觉、设计规范输出；联动资深外包技术团队，跟进开发还原。',
      'AI 流程落地：将 AIGC 融入项目全流程，辅助素材、原型初稿输出，保障质量同时缩短交付周期。',
      '项目闭环：负责上线前视觉、功能测试验收，跟进迭代修复。',
    ],
    results: [
      '0‑1 上线撼讯小程序、taylorleds 海外官网、taylorleds 自动化线路图网站、鲁欧制造官网、commarker 商城等商用项目；完成三源长生健康管理小程序全套设计，客户业务调整未上线。',
      '搭建标准化交付流程，信息断层率下降 40%，交付效率提升 25%，客户满意度 95%。',
      '落地 AI 设计工作流，初稿周期缩短 35%，开发返工率下降 27%；沉淀稳定技术外包合作团队。',
    ],
    links: [
      { label: 'Taylorleds 网站', href: 'https://www.taylorleds.com' },
      { label: '鲁欧制造官网', href: 'https://www.luology.com/' },
      { label: 'Commarker 商城', href: 'https://store.commarker.com/' },
    ],
  },
  {
    period: '2021.03-2023.08',
    role: 'UI设计师｜文旅产业',
    company: '深圳华侨城旅游互联网产业发展有限公司',
    projects: '负责智慧旅游平台、小程序、数字藏品、大屏互动类产品。',
    workflow: [
      '参与产品 0‑1 设计，梳理功能架构，输出 UI 交互方案，制定设计规范；把控界面架构、色彩与交互，匹配业务场景。',
      '协同产品、开发参与需求评审与全流程跟进，保障设计落地效果。',
    ],
    results: [
      '独立负责全域智慧旅游平台多版本、黄石卡乐星球小程序、文旅积分通兑平台落地；卡乐星球小程序累计访问 11058 人。',
      '输出完整组件库与设计规范，降低开发成本 30% 以上。',
      '完成数字藏品、旅游线路等 4 个衍生小程序交付。',
    ],
  },
  {
    period: '2020.03-2021.03',
    role: '设计经理｜科技互联网',
    company: '深圳邦拓盛世品牌咨询管理有限公司',
    projects: '服务 TCL、康佳、撼讯、七彩虹、紫光、红魔等硬件品牌。',
    workflow: [
      '管理 4‑5 人设计团队，分配任务、把控质量、内部培训分享。',
      '对接业务部门，梳理需求、管控变更；输出海报、详情页、发布会物料、VI 视觉体系。',
      '拓展官网、H5、动态表情包新业务线。',
    ],
    results: [
      '输出 100+ 营销海报，交付 10 套完整设计方案，客户满意度 100%；新增业务板块拓展公司营收。',
    ],
  },
  {
    period: '2018.12-2019.11',
    role: 'UI设计师｜物联网',
    company: '深圳市觅拓物联信息技术有限公司',
    projects: '物联网 B 端系统、官网、H5 设计，完成 4 个项目交付。',
    workflow: [],
    results: [],
  },
  {
    period: '2016.05-2018.10',
    role: 'UI设计师｜B2C电商平台',
    company: '深圳市海王健康实业有限公司',
    projects: '负责 B2C 电商 APP、小程序、官网改版与营销专题设计，输出完整设计方案并跟进落地。',
    workflow: [],
    results: [],
  },
  {
    period: '2012.05-2016.04',
    role: '视觉设计｜计算机硬件',
    company: '深圳市影驰科技有限公司',
    projects: '负责硬件品牌海外官网、产品专题页面设计，结合前端落地逻辑输出设计文件，沉淀网页设计实战经验。',
    workflow: [],
    results: [],
  },
]
