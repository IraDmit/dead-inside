<template>
  <div id="app" :class="theme" ref="app">
    <app-header @setTheme="setTheme" class="header" ref="header" />
    <!-- <component v-for="(tag, idx) in tags2" :key="idx" :is="tag">{{ tag }}</component> -->
    <!-- <app-photo-item /> -->
    
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <app-login v-if="getModal === 'login'" :header="product.colors.length">
      <template #header>
      </template>
      <template #description>
      </template>
    </app-login>
    <app-registration v-if="getModal === 'register'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppLogin from "./components/app-login.vue";
import AppRegistration from "./components/app-registration.vue";

import AppHeader from "./components/navigations/app-header.vue";

export default {
  components: { AppHeader, AppRegistration, AppLogin },
  // filters: {
  //   more10(value) {
  //     if (value < 10) {
  //       return "0" + value;
  //     } else {
  //       return value;
  //     }
  //   },
  // },
  data() {
    return {
      theme: "white",
      // test2: "",
      product: {
        colors: ["#000"]
      },
    
      
      // tags: ['div','span','p','label'],
    };
  },
  computed: {
    ...mapGetters(["getModal"]),
  },
  methods: {
    setTheme(theme) {
      this.theme = theme;
    },
  },
  mounted() {
    // const header = document.querySelector('.header')
    // console.log(header);
    console.log(this.$refs.app);
    // console.log(this.$refs.header.$refs.asd.$refs.form);
    // this.test2 = this.$refs.header.isBlack;
    // this.$refs.header.test();
  },
};
</script>

<style lang="scss"></style>
