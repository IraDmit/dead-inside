<template>
  <div class="modal" @click.self="updateModalValue(null)">
    <div class="modal_content">
      <slot name="header" v-if="$slots.header !== null">
        <div class="header" v-if="$attrs.header > 0">
          <nav>
            <router-link to="/">home</router-link>
          </nav>
        </div>
      </slot>
      <form>
        <input type="text" placeholder="login/email" v-model="login" />
        <span v-if="!$v.login.required && showError">{{$t("validations.required", {field: 'login'})}}</span>

        <input type="email" placeholder="login/email" v-model="email" />
        <span v-if="!$v.email.email && showError">email is not valid</span>
        <span v-if="!$v.email.required && showError">{{$t("validations.required", {field: 'email'})}}</span>

        <input type="password" placeholder="password" v-model="password" />
        <span v-if="!$v.password.required && showError">{{$t("validations.required", {field: 'password'})}}</span>
        
        <button @click.prevent="logIn">log in</button>
      </form>

      <slot name="description" v-if="$slots.description">
        <h2>12312321</h2>
      </slot>
      <!-- тут стилизация под ссылку будет , а не сам переход -->
      <span @click="updateModalValue('register')">registration</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      login: null,
      password: null,
      email: null,
      showError: false,
    };
  },
  validations() {
    return {
      login: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    };
  },
  // computed: {
  //   loginValid() {
  //     return !!this.login;
  //   },
  //   passwordValid() {
  //     return !!this.password;
  //   },
  // },
  mounted() {
    // console.log(this);
  },
  methods: {
    ...mapActions(["updateModalValue"]),
    logIn() {
      this.showError = true;
      if ( !this.$v.$invalid ) {
      //когда то буит аксиос
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  color: #000;
}
.header {
  background-color: #000;
}
</style>
