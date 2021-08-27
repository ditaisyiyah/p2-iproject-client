<template>
  <section id="container" >
    <div id="search-news">
      <form v-on:keydown.enter.prevent="goSearch" class="row justify-content-between">
        <input v-model="keywords" type="text" placeholder="Search..">
      </form>
    </div>
    <div v-if="newsList.length" id="news">
      <div class="card-deck">
        <div id="card" v-for="news in newsList" v-bind:key="news.id"
          class="col-auto mb-4">
          <div id="background-card" class="card" >
            <img 
              v-if="news.urlToImage"
              v-bind:src="news.urlToImage" 
              id="news-img"
              class="card-img-top" 
              alt="No Image">
              <div class="card-body ">
                <h5 id="title" class="card-title">
                  <a v-bind:href="news.url">
                    {{ news.title }}
                  </a>
                </h5>
                <small v-if="news.author" class="text-muted"> by {{ news.author }} </small>
                <small v-else class="text-muted"> by Anonymous </small>
                <p id="text-box" class="card-text">{{ news.description }}</p> 
              </div>
            <div class="card-footer">
              <small class="text-muted"> {{ news.publishedAt }} </small> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'NewsPage',
    data() {
      return {
        keywords: '',
      }
    },
    computed: {
      ...mapState(['newsList', 'apod']),
    },
    created() {
      // fetch news based on title of apod
      let now = new Date();
      now.setDate(now.getDate() - 1);
      let today = now.toISOString()
      // console.log('-------------today', today);
      this.$store.dispatch('fetchApod', today);
  
    },
    methods: {
      // fetch news based on user input
      goSearch(){
        const keywords = this.keywords?.split(' ')?.join('-') ?? '';
        // console.log('------cari news----',keywords);
        this.$store.dispatch('fetchNews', keywords);
      }
    },
  }
</script>

<style scoped>
  #container {
    width: auto;
    min-height: 100vh;
    background-color: #212121;
    padding: 0vh 5vw 5vh 5vw;
    background-image: url('../assets/blck.jpg') ;
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: center;
  }
  input {
    background-color: rgba(0, 0, 0, 0.2);
  }
  
  input:focus {
    font-family: 'sans';
    color: #ffffff;
  }
  a {
    text-decoration: none;
    color: #ffffff;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    color: #4414dd;
  }
  #search-news{
    /* border: orangered solid 1pt; */
    padding: 15vh 20vw 10vh 20vw;
  }
  #background-card{
    background-color: rgba(255, 255, 255, 0.1);
    /* background-color: #212121; */
  }
  #card{
    margin-left: 4vw;
    margin-right: 4vw;
  }
  #news{
    color: #4414dd;
  }
  #news-img {
    vertical-align: middle;
    object-fit: cover;
    height: 15vw;
  }
</style>