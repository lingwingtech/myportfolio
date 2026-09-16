# Customization Guide

## 1. 修改个人信息
编辑 `src/data/site.ts`：
- `site.name`：网站名 / 个人名
- `site.role`：职业定位
- `site.location`：所在地
- `site.email`：联系邮箱
- `site.intro`：首页简介
- `socials`：社交链接

## 2. 修改项目案例
在 `projects` 数组中新增/删除项目。`slug` 会自动用于 `/work/:slug` 路由。

## 3. 替换项目图片
当前 Harness 使用纯色视觉占位块，方便先搭结构。
建议：
1. 把图片放入 `public/images/`
2. 在 Project 类型中增加 `image` 字段
3. 在 `ProjectCard.tsx` 和 `ProjectPage.tsx` 中使用 `<img>` 替换占位内容

## 4. 修改视觉风格
全局颜色和字体在 `src/styles/global.css` 顶部 `:root` 中配置。

## 5. 联系表单
默认使用 `mailto:`。
若有 Formspree / 自建 API / Serverless Function：
1. 复制 `.env.example` 为 `.env`
2. 设置 `VITE_CONTACT_ENDPOINT=https://...`
3. 表单会自动改为 POST 请求
