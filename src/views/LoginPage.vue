<template>
  <section id="login-page" class="justify-content-center">
    <h2 class="text-center">UNIVERSE CODE</h2>
    <form 
      id="login-form" 
      v-on:submit.prevent="userLogin" 
      class="row justify-content-center"
    >
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
      <div class="row justify-content-center">
        <div class="d-grid gap-2 col-md-4 mb-3">
          <button 
            type="submit"
            class="btn btn-success"
          >LOGIN</button>
        </div>
      </div>
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
  created() {
    this.$store.dispatch('fetchAneo')
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
  h2{
    font-family: 'sans';
    font-weight: bold;
    padding-top: 14vh;
    padding-bottom: 8vh;
  }
  #login-form {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 2vh;
  }
  input, input:focus {
    background-color: rgba(0, 0, 0, 0.2);
    color: #ffffff;
  }
  a {
    text-decoration: none;
    color: #ffffff;
  }
  a:hover {
    color: #ffffff;
    font-weight: bold;
  }
  button:hover {
    background-color: #2b1594;
  }
  button {
    background-color: #4414dd;
    border: #4414dd;
    font-weight: bold;
  }
</style>