<template>
  <div id="app">
    <app-header />
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/app-header.vue";

export default {
  components: { AppHeader },
};
</script>

<style lang="scss">

</style>
