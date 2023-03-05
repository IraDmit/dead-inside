<template>
  <div class="list">
    <test-item
      v-for="(item, idx) in soerteList2"
      :key="idx"
      :product="item.content"
    ></test-item>
  </div>
</template>

<script>
import testItem from "./testItem.vue";
export default {
  components: { testItem },
  data() {
    return {
      sortedList: null,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    soerteList2() {
      let temp = this.list;
      return temp.sort((a, b) => {
        return a.content.order - b.content.order;
      });
    },
  },
  methods: {
    listSort() {
      this.sortedList.sort((a, b) => {
        return a.content.order - b.content.order;
      });
    },
  },
  mounted() {
    this.sortedList = this.list;
    this.listSort();
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 20px;
  .item {
    width: calc(var(--itemWidth) - 20px);
  }
}
[direction="column"] {
  flex-direction: column;
  .item {
    width: 100%;
  }
}
</style>