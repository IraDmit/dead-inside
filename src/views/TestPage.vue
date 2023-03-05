<template>
  <div>
    <div v-for="(item, idx) in res.content.list" :key="idx">
      <app-link :to="item.link">{{ item.title }}</app-link>
    </div>
    <button @click="testAlert">alert</button>

    <test-list
      :style="`--itemWidth:${response.itemWidth}`"
      :direction="response.type"
      :list="response.list"
    ></test-list>
  </div>
</template>

<script>
// import { utils } from '@/mixins/utils'
import AppLink from "@/components/common/app-link.vue";
import TestList from "@/components/test/testList.vue";
export default {
  components: { AppLink, TestList },
  // mixins: [utils],
  mounted() {
    console.log(this);
  },
  data() {
    return {
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
</style>