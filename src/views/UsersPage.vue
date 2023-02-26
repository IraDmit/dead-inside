<template>
  <div v-if="result">
    <!-- :to="`/users/${element.id}`" -->
    <!-- :to="{name: 'user', params: {user: element.id}}" -->
    <router-link :to="{name: 'user', params: {user: element.id}}" v-for="element in result" :key="element.id">
      <!-- <h2>name: {{ element.name }}</h2> -->
      <h3>username: {{ element.username }}</h3>
      <p>email: {{ element.email }}</p>
      <ul>
        Address:
        <!-- // <li>city: {{element.address.city}}</li>
                // <li>street: {{element.address.street}}</li>
                // <li>zipcode: {{element.address.zipcode}}</li>
                // <li>suite: {{element.address.suite}}</li> 
                // <li>suite: {{element.address.get.lng}}</li> -->
        <template v-for="(item, key, idx) in element.address">
          <li :key="idx" v-if="key !== 'geo'">{{ key }}: {{ item }}</li>
          <ul :key="idx" v-else>
            <li v-for="(geoItem, key ,idx2) in item" :key="idx2">{{ key }}: {{ geoItem }}</li>
          </ul>    
        </template>
      </ul>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
    };
  },
  methods: {
    async fetchUsers() {
      const fetchUsers = await this.axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.result = fetchUsers.data;
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped></style>
