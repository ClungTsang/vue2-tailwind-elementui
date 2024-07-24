<template>
  <div class="bg-gray-200 h-screen">
    <header class="bg-white h-14 flex items-center justify-end px-6 ">
      <div class="cursor-pointer" @click="articleVisible = true">新增文章</div>
      <div @click="showLogin" class="cursor-pointer mx-10">
        登录
      </div>
      <div @click="logout" class="cursor-pointer">
        退出登录
      </div>
    </header>
    <main>
      <el-table :data="pagination.list" border stripe>
        <el-table-column align="center" show-overflow-tooltip v-for="col in columns" :prop="col.id" :key="col.id"
          :label="col.label">
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-link type="primary" @click="showDetail(scope.row)">查看</el-link>
          </template>
        </el-table-column>
      </el-table>
    </main>
    <Article v-model="articleDetailVisible" :article="article" />
    <ArticleAdd v-model="articleVisible" @addArticleDone="getList" />
    <LoginDialog v-model="loginVisible" @loginSuccess="getList" />
  </div>
</template>
<script>
import LoginDialog from '@/components/login/index.vue'
import Article from '@/components/article/index.vue'
import ArticleAdd from '@/components/article/add.vue'
import { getArticleList } from '@/api'
import Cookies from 'js-cookie';
export default {
  components: { LoginDialog, ArticleAdd, Article },
  data() {
    return {
      loginVisible: false,
      articleVisible: false,
      articleDetailVisible: false,
      article: '',
      pagination: {
        pageNum: 1,
        pageSize: 20,
        total: 0,
        list: [],
      },
      columns: [
        { id: 'id', label: 'id' },
        { id: 'userInfoId', label: '用户id' },
        { id: 'title', label: '标题' },
        { id: 'author', label: '作者' },
        { id: 'createTime', label: '创建时间' },
        { id: 'contentInformation', label: '内容' },
        { id: 'numberOfViews', label: '观看量' },
        { id: 'picture', label: '图片' },
      ]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    showLogin() {
      this.loginVisible = true
    },
    async getList() {
      const data = await getArticleList(this.pagination)
      this.pagination.list = data
    },
    logout() {
      Cookies.remove('verificationRequestHeader')
      this.$message.success('退出成功')
    },
    showDetail(article) {
      this.article = article
      this.articleDetailVisible = true
    }
  },
}
</script>
<style scoped></style>
