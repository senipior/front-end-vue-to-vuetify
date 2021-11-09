<template>
  <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2" />Vue.js
    </router-link>
    <div>
      <v-btn color="info" class="mr-2" small><router-link v-if="$store.state.userId === ''" to="/menu07/auth/jwtauth">로그인</router-link></v-btn>
      <v-btn color="info" class="mr-2" small v-if="$store.state.userId !== ''" @click="handleLogout">로그아웃</v-btn>
    </div>
  </nav>
</template>

<script>
export default {
    // component's name found in vue devtools on chrome.
    name: "AppHeader",
    // components that i want to add
    components: {
    },
    // component data definition
    data: function() {
        return {
        };
    },
    // component method definition
    methods: {
      handleLogout() {
        this.$store.dispatch("deleteAuth");
      }
    }
}
</script>

<!-- component style definition-->
<style scoped>

</style>
