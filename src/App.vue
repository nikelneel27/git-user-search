<template>
  <div id="app">
  
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import UserPage from "./components/UserPage.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      userProfiles: []
    };
  },
  methods: {
    // handleSearch(username) {
    //   fetch(`https://api.github.com/search/users?q=${username}`)
    //     .then(response => response.json())
    //     .then(data => (this.userProfiles = data.items))
    //     .catch(error => console.log(error.message));
    //   console.log(this.userProfiles);
    // }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #080808;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 20px;
  color: white;
}
a {
  text-decoration: none;
  color: green;
}

a::hover {
  color: rgb(223, 59, 59);
}
</style>
