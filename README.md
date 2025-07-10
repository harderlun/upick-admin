# UPick 甄选优品后台管理系统

> 🚀 A modern admin dashboard for product management and business operations, built with Vue 3, TypeScript, and Element Plus.  
> 🚀 基于 Vue3 + TypeScript + Vite 的企业级商品后台管理系统，支持权限控制、图表展示、模块化开发。

---

## 🖼️ 项目预览 Preview

> 示例截图 / Preview Screenshots

![Dashboard Screenshot](./docs/dashboard-preview.png)  
![Product Page Screenshot](./docs/product-page.png)

---

## 🔧 技术栈 Technology Stack

| 技术         | 说明 / Description                   |
| ------------ | ----------------------------------- |
| Vue 3        | 渐进式前端框架 / Progressive Framework |
| TypeScript   | 类型安全 / Static Typing            |
| Vite         | 极速构建工具 / Fast Build Tool     |
| Pinia        | 轻量状态管理 / State Management     |
| Vue Router   | 路由管理 / SPA Routing              |
| Element Plus | 企业级组件库 / UI Component Library |
| Axios        | 网络请求库 / HTTP Client            |
| ECharts      | 图表展示 / Data Visualization       |
| SCSS         | 样式增强 / CSS Preprocessor         |

---

## ✨ 核心功能 Features

- ✅ 登录 / 权限校验 Login & Permission Control  
- ✅ 菜单动态渲染 Dynamic Sidebar Menu  
- ✅ 用户 / 角色管理 User & Role Management  
- ✅ 品牌管理 / 商品分类 Brand & Category Management  
- ✅ SPU / SKU 商品管理 Product (SPU & SKU) CRUD  
- ✅ 表格分页 / 多选批量操作 Paginated Tables  
- ✅ 文件上传 / 图片预览 File Upload & Preview  
- ✅ 数据可视化 Dashboard & ECharts  
- ✅ 表单校验 / 动态表单 Validation & Dynamic Forms  
- ✅ 完整的模块化目录结构 Scalable Modular Architecture  

---

## 📦 安装与启动 Getting Started

### 1. 克隆仓库 Clone Repo

```bash
git clone https://github.com/your-username/upick-admin.git
cd upick-admin
2. 安装依赖 Install Dependencies
bash
复制
编辑
pnpm install
# 或者 yarn install / npm install
3. 本地运行 Run Dev Server
bash
复制
编辑
pnpm dev
4. 打包构建 Build for Production
bash
复制
编辑
pnpm build
📁 项目结构 Project Structure
bash
复制
编辑
├── public/                  # 公共资源
├── src/
│   ├── api/                 # 接口封装
│   ├── assets/              # 静态资源
│   ├── components/          # 通用组件
│   ├── layout/              # 布局结构
│   ├── router/              # 路由配置
│   ├── store/               # Pinia 状态管理
│   ├── views/               # 页面视图
│   ├── utils/               # 工具函数
│   └── App.vue / main.ts    # 应用入口
├── .eslintrc.cjs            # ESLint 规则
├── vite.config.ts           # Vite 配置
├── tsconfig.json            # TS 配置
├── README.md
🤝 项目适合人群 Who Should Use This
学习 Vue3 + TypeScript 的开发者

正在搭建企业后台项目的团队

想了解中后台权限控制 / 表单设计 / 模块化架构的前端工程师


👨‍💻 项目作者
harderlun

欢迎 Star ⭐｜欢迎 PR ✨｜欢迎 Fork 🍴