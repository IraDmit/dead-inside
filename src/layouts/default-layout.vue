<template>
  <div id="app" :class="theme" ref="app">
    <app-header @setTheme="setTheme" class="header" ref="header" />
    <div class="container">
      <transition name="fade">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </div>
      <keep-alive>
        <component :is="app-form"></component>
      </keep-alive>
    <transition name="modal">
      <app-login v-if="getModal === 'login'" :header="product.colors.length">
      </app-login>
      <app-registration v-if="getModal === 'register'" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppLogin from "@/components/app-login.vue";
import AppRegistration from "@/components/app-registration.vue";
import AppHeader from "@/components/navigations/app-header.vue";

export default {
  components: { AppHeader, AppRegistration, AppLogin },

  data() {
    return {
      theme: "white",
      product: {
        colors: ["#000"],
      },
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
    // console.log(this.$refs.app);
    // console.log(this.$refs.header.$refs.asd.$refs.form);
    // this.test2 = this.$refs.header.isBlack;
    // this.$refs.header.test();
  },
};
</script>

<style lang="scss">
.modal-enter-active,
.modal-leave-active {
  transition: 1s;
}
.modal-enter-to {
}
.modal-leave-to {
  transform: translateY(-100px);
  opacity: 0;
}
</style>
