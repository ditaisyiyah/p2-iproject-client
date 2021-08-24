import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,

  },
  mutations: {
    SET_LOGIN_STATUS(state, payload){
      state.loginStatus = payload.status;
      console.log('----been in state----',state.loginStatus);
    },
    SET_PROFILE(state, payload){
      state.profile = payload.profile
      console.log('----been in state----',state.profile);
    },
  },
  actions: {
    doLogin(context, payload){
      host
        .post('/login', {
          email: payload.email,
          password: payload.password,
        })
        .then(resp => {
          console.log('=======logged in=======', resp.data);
          localStorage.setItem('access_token', resp.data.access_token);
          context.commit('SET_LOGIN_STATUS', { status: true });
          this.dispatch('fetchProfile');
          this.dispatch('fetchBookmark');

          router.push('/');
          Vue.$toast.success('You are logged in');
        })
        .catch(err => {
          console.log('=======error login=======', err);
          const message = err.response.data.message;
          Vue.$toast.error(message);
        });
    },
    doRegister(context, payload){
      host
        .post('/register', {
          email: payload.email,
          password: payload.password,
        })
        .then(resp => {
          console.log('=======registered=======', resp.data);
          localStorage.setItem('access_token', resp.data.access_token);
          context.commit('SET_LOGIN_STATUS', { status: true });
          this.dispatch('fetchProfile');
          this.dispatch('fetchBookmark');


          router.push('/');
          Vue.$toast.success('You are logged in');
        })
        .catch(err => {
          console.log('=======error register=======', err);
          const message = err.response.data.message;
          Vue.$toast.error(message);
        });
    },
  }
})
