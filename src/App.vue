<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$route.meta.layout || 'default-layout'
    }
  },
};
</script>

<style lang="scss" scoped>
</style>