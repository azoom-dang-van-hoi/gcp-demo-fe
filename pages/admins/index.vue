<template>
  <div class="wrapper">
    Admin page
    <admin-view-component />
  </div>
</template>

<script>
import AdminViewComponent from '~/components/AdminViewComponent.vue'
export default {
  components: { AdminViewComponent },
  name: 'IndexPage',
  data() {
    return {
      user: null,
    }
  },
}
</script>
<style lang="css" scoped>
.wrapper {
  font-size: 20px;
}
</style>
