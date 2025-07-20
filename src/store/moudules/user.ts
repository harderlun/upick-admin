// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginFormData, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(), //用户唯一标识token
    }
  },
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData) {
      // 登录请求
      const result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        // pinia仓库存储token
        // 由于pinia|vuex存储数据其实利用js对象
        this.token = result.data.token as string
        // 本地存储持久化
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default useUserStore
