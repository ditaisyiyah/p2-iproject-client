import Vue from 'vue'
import Vuex from 'vuex'

import router from '../router/index'

import host from '../apis/host'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginStatus: false,
    apodList: [], // array of objects
    apod: {}, // an object
    aneo: {}, // an object
    newsList: [], // array of objects

  },
  mutations: {
    SET_LOGIN_STATUS(state, payload){
      state.loginStatus = payload.status;
      console.log('----been in state----',state.loginStatus);
    },
    SET_APOD(state, payload){
      state.apod = payload.apod
      console.log('----been in state apod----',state.apod);
    },
    SET_APOD_LIST(state, payload){
      state.apodList = payload.apodList
      console.log('----been in state apodlist----',state.apodList);
    },
    SET_ANEO(state, payload){
      state.aneo = payload.aneo
      console.log('----been in state aneo----',state.aneo);
    },
    SET_NEWS_LIST(state, payload){
      state.newsList = payload.newsList
      console.log('----been in state aneo----',state.newsList);
    },
  },
  actions: {
    doLogin(context, payload){
      const asteroid = this.state.aneo;
      console.log('=====login=====asteroid siap, siapa usernya?', asteroid);

      host
      .post('/login', {
        email: payload.email,
        password: payload.password,
        asteroid
      })
      .then(resp => {
        console.log('=======logged in=======', resp.data);
        localStorage.setItem('access_token', resp.data.access_token);
        context.commit('SET_LOGIN_STATUS', { status: true });
        
        router.push('/');
      })
      .catch(err => {
        console.log('=======error login=======', err);
        const message = err.response.data.message;
        Vue.$toast.error(message);
      });
    },
    doRegister(context, payload){
      const asteroid = this.state.aneo;
      console.log('======regis====asteroid siap, siapa usernya?', asteroid);

      host
        .post('/register', {
          email: payload.email,
          password: payload.password,
          asteroid
        })
        .then(resp => {
          console.log('=======registered=======', resp.data);
          localStorage.setItem('access_token', resp.data.access_token);
          context.commit('SET_LOGIN_STATUS', { status: true });

          router.push('/');
        
        })
        .catch(err => {
          console.log('=======error register=======', err);
          const message = err.response.data.message;
          Vue.$toast.error(message);
        });
    },
    doLogout(context){
      localStorage.clear();
      context.commit('SET_LOGIN_STATUS', { status: false });
      router.push('/login');
    },
    fetchApod(context, date){
      let params = {};
      
      if(date){
        console.log('=========fetching apod=======', date);
        params = { date }
      }else if(!date){
        console.log('=========fetching apod List=======');
        const now = new Date()
        now.setDate(now.getDate() - 6)
        const start_date = now.toISOString();
        params = { start_date }
      }
      
      host({
        method: 'GET',
        url: '/apod', 
        headers: { access_token: localStorage.access_token },
        params
      })
      .then(resp => {
        console.log('=========fetched apod=======', resp.data);
        const apod = resp.data;
        if(apod.length) {
          context.commit('SET_APOD_LIST', { apodList: apod })
        }else {
          context.commit('SET_APOD', { apod })
          
          const apodTitle = this.state.apod.title;
          const keywords = apodTitle?.split(' ')?.join('-') ?? '';
          this.dispatch('fetchNews', keywords);
        }
      })
      .catch(err => {
        console.log('=========error apod========', err);
        const message = err.response.data.message;
        Vue.$toast.error(message);
      });
    },
    fetchAneo(context){
      console.log('=========fetching aneo=======');
      host({
        method: 'GET',
        url: '/aneo', 
      })
      .then(resp => {
        console.log('=========fetched aneo=======', resp.data);
        const aneo = resp.data;
        context.commit('SET_ANEO', { aneo })
      })
      .catch(err => {
        console.log('=========error aneo========', err);
        const message = err.response.data.message;
        Vue.$toast.error(message);
      });
    },
    fetchNews(context, keywords){
      console.log('=========fetching news=======', keywords);

      host({
        method: 'GET',
        url: '/news', 
        headers: { access_token: localStorage.access_token },
        params: { keywords }
      })
      .then(resp => {
        console.log('=========fetched news=======', resp.data);
        const newsList = resp.data;
        context.commit('SET_NEWS_LIST', { newsList })

      })
      .catch(err => {
        console.log('=========error news========', err);
        const message = err.response.data.message;
        Vue.$toast.error(message);
      });
    },
  }
})
