# AGENTS.md — Personal Website Harness

本文件用于 AI 编程助手 / 开发者接手项目时快速理解项目约束。

## Mission
保持个人网站：快速、清晰、编辑感强、便于维护，并优先服务作品展示与项目询盘。

## Before editing
1. 先阅读 `HARNESS.md`、`docs/CUSTOMIZATION.md`。
2. 内容数据优先修改 `src/data/site.ts`。
3. 不要无理由增加第三方 UI 框架。
4. 视觉调整优先使用现有 CSS token 和网格。

## Page contract
每个页面必须：
- 有明确 H1 / 语义结构
- 调用 `useDocumentTitle()`
- 在 375 / 768 / 1440px 下可用
- 键盘可访问
- 不依赖 hover 才能获取关键信息

## Component contract
- 通用组件放 `src/components`
- 页面组合放 `src/pages`
- 类型放 `src/types`
- 内容数据放 `src/data`
- 不复制相同业务数据到多个文件

## Visual contract
- 使用已有 spacing / line / type rhythm
- 主视觉尽量由项目内容驱动
- 动效保持轻量，并尊重 `prefers-reduced-motion`
- 不引入无意义阴影、渐变、玻璃拟态或卡片堆叠

## Completion checklist
运行：
`npm run typecheck && npm run lint && npm run test && npm run build`
