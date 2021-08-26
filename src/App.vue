<template>
  <div id="app">
    <Navbar v-if="this.$store.state.loginStatus" ></Navbar>
    <router-view/>
    <HFooter></HFooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  name: 'App',
  components: {
    Navbar,  
    HFooter
  },
  created(){
    const accessToken = localStorage.access_token ;
    if(accessToken){
      this.$store.commit('SET_LOGIN_STATUS', { status: true })
    }else{
      this.$store.commit('SET_LOGIN_STATUS', { status: false })
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, 'Source Sans Pro', 'Merriweather', serif, sans-serif;
  width: 1005;
  height: 100vh;
  background: #212121;
  color: #ffffff;
}
.footer-h8{
  width: 100vw;
  height: 12vh;
}
.logo-hacktiv8{
  height: 6vw;
}
.social-link-image{
  margin-left: 1vw;
  width: 3vw;
  height: 6vh;
}

</style>
