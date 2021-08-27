<template>
  <section id="register-page">
    <h2 class="text-center">UNIVERSE CODE</h2>
    <form 
      v-on:submit.prevent="userRegister" 
      id="register-form" 
      class="row justify-content-center"
    >
      <div class="row justify-content-center">
        <div class="col-md-4">
          <label class="form-label">Email</label><br>
          <input 
            v-model="email" 
            id="register-email" 
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
          id="register-password" 
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
          >REGISTER</button>
        </div>
      </div>
      <div class="d-grid gap-2 col-md-4 text-center">
        <router-link to="/login" class="nav-link"> Back to login </router-link>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'RegisterPage',
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
    userRegister(){
      const payload = {
        email: this.email,
        password: this.password,
      }
      // console.log(payload);
      this.$store.dispatch('doRegister', payload);
    },
  }
}
</script>

<style scoped>
  #register-page {
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
  #register-form {
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