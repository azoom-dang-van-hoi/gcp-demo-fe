<template>
  <div class="wrapper">
    <iframe
      src="https://hoi-demo-pomerium-trkregf5uq-an.a.run.app/.pomerium/"
      id="myFrame"
      class="iframe"
      frameborder="0"
      ></iframe
    >
  </div>
</template>

<script>
import { pathified } from '@/util'
const { $commit } = pathified('user')
export default {
  name: 'IndexPage',
  mounted() {
    // this.checkLogoutAuth0()
    document.getElementById('myFrame').onload = () => {
      this.logout()
    }
  },
  methods: {
    logout() {
      const iframe = document.getElementById('myFrame')
      const form = iframe.contentWindow.document.querySelector('form')
      if (form) {
        form.submit()
      }
      $commit('SET_USER', null)
      localStorage.setItem('reload', JSON.stringify(true))
      this.$router.push('/')
      // window.location.href = 'https://hoi-demo-pomerium-trkregf5uq-an.a.run.app'
    },
//     checkLogoutAuth0() {
//       let logoutAuth0
//       try {
//         logoutAuth0 = JSON.parse(this.$route.query?.logoutAuth0)
//       } catch (error) {
//         logoutAuth0 = false
//       }
//       console.log(logoutAuth0, 1111)
//       if (logoutAuth0) {
//         window.location.href = `https://hoi-pomerium.jp.auth0.com/v2/logout?
// client_id=PdaOPQuCxQrMeM7mxBhjVMqRItVlPRoM&
// returnTo=https://hoi-demo-pomerium-trkregf5uq-an.a.run.app/logout`
//       }
//     },
  },
}
</script>
<style scoped>
.iframe {
  display: none;
}
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
