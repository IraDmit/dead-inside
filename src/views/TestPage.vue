<template>
  <div class="testPage">
    <h1>{{ $t('hello') }}</h1>
    <p v-cloak>
      {{ show }}
    </p>
    <div v-for="(item, idx) in res.content.list" :key="idx">
      <app-link :to="item.link">{{ item.title }}</app-link>
    </div>
    <button @click="testAlert">alert</button>

    <test-list
      :style="`--itemWidth:${response.itemWidth}`"
      :direction="response.type"
      :list="response.list"
    ></test-list>
    <button @click="show = !show">on/off</button>
    <transition-group name="fade">
      <p class="test" v-for="i in 2" :key="i" v-show="show">transition fade</p>
    </transition-group>
  </div>
</template>

<script>
// import { utils } from '@/mixins/utils'
import AppLink from "@/components/common/app-link.vue";
import TestList from "@/components/test/testList.vue";
export default {
  components: { AppLink, TestList },
  layout: 'error-layout',
  // mixins: [utils],
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 13000)
  },
  data() {
    return {
      show: false,
      response: {
        itemWidth: "33%",
        type: "row",
        list: [
          {
            content: {
              order: 0,
              title: "title1",
              description: "descr1",
              price: "10",
            },
          },
          {
            content: {
              order: 2,
              dopInfo: "dop",
              title: "title2",
              description: "descr2",
              price: "102",
            },
          },
          {
            content: {
              order: 8,
              title: "title3",
              description: "descr3",
              price: "103",
              option: [
                { price: "40", oldPrice: "120" },
                { price: "20", oldPrice: "120" },
              ],
            },
          },
          {
            content: {
              order: 19,
              title: "title4",
              description: "descr4",
              price: "104",
            },
          },
          {
            content: {
              order: 12,
              title: "title5",
              description: "descr5",
              price: "105",
              option: [{ price: "50", oldPrice: "120" }],
            },
          },
          {
            content: {
              order: 1,
              title: "title6",
              description: "descr6",
              price: "1011",
            },
          },
        ],
      },
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
    };
  },
};
</script>

<style lang="scss" scoped>
// .(название нашей анимации )-enter = начальная точка анимации
// .(название нашей анимации )-leave-to = конечная
// .(название нашей анимации )-enter-active = обозначает пока анимация идет
// .(название нашей анимации )-leave-active = обозначает пока анимация уходит
.test{
  transform: translateY(0px) translateX(0px);
  background: #000;
  color: #fff;
  width: 200px;
  height: 200px; 
}
.fade-enter-active,
.fade-leave-active{
  animation-duration: 1s;
  animation-fill-mode: both;
  transition: 1s;
}
.fade-enter-to{
  animation-name: name;
}
.fade-leave-to{
    transform: translateY(-100px);
    opacity: 0
}

@keyframes name {
  0% {
    opacity: 0;
    transform: translateY(100px) translateX(100px);
    color: green
  }
  50%{
    opacity: 1;
    color: purple;
    transform: translateX(100px);
  }
  100% {
    color: orange
  }
}
</style>