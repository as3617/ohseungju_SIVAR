<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="email" placeholder="email"><br />
<<<<<<< HEAD
      <input type="password" v-model="password" placeholder="password">(password: 123456789)<br />
=======
      <input type="password" v-model="password" placeholder="password">(hint: password123)<br />
>>>>>>> 3c768568b9bd2171e930d62180eeaaf0cce3952f
      <button type="submit">Login</button>
      <p v-if="err">Bad login information</p>
    </form>
  </div>
  
</template>

<script>
import {Auth} from '../api'
export default {
  data() {
    return {
      email: 'abc@직접입력.com',
      password: '',
      err: false
    }
  },
  methods: {
    login() {
      Auth.login(this.email, this.password)
      .then(() => this.$router.replace(this.$route.query.redirect || '/'))
      .catch(() => this.err = true)
    }
  }
}
</script>