# Architecture

## Data flow
`src/data/site.ts` → page/components → rendered routes.

项目内容使用静态 typed data，适合个人站初期快速上线。后续若项目数量增加，可把该层替换为 CMS adapter，同时保持 UI 不变。

## Route map
- Home → selected projects + positioning
- Work → all projects
- Project → slug-based case study
- About → bio + experience
- Contact → inquiry conversion

## Scaling path
### Stage 1 — Static
当前版本；最快、最稳定。

### Stage 2 — Content files
可替换为 Markdown / MDX，每个案例独立文件。

### Stage 3 — CMS
可接入 Sanity / Contentful / Strapi / Notion API，自定义 `projectRepository` 即可。

## Contact strategy
- 无 endpoint：mailto fallback
- 有 endpoint：POST FormData
- 可接 Serverless Function 做邮件发送、CRM 或数据库记录
