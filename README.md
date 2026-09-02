# 文达AI论文助手 - 智能论文写作平台

<div align="center">

![Logo](https://img.shields.io/badge/文达AI-论文助手-0d5c63?style=for-the-badge)

** 3分钟轻松搞定一篇高质量文章 | AI驱动 · 学术规范 · 智能生成**

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Version](https://img.shields.io/badge/Version-1.0.0-green.svg)]()
[![CKEditor](https://img.shields.io/badge/Editor-CKEditor5-orange.svg)]()

[在线演示](#) · [使用文档](#) · [API文档](#) · [更新日志](#)

</div>

---

## 📖 项目简介

**文达AI论文助手**是一款基于人工智能的智能化论文写作平台，采用现代化的分屏布局设计，集成CKEditor 5富文本编辑器，为用户提供从大纲生成到全文撰写的完整论文写作解决方案。

### ✨ 核心特性

- 🚀 **三步完成论文**：输入题目 → 编辑大纲 → 下载全文
- 🎨 **现代化UI设计**：采用分屏式布局，响应式设计，支持全设备适配
- ️ **富文本编辑**：集成CKEditor 5，支持Markdown语法和实时预览
- 📊 **智能大纲生成**：AI自动生成二级/三级大纲，支持自定义调整
- 💾 **自动保存**：每30秒自动保存草稿，防止内容丢失
- 📱 **全平台支持**：完美适配桌面、平板、手机等设备

---

##  使用流程

### **步骤一：输入文章题目**

填写论文基本信息，包括论文类型、专业学科、论文题目、学历层次、大纲详细程度和预期字数等参数。

![步骤1截图](./screenshots/step1-input.png)

**功能特点：**
- 📝 8种论文类型选择（论文助手、期末范文、课程范文等）
- 🎓 4个学历层次（专科、本科、研究生、博士）
- 📏 灵活的字数设置（8000-50000字）
- 🎯 二级/三级大纲选择

---

### **步骤二：编辑大纲**

查看和修改AI生成的论文大纲，使用CKEditor 5富文本编辑器进行精细化编辑。

![步骤2截图](./screenshots/step2-editor.png)

**功能特点：**
- ✨ 智能生成完整论文大纲结构
-  富文本编辑（标题、粗体、列表、表格等）
- 📊 实时字数和字符数统计
-  自动保存草稿功能
-  支持导出HTML格式
-  一键重置内容

---

### **步骤三：下载文章**

查看生成状态，下载完整论文及相关资料（Word、PDF、PPT等格式）。

![步骤3截图](./screenshots/step3-download.png)

**功能特点：**
- ✅ 实时显示各部分完成状态
- 📥 多格式下载支持（Word、PDF）
-  毕业设计全套大礼包
-  答辩PPT自动生成
-  AIGC痕迹降低工具

---

## 🛠️ 技术栈

### 前端框架
- **HTML5** - 语义化结构
- **CSS3** - 现代化样式设计
- **JavaScript (ES6+)** - 交互逻辑

### 核心库
- **CKEditor 5** - 富文本编辑器
- **Font Awesome 6** - 图标库

### 设计理念
- **响应式设计** - 移动优先
- **CSS Variables** - 主题色管理
- **Flexbox & Grid** - 现代化布局

---

## 📦 项目结构

```
versabot-ai-paper/
├── index.html              # 主页面
├── css/
│   └── style.css          # 样式文件
├── js/
│   └── main.js            # 脚本文件
├── screenshots/           # 项目截图
│   ├── step1-input.png
│   ├── step2-editor.png
│   └── step3-download.png
├── README.md              # 项目说明
└── LICENSE                # 开源协议
```

---

## 🚀 快速开始

### 方式一：直接打开
```bash
# 直接在浏览器中打开 index.html
open index.html
```

### 方式二：本地服务器
```bash
# 使用Python启动本地服务器
python -m http.server 8080

# 访问 http://localhost:8080
```

### 方式三：VS Code Live Server
```bash
# 安装Live Server插件
# 右键 index.html -> "Open with Live Server"
```

---

## 🎨 设计规范

### 色彩系统
```css
--primary: #0d5c63;        /* 主色调 - 深青绿 */
--primary-light: #148a8a;  /* 浅色变体 */
--primary-dark: #0a4a50;   /* 深色变体 */
--primary-bg: #e8f4f5;     /* 背景色 */
--secondary: #1aaba8;      /* 辅助色 */
```

### 布局设计
- **侧边栏宽度**：320px（桌面端）
- **主内容区**：自适应剩余空间
- **卡片圆角**：8px - 16px
- **阴影层次**：3级阴影系统

### 响应式断点
```css
/* 桌面端 */
@media (min-width: 1025px) { ... }

/* 平板端 */
@media (max-width: 1024px) { ... }

/* 移动端 */
@media (max-width: 768px) { ... }
```

---

## 📝 功能详解

### 1. 分屏式布局
采用左侧固定宽度（320px）步骤导航 + 右侧动态内容区域的设计，符合F型阅读模式，减少页面滚动，保持上下文可见性。

### 2. 卡片式工作区
每个步骤使用可折叠卡片组织，完成步骤后卡片收起并显示关键信息，当前步骤卡片展开提供完整操作界面，降低认知负荷。

### 3. CKEditor 5集成
- **工具栏自定义**：标题、粗体、斜体、列表、引用、表格
- **实时统计**：字数、字符数、最后保存时间
- **快捷键支持**：Ctrl+S保存，Ctrl+Z撤销
- **粘贴优化**：支持Word文档直接粘贴

### 4. 自动保存机制
```javascript
// 每30秒自动保存到LocalStorage
setInterval(() => {
    const content = editorInstance.getData();
    localStorage.setItem('paper_draft', content);
}, 30000);
```

### 5. 进度指示器
顶部进度条实时显示完成度（33% → 66% → 100%），侧边栏步骤卡片显示当前状态（进行中/已完成/未开始）。

---

## 🔧 配置选项

### 论文类型配置
```javascript
const paperTypes = [
    { id: 'thesis', name: '论文助手', icon: 'fa-file-alt' },
    { id: 'final', name: '期末范文', icon: 'fa-book' },
    { id: 'course', name: '课程范文', icon: 'fa-graduation-cap' },
    // ... 更多类型
];
```

### 编辑器配置
```javascript
ClassicEditor.create(document.querySelector('#editor'), {
    toolbar: ['heading', 'bold', 'italic', 'link', /* ... */],
    heading: {
        options: [
            { model: 'paragraph', title: '段落' },
            { model: 'heading2', view: 'h2', title: '标题2' },
            { model: 'heading3', view: 'h3', title: '标题3' }
        ]
    }
});
```

---

##  移动端适配

### 侧边栏处理
- 桌面端：固定显示左侧
- 平板/移动端：收起为汉堡菜单，点击展开侧边栏

### 内容优化
- 卡片宽度：100%自适应
- 按钮布局：垂直堆叠，全宽显示
- 字体大小：根据屏幕尺寸动态调整

---

##  贡献指南

欢迎提交Issue和Pull Request！

### 开发流程
1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

### 代码规范
- 使用ESLint进行代码检查
- 遵循Airbnb JavaScript风格指南
- 提交信息使用约定式提交规范

---

## 📄 开源协议

本项目采用 [MIT 协议](LICENSE) 开源。

```
MIT License

Copyright (c) 2026 文达AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

---

## 👥 团队介绍

**文达AI团队** - 致力于用人工智能技术提升学术写作效率

- 💼 产品方向：学术写作工具、AI辅助创作
- 🎯 使命：让每个人都能高效完成高质量论文
-  愿景：成为最受信赖的智能写作平台

---

## 📮 联系方式

- 📧 邮箱：support@versabot.cn
- 💬 微信群：扫描二维码加入用户群
- 🐦 Twitter：[@VersaBotAI](#)
-  GitHub Issues：[提交问题](https://github.com/your-repo/issues)

---

## 🙏 致谢

感谢以下开源项目：
- [CKEditor 5](https://ckeditor.com/) - 富文本编辑器
- [Font Awesome](https://fontawesome.com/) - 图标库
- 所有为本项目做出贡献的开发者

---

<div align="center">

**⭐ 如果这个项目对你有帮助，请给一个Star！**

Made with ❤️ by 文达AI团队

</div>
