<template>
  <div id="app" :class="theme">
    <app-header @setTheme="setTheme" />
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/navigations/app-header.vue";

export default {
  components: { AppHeader },
  data() {
    return {
      theme: 'white'
    }
  },
  methods:{
    setTheme(theme){
      this.theme = theme;
    }
  }
};
</script>

<style lang="scss">
</style>
