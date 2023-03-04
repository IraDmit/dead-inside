<template>
  <div id="app" :class="theme" ref="app">
    <app-header @setTheme="setTheme" class="header" ref="header" />
    <!-- <component v-for="(tag, idx) in tags2" :key="idx" :is="tag">{{ tag }}</component> -->
    <!-- <app-photo-item /> -->
    <div v-for="(item, idx) in res.content.list" :key="idx">
      <app-link :to="item.link">{{ item.title }}</app-link>
    </div>
    <div class="container">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <app-login v-if="getModal === 'login'">
      <template v-slot:header>
        <h2>{{ test.name }}</h2>
        <p>{{ test.desc }}</p>
      </template>
      <template #description>
        <p>slot 2</p>
      </template>
    </app-login>
    <app-registration v-if="getModal === 'register'" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppLogin from "./components/app-login.vue";
import AppRegistration from "./components/app-registration.vue";
import AppLink from './components/common/app-link.vue';
import AppHeader from "./components/navigations/app-header.vue";

export default {
  components: { AppHeader, AppRegistration, AppLogin, AppLink },
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
      test2: "",
      res: {
        component: "test",
        content: {
          list: [
            {
              title: "title1",
              description: "desc",
              link: "/users/1",
            },
            {
              title: "title2",
              description: "desc",
              link: "/users/2",
            },
            {
              title: "title1",
              description: "desc",
              link: "https://google.com",
            },
          ],
        },
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
    console.log(this.$refs.header);
    // console.log(this.$refs.header.$refs.asd.$refs.form);
    this.test2 = this.$refs.header.isBlack;
    // this.$refs.header.test();
  },
};
</script>

<style lang="scss"></style>
