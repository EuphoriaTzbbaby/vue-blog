<template>
  <h3>66666666666666666</h3>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { get, post, put, del } from '../../utils/axios/index.js'

// 定义 user 变量来保存用户信息
const user = ref<any>(null)

const getUser = async (id: number) => {
  try {
    console.log('555')
    const res = await get(`/users/${id}`)
    console.log(res.data)
    user.value = res.data// 将请求结果保存到 user 变量中
    console.log('777')
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  console.log('666')
  await getUser(1)// 使用 await 来确保异步请求完成
  console.log('888')
  console.log(user.value)// 打印实际的数据
  console.log(screen.width, screen.height)
})
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
