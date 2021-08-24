<template>
  <section id="navbar" class="sticky-top">
    <div class="d-flex justify-content-between align-items-center">
      <div class="col d-flex justify-content-left align-items-end">
        <div v-if="loginStatus" class="col-auto">
          <img 
            id="profile-picture"
            v-bind:src="profile.picture"
          >
        </div>
        <div v-if="loginStatus" class="col-auto">
          <h5>Hi, {{ profile.username }} !</h5>
        </div>
      </div>
      <div class="col justify-content-start text-center">
        <h2>ASUMSI</h2>
      </div>
      <div class="col">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <router-link to="/" class="nav-link"> Home </router-link>
          </li>
          <li v-if="loginStatus" class="nav-item">
            <router-link to="/bookmark" class="nav-link"> 
              My Bookmark <span class="badge bg-primary">{{ bookmarkLength }}</span> 
            </router-link>
          </li>
          <li v-if="!loginStatus" class="nav-item">
            <router-link to="/login" class="nav-link"> Log In </router-link>
          </li>
          <li v-if="loginStatus" class="nav-item">
            <a 
              v-on:click="userLogout"
              class="nav-link" 
            >Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'Header',
    created() {
      if(this.$store.state.loginStatus){
        this.$store.dispatch('fetchProfile');
        this.$store.dispatch('fetchBookmark');
      }
    },
    computed: {
      ...mapState(['profile', 'loginStatus']),
      ...mapGetters(['bookmarkLength'])
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
    z-index: 100;
    width: 100vw;
    height: auto;
    padding: 1.5vh 5vw 1.5vh 5vw;
    margin-bottom: 5vh;
    background: #2c2c54;
    color: #ffffff;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    color: #706fd3;
  }
  #profile-picture {
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
  h5 {
    padding-left: 1vw;
  }
</style>