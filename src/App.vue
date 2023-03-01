<template>
  <div id="app" :class="theme">
    <app-header @setTheme="setTheme"/>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <app-login  v-if="getModal === 'login'"/>
    <app-registration  v-if="getModal === 'register'"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppLogin from "./components/app-login.vue";
import AppRegistration from "./components/app-registration.vue";
import AppHeader from "./components/navigations/app-header.vue";

export default {
  components: { AppHeader, AppRegistration, AppLogin },
  data() {
    return {
      theme: "white",
    };
  },
  computed:{
...mapGetters(['getModal']),
  },
  methods: {
    setTheme(theme) {
      this.theme = theme;
    },
  },
};
</script>

<style lang="scss"></style>
