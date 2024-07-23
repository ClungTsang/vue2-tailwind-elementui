<template>
  <div class="bg-gray-200 h-screen">
    <header class="bg-white h-14 flex items-center justify-end px-6 cursor-pointer" @click="showLogin">登录</header>
    <LoginDialog v-model="loginVisible" />
  </div>
</template>
<script>
import LoginDialog from '../../components/login/index.vue'
export default {
  components: { LoginDialog },
  data() {
    return {
      loginVisible: false,
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {
    showLogin() {
      this.loginVisible = true
    }
  },
}
</script>
<style scoped></style>
