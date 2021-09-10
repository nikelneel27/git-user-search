<template>
  <div class="header">
    <div class="headerAndPara">
      <div class="headerLogo">
        <i class="fab fa-github fa-2x" @click="navHome"></i>
        <h1>GitHub User Search</h1>
      </div>
      <div class="subtitle">
        <p>
          Browse users and their profiles via <a href="/">the GitHub API</a>
        </p>
      </div>
    </div>
    <div class="search">
      <Search />
    </div>
  </div>
</template>

<script>
import Search from "./Search.vue";

export default {
  name: "Header",
  components: {
    Search,
  },
  methods: {
    navHome() {
      this.$route.push("/home");
    },
  },
};
</script>

<style scoped>
h1 {
  background: -webkit-linear-gradient(rgb(245, 37, 158), rgb(248, 2, 2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h1::focus {
  background: -webkit-linear-gradient(rgb(238, 241, 12), rgb(248, 2, 2));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header {
  display: flex;
  justify-content: space-between;
  color: white;
}
.headerAndPara {
  display: block;
  margin-left: 40px;
}
.subtitle {
  margin-left: 10px;
}
</style>
