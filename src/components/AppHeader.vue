<template>
  <nav class="navbar bg-dark navbar-dark text-white font-weight-bold justify-content-between">
    <router-link to="/" class="navbar-brand">
      <img src="../assets/logo.png" alt="" width="30" height="30" class="align-top mr-2" />Vue.js
    </router-link>
    <div>
      <router-link v-if="$store.state.userId === ''" to="/menu07/auth/jwtauth" class="btn btn-success btn-sm">로그인</router-link>
      <button v-if="$store.state.userId !== ''" class="btn btn-success btn-sm" @click="handleLogout">로그아웃</button>
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
