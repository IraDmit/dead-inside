<template>
  <div>
    <form>
      <input type="text" placeholder="name" v-model="name" />
      <span class="error" v-if="showError && !nameValid"
        >name is not valid</span
      >
      <input type="text" placeholder="lastName" v-model="lastName" />
      <span class="error" v-if="showError && !lastNameValid">
        last name is not valid</span
      >
      <input type="text" placeholder="email" v-model="email" />
      <span class="error" v-if="showError && !emailValid"
        >email is not valid</span
      >
      <input type="text" placeholder="phone" v-model="phone" />
      <span class="error" v-if="showError && !phoneValid"
        >phone is not valid</span
      >
      <input type="password" placeholder="password" v-model="password" />
      <span class="error" v-if="showError && !passwordValid"
        >password is not valid</span
      >
      <input
        type="password"
        placeholder="Repeat password"
        v-model="repeatPaswword"
      />
      <span class="error" v-if="showError && !passwordValid"
        >password is not valid</span
      >
      <button @click.prevent="sendForm()">send form</button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {},

  data() {
    return {
      name: null,
      lastName: null,
      email: null,
      phone: null,
      password: null,
      repeatPaswword: null,
      showError: false,
      result: null,
    };
  },
  computed: {
    nameValid() {
      // return this.name === '' ? true : false то же самое что и запись ниже
      return !!this.name;
    },
    lastNameValid() {
      return !!this.lastName;
    },
    emailValid() {
      return !!this.email;
    },
    phoneValid() {
      return !!this.phone;
    },
    passwordValid() {
      return (
        !!this.password &&
        this.password === this.repeatPaswword &&
        !!this.repeatPaswword
      );
    },
    isValid() {
      return (
        this.nameValid &&
        this.lastNameValid &&
        this.emailValid &&
        this.phoneValid &&
        this.passwordValid
      );
    },
  },
  methods: {
    async sendForm() {
      this.showError = true;

      //   if (this.isValid) {
      const form = {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        password: this.password,
      };
      // axios с отправкой
      // await fetch("https://jsonplaceholder.typicode.com/photos?albumId=2")
      //   .then((res) => {
      //     return res.json();
      //   })
      //   .then((res) => {
      //     this.result = res;
      //   });
      //   console.log(this.result)

      this.$emit("getResult", form);
      //   }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin: 0 auto;
}
input {
  background: #f4f4f4;
  border: 1px solid #444;
  padding: 10px 20px;
  margin-bottom: 15px;
}
button {
  background: #444;
  border: 1px solid #fff;
  color: #fff;
  padding: 10px 20px;
}
.error {
  color: red;
}
</style>
