<template>
  <div class="modal" @click.self="updateModalValue(null)">
    <div class="modal_content">
      <form>
        <input type="text" placeholder="first name" v-model="name" />
        <span  class="error" v-if="!$v.name.required && showError">{{$t("validations.required", {field: 'name'})}}</span>
        <span  class="error" v-if="!$v.name.maxLenght && showError">{{$t("validations.maxLength", {max: $v.name.$params.maxLenght.max})}}</span>
        <span  class="error" v-if="!$v.name.minLenght && showError">{{$t("validations.minLength", {min: $v.name.$params.minLenght.min})}}</span>

        <input type="text" placeholder="last name" v-model="lastName" />
        <span  class="error" v-if="!$v.lastName.required && showError">{{$t("validations.required", {field: 'last name'})}}</span>

        <input type="text" placeholder="email" v-model="email" />
         <span  class="error"  v-if="!$v.email.email && showError">email is not valid</span>
        <span  class="error" v-if="!$v.email.required && showError">{{$t("validations.required", {field: 'email'})}}</span>

        <input type="text" placeholder="phone" v-model="phone" v-mask="'+7 (###) ###-##-##'"/>
        <span  class="error" v-if="!$v.phone.required && showError">{{$t("validations.required", {field: 'phone'})}}</span>

        <input type="password" placeholder="password" v-model="password" />
        <span  class="error" v-if="!$v.password.required && showError">{{$t("validations.required", {field: 'password'})}}</span>

        <input
          type="password"
          placeholder="repeat password"
          v-model="passwordR"
          
        />
        <span  class="error" v-if="!$v.passwordR.required && showError">{{$t("validations.required", {field: 'password'})}}</span>
        <span  class="error" v-if="!$v.passwordR.sameAsPassword && showError">password does not match</span>
        
        <button @click.prevent="register">register</button>
      </form>
      <span @click="updateModalValue('login')"> login</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { required, email, sameAs } from "vuelidate/lib/validators";
import minLength from 'vuelidate/lib/validators/minLength';
import maxLength from 'vuelidate/lib/validators/maxLength';
export default {
  data() {
    return {
      name: null,
      lastName: null,
      email: null,
      password: null,
      passwordR: null,
      phone: null,
      showError: false,
    };
  },
  validations() {
    return {
      name: {
        required,
        minLenght: minLength(2),
        maxLenght: maxLength(10)
      },
      lastName:{
        required,
      },
      email: {
        required,
        email,
      }, phone:{
        required,
      },
      password: {
        required,
      },
      passwordR:{
        sameAsPassword: sameAs('password'),
        required,
      }
    };
  },
  methods: {
    ...mapActions(["updateModalValue"]),
    register() {
      this.showError = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.error{
  color: red
}
</style>
