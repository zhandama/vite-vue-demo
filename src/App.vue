<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id='nav'>
      <router-link to='/'> Home</router-link>
      <router-link to='/contact'>Contact </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>
