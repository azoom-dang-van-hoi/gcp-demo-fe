<template>
  <div class="wrapper">
    <p class="text">Home page</p>
    <nuxt-link class="link" to="/admins">Admin page</nuxt-link>
    <nuxt-link class="link" to="/owners">Owner page</nuxt-link>
    <a
      href="https://hoi-pomerium.jp.auth0.com/v2/logout?
client_id=PdaOPQuCxQrMeM7mxBhjVMqRItVlPRoM&
returnTo=https://hoi-demo-pomerium-trkregf5uq-an.a.run.app/logout"
      >Logout</a
    >
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
    this.reloadPage()
  },
  methods: {
    reloadPage() {
      const isReload = localStorage.getItem('reload')
      if (isReload) {
        localStorage.removeItem('reload')
        window.location.reload()
      }
    },
  },
}
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.wrapper .text {
  font-size: 20px;
}
.wrapper .link {
  color: blue;
  font-size: 24px;
}
</style>
