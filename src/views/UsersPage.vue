<template>
  <div class="container" v-if="loaded">
    <app-user-search/>
    <div class="userList">
      <router-link
        :to="{ name: 'user', params: { user: element.id } }"
        v-for="element in getUsersRes"
        :key="element.id"
        class="user"
      >
        <h2>name: {{ element.name }}</h2>
        <h3>username: {{ element.username }}</h3>
        <p>email: {{ element.email }}</p>
        <ul>
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
import appUserSearch from "@/components/navigations/app-user-search.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: { appUserSearch },
  data() {
    return {
      name: null,
      loaded: false,
    };
  },
  computed: {
    ...mapGetters(["getUsersRes"]),
  },
  methods: {
    ...mapActions(["setUsers"]),
    async fetchUsers() {
      if (!this.getUsersRes) {
        await this.setUsers();
      }
      this.loaded = true;
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
