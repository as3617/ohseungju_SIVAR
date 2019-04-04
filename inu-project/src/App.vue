<template>
  <div>
    <router-link to="/" exact>Home   </router-link>
    <router-link v-if="loggedIn" to="/logout">Logout   </router-link>
    <router-link v-else to="/login" exact>Login   </router-link>
    <router-link to="/posts">Posts  </router-link>
    <router-link to="/posts/new" exact>New Post  </router-link>
    <router-view></router-view>
    <img alt ="INU-rogo" src="./assets/INU.png" height="300px" width= "500px">
  </div>
</template>

<script>
import {Auth} from './api'
export default {
  name: 'app',
  data() {
    return {
      loggedIn: Auth.loggedIn()
    }
  },
  created() {
    Auth.onChange = loggedIn => {
      window.console.log('onchange', loggedIn)
      this.loggedIn = loggedIn
    }

  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0f86fd;
  margin-top: 60px;
}
</style>
