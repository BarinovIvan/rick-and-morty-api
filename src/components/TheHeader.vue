<template>
  <nav>
    <router-link to="/">Rick&Morty</router-link>
    <router-link to="/cards">Cards</router-link>
  </nav>
</template>

<script>
  export default {
    name: "TheHeader"
  }
</script>

<style lang="scss" scoped>
  nav {
    background: teal;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
