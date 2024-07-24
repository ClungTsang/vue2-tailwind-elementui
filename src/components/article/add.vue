<template>
  <el-dialog title="新增文章" :visible.sync="visible" width="50%" @close="closeDialog">
    <span>
      <el-form :model="form" ref="form" label-width="80px" :inline="false" size="normal">
        <el-form-item required label="文章标题" prop="title">
          <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item required label="作者" prop="author">
          <el-input v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item required label="内容" prop="contentInformation">
          <el-input type="textarea" v-model="form.contentInformation"></el-input>
        </el-form-item>
        <el-form-item required label="阅读量" prop="numberOfViews">
          <el-input-number v-model="form.numberOfViews"></el-input-number>
        </el-form-item>
      </el-form>
    </span>
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="confirmAdd">新增</el-button>
    </span>
  </el-dialog>
</template>
<script>
import dayjs from 'dayjs';
import { addArticle,mqArticle } from "@/api/index.js";
export default {
  model: {
    prop: "articleVisible",
    event: "changeArticleVisible",
  },
  props: {
    articleVisible: {
      type: Boolean,
      default: false
    },
  },
  emits: ['addArticleDone'],
  data() {
    return {
      form: {
        title: '',
        author: '',
        contentInformation: '',
        numberOfViews: '',
        createTime: ''
      }
    }
  },
  computed: {
    visible: {
      get() {
        return this.articleVisible
      },
      set(val) {
        this.$emit('changeArticleVisible', val)
      }
    }
  },
  methods: {
    closeDialog() {
      this.$emit('changeArticleVisible', false)
    },
    async confirmAdd() {
      this.form.createTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
      await addArticle(this.form)
      mqArticle()
      this.$message.success('新增成功')
      this.form = {
        title: '',
        author: '',
        contentInformation: '',
        numberOfViews: '',
        createTime: ''
      }
      this.$emit('addArticleDone')
      this.closeDialog()
    }
  },
}
</script>
<style scoped></style>
