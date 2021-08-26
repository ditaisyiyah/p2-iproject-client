<template>
  <section id="login-page">
    <form 
      v-on:keydown.enter.prevent="userLogin" 
      id="login-form" 
      class="row justify-content-center"
    >
      <h2 class="text-center">UNIVERSE CODE</h2><br>
      <h3 class="text-center">LOGIN</h3><br>
      <div class="row justify-content-center">
        <div class="col-md-4">
          <label class="form-label">Email</label><br>
          <input 
            v-model="email" 
            id="login-email" 
            class="form-control" 
            type="email"
            autocomplete="off"
            required
          ><br>
        </div>
      </div>
      <div class="row justify-content-center">
      <div class="col-md-4">
        <label class="form-label">Password</label><br>
        <input 
          v-model="password" 
          id="login-password" 
          class="form-control" 
          type="password"
          required
        ><br>
        </div>
      </div>
      <!-- <div class="row justify-content-center">
        <div class="d-grid gap-2 col-md-4 mb-3">
          <button 
            type="submit" 
            class="btn btn-success"
          >LOGIN</button>
        </div>
      </div> -->
      <div class="d-grid gap-2 col-md-4 text-center">
        <router-link to="/register" class="nav-link"> Click here to register </router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods : {
    userLogin(){
      const payload = {
        email: this.email,
        password: this.password,
      }
      // console.log(payload);
      this.$store.dispatch('doLogin', payload);
    }
  }
}
</script>

<style scoped>
  #login-page {
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/background2.jpeg') ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  #login-form {
    padding: 25vh;
  }
  input, input:focus {
    background-color: rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    color: #ffffff;
  }
</style>