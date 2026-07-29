// 你的项目数据：在这里增删改即可，网站会自动渲染。
// 每个项目字段：
//   title       项目名称（必填）
//   description 一句话简介（必填）
//   tags        技术标签数组（可选）
//   link        项目链接，如 GitHub / 演示地址（可选）
//   linkText    链接文字（可选，默认“查看项目”）
const projects = [
  {
    title: "六足机器人运动控制系统",
    description: "基于 ROS2 与强化学习的六足机器人步态规划与平衡控制，支持遥操作与自主巡检。",
    tags: ["ROS2", "强化学习", "嵌入式"],
    link: "https://github.com/yourname/hexapod",
    linkText: "查看项目"
  },
  {
    title: "基于 Isaac Lab 的抓取策略训练",
    description: "在 Isaac Lab 仿真环境中训练机器人抓取策略，并迁移到真实机械臂，闭环成功率显著提升。",
    tags: ["Isaac Lab", "Sim-to-Real", "仿真"],
    link: "https://github.com/yourname/grasp-policy",
    linkText: "查看项目"
  },
  {
    title: "AI 自媒体生产流水线",
    description: "本地 GPU 部署的自动化内容生产链路：脚本生成 → AI 视频 → 配音 → 字幕 → 自动发布。",
    tags: ["自动化", "本地部署", "FFmpeg"],
    link: "https://github.com/yourname/ai-pipeline",
    linkText: "查看项目"
  }
];
