# TingXuan 的空间 · TingXuan's Space

OpenAI 风格个人作品集 + 博客站点。**中英双语**，支持深浅色切换，自适应移动端。

## 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 页面结构 |
| `styles.css` | OpenAI 风格样式 + 深浅主题 |
| `i18n.js` | 中英双语字典 |
| `script.js` | 渲染逻辑（项目 / 博客 / 主题 / 语言切换） |
| `projects.js` | **项目数据** — 改这里更新项目展示 |
| `blogs.js` | **博客文章数据** — 改这里更新博客 |

## 修改内容

### 换成你的真实信息
- 编辑 `index.html`：GitHub 链接、邮箱地址
- 编辑 `projects.js`：替换示例项目为你的真实项目
- 编辑 `blogs.js`：替换示例博客为你的真实文章
- 编辑 `i18n.js`：微调任何中英文字幕

### 加新项目（projects.js）
```js
{
  title: "项目名",
  description: "一句话简介",
  tags: ["标签1", "标签2"],
  link: "https://github.com/...",
  linkText: "查看项目"
}
```

### 加新博客文章（blogs.js）
```js
{
  title: "中文标题",
  titleEn: "English Title",
  date: "2026-07-29",
  excerpt: "中文摘要",
  excerptEn: "English excerpt",
  emoji: "📝",
  link: "#"  // 文章链接
}
```

## 本地预览
直接用浏览器打开 `index.html` 即可。

## 部署到 GitHub Pages
1. 把本目录全部文件推送到 `dingxuaner/.github.io` 仓库的 main 分支。
2. Settings → Pages → Source: main branch, /(root) → Save。
3. 访问 https://dingxuaner.github.io

> 每次修改 projects.js 或 blogs.js 后推送，网站自动重新发布。
