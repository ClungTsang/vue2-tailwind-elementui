<template>
  <div class="w-screen h-screen bg-gray-200">
    <div v-html="data?.content" v-if="data?.content"></div>
    <el-button v-else type="primary" class="mx-auto" size="default" @click="getInfo">获取数据</el-button>
  </div>
</template>
<script>
import { getTopicById } from '@/api'
export default {
  data() {
    return {
      data: { content: "" }
    }
  },
  methods: {
    async getInfo() {
      const { data } = await getTopicById('5433d5e4e737cbe96dcef312')
      this.data.content = data.content
      this.$message.success('请求成功')
    }
  },
}
</script>
<style scoped></style>
