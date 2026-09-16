# Development Harness

## Product goal
构建一个强调个人品牌、作品展示和业务转化的现代个人网站。

## Core routes
- `/` 首页：定位、精选项目、设计方法
- `/work` 项目列表
- `/work/:slug` 项目详情
- `/about` 关于 / 履历
- `/contact` 联系 / 项目询盘
- `*` 404

## Design principles
1. 内容优先，视觉克制。
2. 作品图和标题承担主要视觉权重。
3. 网格与留白保持一致。
4. 数据与 UI 解耦，作品内容集中维护。
5. 移动端不是缩小版桌面，而是重新排序后的信息层级。

## Engineering rules
- TypeScript strict mode
- 页面组件只负责布局和组合
- 可复用内容进入 `components/`
- 数据进入 `data/`
- 不把业务数据硬编码到多处
- 新页面必须有 document title
- 交互必须考虑 keyboard / reduced motion
- 新增依赖前优先评估原生能力

## Definition of done
- `npm run typecheck` 通过
- `npm run lint` 通过
- `npm run test` 通过
- `npm run build` 通过
- 375px / 768px / 1440px 宽度下布局正常
- 所有导航和项目链接可访问
- Contact 有可用提交路径
- 图片带 alt 文本（添加真实图片后）
