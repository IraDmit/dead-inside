<template>
  <div>
    <header></header>
    <aside>
      <template v-if="comments.length">
        <div v-for="(comment, idx) in comments" :key="idx">
          {{ comment.name }} : {{ comment.body }}
          <br>
        </div>
      </template>
      <button @click="renderComments()">comments</button>
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      response: null,
      comments: [],
    };
  },
  methods: {
    renderComments() {
      for (let i = 0; i < 5; i++) {
        let rnd = Math.floor(Math.random() * 501);
        let com = this.response.data.find((elem) => elem.id === rnd);
        this.comments.push(com);
      }
      console.log(this.comments);
    },
  },
  async created() {
    this.response = await this.axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
  },
};
</script>

<style lang="scss" scoped>
aside {
    width: 540px;
    div{
        margin-bottom: 20px;
    }
}
</style>
