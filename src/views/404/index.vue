<template>
  <div style="padding: 2rem">
    <h2>发布失物信息</h2>
    <el-form :model="form">
      <el-form-item label="标题">
        <el-input v-model="form.title" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.description" />
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.contact" />
      </el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import request1 from '@/utils/request1'
import { ElMessage } from 'element-plus'

const form = reactive({
  title: '',
  description: '',
  contact: '',
})

const submit = async () => {
  const res = await request1.post('/api/lost', form)
  ElMessage.success('提交成功！')
}
</script>
