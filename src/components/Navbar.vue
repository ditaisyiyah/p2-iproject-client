<template>
  <section id="navbar" class="sticky-top">
    <div class="d-flex justify-content-between align-items-center">
      <div class="col d-flex justify-content-left align-items-end">
        <div class="col-auto">
          <h4>UNIVERSE CODE</h4>
        </div>
      </div>
      <div class="col">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> HOME </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/news" class="nav-link"> NEWS </router-link>
          </li>
          <li class="nav-item">
            <a 
              v-on:click="userLogout"
              class="nav-link" 
            >LOG OUT</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'Navbar',
    computed: {
      ...mapState(['loginStatus']),
    },
    methods: {
      userLogout(){
        this.$store.dispatch('doLogout');
      },
    }
  }
</script>

<style scoped>
  #navbar {
    position: fixed;
    width: 100vw;
    /* min-height: 15vh; */
    height: auto;
    padding: 1.5vh 5vw 1.5vh 5vw;
    background-color: rgba(255, 255, 255, 0.1);

    /* background: rgba(0 ,0, 0, 0.3); */
  }
  a {
    text-decoration: none;
    color: #4414dd;
    font-family: sans-serif;
    font-weight: bolder;
    font-size: 13pt;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    color: #ffffff;
  }
  li:hover{
    background-color: #5b606c;
  }
  #profile-picture {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  h4 {
    font-family: 'sans';
    font-weight: bold;
    color: #ffffff;
    padding-left: 1vw;
  }
</style>