<template>
  <div class="modal" @click.self="updateModalValue(null)">
    <div class="modal_content">
      <form>
        <input type="text" placeholder="login/email" v-model="login" />
        <span v-if="!loginValid && showError">login is not valid</span>
        <input type="password" placeholder="password" v-model="password" />
        <span v-if="!passwordValid && showError">password is not valid</span>
        <button @click.prevent="logIn">log in</button>
      </form>
      <!-- тут стилизация под ссылку будет , а не сам переход -->
       <span @click="updateModalValue('register')">registration</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      login: null,
      password: null,
      showError: false,
    };
  },
  computed: {
    loginValid() {
      return !!this.login; 
    },
    passwordValid(){
      return !!this.password;
    }
  }, methods:{
    ...mapActions(['updateModalValue']),
    logIn(){
      this.showError = true
      //когда то буит аксиос
      
    }
  }
};
</script>

<style lang="scss" scoped></style>
