<template>
  <div v-if="result">
      <router-link :to="{name: 'user', params: { user: $route.params.user + 1}}">test</router-link>
    <button @click="goBack">back</button>
    <h2>name: {{ result.name }}</h2>
    <h3>username: {{ result.username }}</h3>
    <p>email: {{ result.email }}</p>
    <ul>
      Address:
      <template v-for="(item, key, idx) in result.address">
        <li :key="idx" v-if="key !== 'geo'">{{ key }}: {{ item }}</li>
        <ul :key="idx" v-else>
          Geo:
          <li v-for="(geoItem, key, idx2) in item" :key="idx2">
            {{ key }}: {{ geoItem }}
          </li>
        </ul>
      </template>
    </ul>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to, from, next) {
    console.log("роут обновился");
    console.log(to);
    next();
  },
  data() {
    return {
      result: null,
      posts: null,
    };
  },
  methods: {
    async fetchUser() {
      const fetchUser = await this.axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.user}`
      );
      this.result = fetchUser.data;
    },
    async fetchPost() {
      const fetchPost = await this.axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.user}`
      );
      this.posts = fetchPost.data;
    },
    goBack() {
      this.$router.push({ name: "users" });
    },
  },
  async created() {
    await this.fetchUser();
    if (this.$route.name == "userLocation") {
      await this.fetchPost();
    }
  },
};
</script>

<style lang="scss" scoped></style>
