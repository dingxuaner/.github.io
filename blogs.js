// 博客文章数据：在这里增删改即可。
// 每篇文章字段：
//   title       标题（必填）
//   titleEn     英文标题（必填，双语支持）
//   date        日期字符串，如 "2026-07-29"（必填）
//   excerpt     摘要（必填）
//   excerptEn   英文摘要（必填）
//   emoji       封面图标/emoji（可选，默认 "📝"）
//   link        文章链接（可选，留空则卡片不可点击跳转）
const blogs = [
  {
    title: "如何用 AI 从零搭建个人网站",
    titleEn: "Building a Personal Website from Scratch with AI",
    date: "2026-07-29",
    excerpt: "记录我用 AI 辅助生成代码、部署到 GitHub Pages 的全过程。从零到上线只用了半小时。",
    excerptEn: "How I used AI to generate code and deploy a personal site to GitHub Pages — from zero to live in under 30 minutes.",
    emoji: "🌐",
    link: "#"
  },
  {
    title: "Isaac Lab 入门：仿真环境搭建笔记",
    titleEn: "Getting Started with Isaac Lab: Setup Notes",
    date: "2026-07-20",
    excerpt: "在本地跑通 Isaac Lab 仿真的踩坑记录，包括 Docker 环境配置、GPU 加速和第一个抓取任务。",
    excerptEn: "Notes on getting Isaac Lab running locally — Docker setup, GPU acceleration, and my first grasping task.",
    emoji: "🤖",
    link: "#"
  },
  {
    title: "本地部署 AI 视频生成流水线",
    titleEn: "Local AI Video Generation Pipeline",
    date: "2026-07-10",
    excerpt: "用 Pinokio + 本地 GPU 搭建的视频自动化流程：脚本 → 视频 → 配音 → 字幕 → 发布。",
    excerptEn: "An automated video pipeline built with Pinokio + local GPU: script → video → voiceover → subtitles → publish.",
    emoji: "🎬",
    link: "#"
  }
];
