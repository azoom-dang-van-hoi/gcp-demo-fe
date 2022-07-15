<template>
  <div class="error-layout">
    <h1 v-if="error.message" class="message">{{ error.message }}</h1>
    <h1 v-else class="message">存在しないページです。</h1>
    <NuxtLink :to="goToListPage()">{{ text }}</NuxtLink>
  </div>
</template>

<script>
import { pathified } from '@/util'
import { USER_ROLE, DEFAULT_ENDPOINT } from '@/constants/index.js'

const userStore = pathified('user')
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      text: 'ホームページへ',
    }
  },
  computed: {
    user: userStore.$get('user'),
  },
  methods: {
    goToListPage() {
      if (this.user?.role === USER_ROLE.admin) {
        this.text = '契約一覧ページに戻る'
        return DEFAULT_ENDPOINT.admin
      }
      if (this.user?.role === USER_ROLE.owner) {
        this.text = '申込一覧ページに戻る'
        return DEFAULT_ENDPOINT.owner
      }
      return '/'
    },
  },
}
</script>
<style lang="scss" scoped>
.error-layout {
  text-align: center;
  > .message {
    padding: 50px;
  }
}
</style>
