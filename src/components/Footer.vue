<template>
<footer>
   <div class="footer">
       <router-link to="/about-us">
       <h3 >About us !</h3>
       </router-link>;
       <h5> <a href="/">View the source on GitHub</a></h5>
   </div>
</footer>
</template>

<script>
// import About from "./About.vue";
export default {
  name: "Footer"
  //   components: {
  //     About
  //   }
  //   methods: {
  //     handleAboutClick() {
  //       <router-link to="/about-us">
  //         About
  //       </router-link>;
  //     }
  //   }
};
</script>

<style>
.footer {
  color: white;
}
</style>
