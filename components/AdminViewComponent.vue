<template>
  <div class="admin-view-component">
    <button class="btn" v-if="showActionButton" @click="clickTest">Console button</button>
    <p v-else>Admin chi co quyen view</p>
  </div>
</template>
<script>
import { PERMISSION_COMPONENT } from '@/constants'
export default {
  name: 'AdminComponent',
  created() {
    this.pemrissions = this.$permissionComponent('admin-view-component') || []
  },
  data() {
    return {
      pemrissions: [],
    }
  },
  computed: {
    showActionButton() {
      return (
        this.pemrissions.includes(PERMISSION_COMPONENT.edit) ||
        this.pemrissions.includes(PERMISSION_COMPONENT.fullPermission)
      )
    },
  },
  methods: {
    clickTest() {
      console.log('heoolo')
    },
  },
}
</script>
<style lang="scss" scoped>
.admin-view-component {
    margin-top: 20px;
}
.btn {
  color: red;
  border: 1px solid red;
  cursor: pointer;
  padding: 12px 24px;
}
</style>
