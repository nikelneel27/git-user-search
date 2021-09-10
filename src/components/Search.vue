<template>
    <div class="searchBox">
       <i class="fas fa-search search-icon"></i>
        <input v-model="userName"  type="search" placeholder= "Search for user eg: Chris Evan" />
        <button class="btn" @click='handleSearch'>search</button>

        <!-- {{username}} -->
        <!-- <button class="btn" @click='HandleSearch'>search</button> -->
        <!-- {{username}} -->
    </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      userName: ""
    };
  },
  computed: {
    // username: {
    //   get() {
    //     return this.$store.state.username;
    //   },
    //   set(value) {
    //     this.$store.commit("getUsername", value);
    //   }
    // getUsername() {
    // this.$emit("handleSearch", this.username);
    // // console.log(this.username);
    // this.$store.dispatch("getUsername");
    // }
    // }
  },
  methods: {
    handleSearch() {
      this.$router.push(`/search-result?q=${this.userName}`);
    }
  }
};
</script>

<style scoped>
.searchBox {
  display: flex;
  margin: 20px;
}
.search-icon {
  margin: 6px;
}
input {
  width: 200px;
  background: rgb(78, 77, 77);
  color: white;
  height: 25px;
  padding-left: 5px;
  border-radius: 4px;
  outline: none;
  border: none;
}
input::placeholder {
  color: white;
}
.btn {
  color: white;
  height: 27px;
  border-radius: 4px;
  background: rgb(228, 53, 53);
}
</style>
