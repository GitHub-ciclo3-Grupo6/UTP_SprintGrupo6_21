<template>
  <div>
    <NavBar />
    <h1>Aqui estan mis servicios</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>
<script>
import NavBar from '../components/navbar.vue'
export default {
  components: {
    NavBar,
  },
  created() {
    document.title = this.$route.meta.title
  },
}
</script>
