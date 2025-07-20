import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
//@ts-check
import { zhCn } from 'element-plus/es/locales.mjs'
// 引入路由
import router from './router'
//svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 引入样式文件
import '@/styles/index.scss'
// 引入全局组件
import gloablComponent from './components/index'
// 引入仓库
import pinia from './store'

// 获取应用实例对象
const app = createApp(App)

app.use(gloablComponent)
app.use(router)
app.use(pinia)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})

// 将应用挂载到挂载点上
app.mount('#app')
