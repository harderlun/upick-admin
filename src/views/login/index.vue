<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到Upick甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="login_btn"
              :loading="loading"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
// 引入用户小仓库
import useUserStore from '@/store/moudules/user'

// 获取路由器
let $router = useRouter()
// 获取小仓库
let useStore = useUserStore()
// 定义变量控制按钮加载效果
let loading = ref(false)

//收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: 'atguigu123' })

// 自定义校验规则
const validatorUserName = (rule: any, value: any, callback: any) => {
  // rule:校验规则对象
  // value:表单元素文本内容
  // callback:符合条件，callback放行，不符合，注入错误提示信息
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

// 定义表单校验需要的配置对象
const rules = {
  username: [
    // {
    //   required: true, //代表字段必须校验
    //   min: 5,
    //   max: 10,
    //   message: '长度应为6-10位',
    //   trigger: 'change', //change:文本改变；blur:失去焦点
    // },
    { trigger: 'blur', validator: validatorUserName },
  ],
  password: [
    // {
    //   required: true,
    //   min: 6,
    //   max: 10,
    //   message: '长度应为6-15位',
    //   trigger: 'change',
    // },
    { trigger: 'blur', validator: validatorPassword },
  ],
}
// 获取表单元素
let loginForms = ref()

const login = async () => {
  // 保证全部表单项校验通过
  await loginForms.value.validate()
  // 登录按钮效果
  loading.value = true
  // 点击登录以后干什么
  // 通知仓库发起请求
  // 请求成功->路由跳转
  // 请求失败->弹出登录失败信息
  try {
    await useStore.userLogin(loginForm)
    // 跳转首页
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '登录成功！',
      title: `HI,${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    // 登录失败加载效果消失
    loading.value = false
    // 失败提示
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png') no-repeat;
    background-size: cover;
    padding: 40px;
    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 20px;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
