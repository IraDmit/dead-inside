<template>
  <div v-if="result" class="container">
    <input
      type="text"
      placeholder="name"
      @input="filterName($event.target.value)"
    />
    <div class="userList">
      <!-- :to="`/users/${element.id}`" -->
      <!-- :to="{name: 'user', params: {user: element.id}}" -->
      <router-link
        :to="{ name: 'user', params: { user: element.id } }"
        v-for="element in result"
        :key="element.id"
        class="user"
      >
        <h2>name: {{ element.name }}</h2>
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
              <li v-for="(geoItem, key, idx2) in item" :key="idx2">
                {{ key }}: {{ geoItem }}
              </li>
            </ul>
          </template>
        </ul>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: null,
      name: null,
      startArray: null
    };
  },
  methods: {
    async fetchUsers() {
      const fetchUsers = await this.axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      this.startArray = fetchUsers.data
      this.result = fetchUsers.data;
    },
    filterName(value) {
      let arr = [];
      if (value) {
        this.result.filter((el) => {
          if (el.name.search(value) == 0) arr.push(el);
        });
        this.result = arr;
      } else {
        this.result = this.startArray;
      }
      console.log(arr);
      console.log(this.startArray);
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
.userList {
  display: flex;
  flex-wrap: wrap;
}

.user {
  width: calc(33% - 40px);
  margin: 10px;
  background-color: #bbb;
  padding: 10px;
  text-decoration: none;
  color: #000;
}
</style>
