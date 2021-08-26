<template>
  <section id="register-page">
    <form 
      v-on:keydown.enter.prevent="userRegister" 
      id="register-form" 
      class="row justify-content-center"
    >
      <h2 class="text-center">UNIVERSE CODE</h2><br>
      <h3 class="text-center">REGISTER</h3><br>
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
  #register-form {
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