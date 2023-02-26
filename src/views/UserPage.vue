<template>
  <div v-if="result">
    <button @click="goBack">back</button>
    <h2>name: {{ result.name }}</h2>
    <h3>username: {{ result.username }}</h3>
    <p>email: {{ result.email }}</p>
    <ul>
      Address:
      <!-- // <li>city: {{result.address.city}}</li>
                // <li>street: {{result.address.street}}</li>
                // <li>zipcode: {{result.address.zipcode}}</li>
                // <li>suite: {{result.address.suite}}</li> 
                // <li>suite: {{result.address.get.lng}}</li> -->
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
        <li v-for="(post) in posts" :key="post.id">
            <h3>{{post.title}}</h3>
            <p>{{post.body}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      posts: null,
    };
  },
  methods: {
    async fetchUser() {
      // console.log(this.$router)
      // console.log(this.$route)
      const fetchUser = await this.axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.$route.params.user}`
      );
      console.log(fetchUser);
      this.result = fetchUser.data;
    },
    async fetchPost() {
      // console.log(this.$router)
      // console.log(this.$route)
      const fetchPost = await this.axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.user}`
      );
      this.posts = fetchPost.data;
    },
	goBack(){
		this.$router.push({name: 'users'})
	}
  },
  async created() {
    await this.fetchUser();
    if(this.$route.name == 'userLocation'){
        await this.fetchPost();
    }
  },
};
</script>

<style lang="scss" scoped></style>
