<template>
  <section id="register-page" class="">
    <div class="row mb-3 justify-content-center">
      <h2 class="text-center">REGISTER</h2><br>
    </div>
    <form 
      v-on:submit.prevent="userRegister" 
      id="register-form" 
      class="row justify-content-center"
    >
      <div class="row justify-content-center">
        <div class="col-md-6">
          <label class="form-label">Email</label><br>
          <input 
            v-model="email" 
            id="register-email" 
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
          id="register-password" 
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
          >REGISTER</button>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="d-grid gap-2 col-md-3">
          <router-link to="/login" class="btn btn-dark"> BACK </router-link>
        </div>
        <div class="d-grid gap-2 col-md-3">
          <button 
            type="submit" 
            class="btn btn-danger"
          >REGISTER</button>
        </div>
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
  #regist-page {
    min-height: 90vh;
    padding: 5vh 5vw;
  }
</style>