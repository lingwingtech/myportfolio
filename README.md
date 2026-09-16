# Personal Web Harness

一个适用于设计师、创意工作者、独立开发者的完整个人网站开发 Harness。

## Included
- React + TypeScript + Vite
- React Router 多页面路由
- 首页 / Work / Project Detail / About / Contact / 404
- 响应式布局
- 可配置项目数据层
- 移动端菜单
- 联系表单（mailto / API endpoint 双模式）
- ESLint + TypeScript strict mode
- Vitest 基础测试
- SEO 基础 meta
- Vercel / Netlify 部署说明
- 无 UI 框架依赖，便于二次设计

## Start
```bash
npm install
npm run dev
```

打开：`http://localhost:5173`

GitHub Pages：`https://lingling0827.github.io/LINGYI/`

## Quality checks
```bash
npm run typecheck
npm run lint
npm run test
npm run build
```

## Structure
```text
personal-web-harness/
├─ public/
├─ src/
│  ├─ components/
│  ├─ data/
│  ├─ hooks/
│  ├─ layouts/
│  ├─ pages/
│  ├─ styles/
│  ├─ types/
│  └─ utils/
├─ tests/
├─ docs/
├─ .env.example
├─ package.json
├─ vite.config.ts
└─ README.md
```

## Recommended next steps
1. 用真实项目图片替换视觉占位块
2. 修改 `src/data/site.ts` 中的个人资料和作品
3. 根据个人品牌调整 `global.css`
4. 连接真实联系表单服务
5. 增加 Analytics / Sitemap / CMS（如需要）
