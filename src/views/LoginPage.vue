<template>
  <section id="login-page" class="">
    <div class="row mb-3 justify-content-center">
      <h2 class="text-center">LOGIN</h2><br>
    </div>
    <form 
      v-on:submit.prevent="userLogin" 
      id="login-form" 
      class="row justify-content-center"
    >
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label class="form-label">Email</label><br>
          <input 
            v-model="email" 
            id="login-email" 
            class="form-control" 
            type="email"
            required
          ><br>
        </div>
      </div>
      <div class="row justify-content-center">
      <div class="col-md-6">
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
        <div class="d-grid gap-2 col-md-6 mb-3">
          <button 
            type="submit" 
            class="btn btn-success"
          >LOGIN</button>
        </div>
      </div>
      <div class="d-grid gap-2 col-md-6 text-center">
        <router-link to="/register" class="nav-link"> Don't have an account yet? Register here </router-link>
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
    min-height: 90vh;
    padding: 5vh 5vw;
  }
</style>