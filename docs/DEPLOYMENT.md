# Deployment

## Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

## Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## GitHub Pages
如果部署到子路径，请在 `vite.config.ts` 中配置 `base`，并处理 React Router 的 SPA fallback。

## Custom domain
把 `VITE_SITE_URL` 设置为你的正式域名，并在部署平台绑定域名。
