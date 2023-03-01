<template>
  <div class="modal" @click.self="updateModalValue(null)">
    <div class="modal_content">
      <form>
        <input type="text" placeholder="first name" v-model="name" />
        <span v-if="!loginValid && showError">name is not valid</span>
        <input type="text" placeholder="last name" v-model="lastName" />
        <span v-if="!lastNameValid && showError">last name is not valid</span>
        <input type="text" placeholder="email" v-model="email" />
        <span v-if="!emailValid && showError">email is not valid</span>
        <input type="password" placeholder="password" v-model="password" />
        <span v-if="!passwordValid && showError">password is not valid</span>
        <input
          type="password"
          placeholder="repeat password"
          v-model="passwordR"
        />
        <span v-if="!passwordValid && showError">password is not valid</span>
        <button @click.prevent="register">register</button>
      </form>
      <span @click="updateModalValue('login')"> login</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      name: null,
      lastName: null,
      email: null,
      password: null,
      passwordR: null,
      showError: false,
    };
  },
  computed: {
    nameValid() {
      return !!this.name;
    },
    lastNameValid() {
      return !!this.lastName;
    },
    emailVAlid() {
      return !!this.email;
    },
    passwordValid() {
      return (
        !!this.password && !!this.passwordR && this.password === this.passwordR
      );
    },
    isValid() {
      return (
        this.nameValid &&
        this.lastNameValid &&
        this.emailValid &&
        this.passwordValid
      );
    },
  },
  methods:{
    ...mapActions(['updateModalValue']),
    register() {
      this.showError= true
    }
  }
};
</script>

<style lang="scss" scoped></style>
