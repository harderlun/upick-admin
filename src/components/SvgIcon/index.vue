<template>
  <div>
    <svg :style="{ width:width, height:height }">
      <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  // link:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-',
  },
  // 提供使用图标名字
  name: String,
  // 接受父组件传递颜色
  color: {
    type: String,
    default: '',
  },
  // 接受父组件传递过来的图标的宽度
  width: {
    type: String,
    default: '16px',
  },
  height: {
    type: String,
    default: '16px',
  },
})
</script>
