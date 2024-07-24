<template>
  <el-dialog title="登录" :visible.sync="visible" width="30%" @close="closeDialog">
    <span>
      <el-form :model="form" ref="form" label-width="80px" :inline="false" size="normal">
        <el-form-item required label="用户名" prop="number">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item required label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
      </el-form>
    </span>
    <span slot="footer">
      <el-button @click="closeDialog">取消</el-button>
      <el-button type="primary" @click="confirmLogin">登录</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { login } from "@/api/index.js";
import Cookies from "js-cookie";
export default {
  model: {
    prop: "loginVisible",
    event: "changeLoginVisible",
  },
  props: {
    loginVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['loginSuccess'],
  data() {
    return {
      form: {
        number: '',
        password: ''
      }
    }
  },
  mounted() {

  },
  computed: {
    visible: {
      get() {
        return this.loginVisible
      },
      set(val) {
        this.$emit('changeLoginVisible', val)
      }
    }
  },
  methods: {
    async confirmLogin() {
      const data = await login(this.form)
      Cookies.set('verificationRequestHeader', data)
      this.$message.success('登录成功')
      this.$emit('changeLoginVisible', false)
      this.$emit('loginSuccess')
    },
    closeDialog() {
      this.$emit('changeLoginVisible', false)
    },
  },
}
</script>
<style scoped></style>
