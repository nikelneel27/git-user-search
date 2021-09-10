<template>
    <div>   
         <h1 >SearchResult</h1>
        <div class="grid-container">
                <li v-for="(profile, index) in userProfiles" :key="index" @click='handleUserClick(profile)'>
                    <div class="grid-item">
                        <div class="userImageContainer" > 
                            <img  class="userImage" 
                                :src="profile.avatar_url"
                            style="width: 80px; height: 80px;" />  
                        </div>
                        <p> {{profile.login}} </p> 
                    </div>        
                </li>         
        </div>  
    </div> 
    
</template>

<script>
import { mapGetters } from "vuex";
// import UserPage from "./UserPage.vue";
export default {
  name: "SearchResult",
  // props: ["userProfiles"],
  data() {
    return {
      //   image: image
    };
  },
  created() {
    this.$store.dispatch("UsersModule/fetchUsers", this.$route.query.q);
  },
  computed: {
    ...mapGetters({ userProfiles: "UsersModule/getUserProfiles" })
  },
  methods: {
    handleUserClick(profile) {
      this.$store.dispatch("UsersModule/fetchUserData", profile.login);
      this.$router.push({
        name: "UserPage",
        params: { username: profile.login }
      });
    }
  }
};
</script>

<style>
li {
  list-style: none;
}

.searchResults {
  color: white;
}
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 30px;
}
.grid-item {
  margin-bottom: 30px;
}
.userImage {
  border-radius: 150px;
}
h4 {
  color: white;
  margin: 30px;
}
</style>
