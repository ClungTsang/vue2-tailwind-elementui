<template>
  <el-dialog title="查看文章" :visible.sync="visible" width="50%" @close="closeDialog">
    {{ article }}
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  model: {
    prop: "articleDetailVisible",
    event: "changeArticleVisible",
  },
  props: {
    articleDetailVisible: {
      type: Boolean,
      default: false
    },
    article: {
      type: String,
      default: ''
    },
  },
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
        return this.articleDetailVisible
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
  },
}
</script>
<style scoped></style>
