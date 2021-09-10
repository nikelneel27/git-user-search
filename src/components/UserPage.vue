<template>
    <div class="user">
        
        <!-- <h1>{{userName}}</h1> -->
       <div class="userImage">
       <img :src="userData.avatar_url" 
            style = "width:100px;"/>
            </div>
             {{userData.name}}
            <h3 style="color: purple;">{{userData.bio}}</h3>
        <p> </p>
        <p> Following :{{userData.following}}</p>
        <p> location :{{userData.location}}</p>
        <h4> Followers :{{userData.followers}}</h4>
        <div class="userFollowersList">
        <li v-for = "(follower,index) in userFollowers" :key="index" >
            <div class="userFollowersImage">
                <img :src="follower.avatar_url" style = "width:50px;" />
            </div>
            <div class="userFollowersName">
                {{follower.login}}
            </div>

        </li>
        </div>

        

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserPage",
  data() {
    return {
      userName: ""
      //   followers: userData.followers_url
    };
  },
  computed: {
    ...mapGetters({ userData: "UsersModule/getUserData" }),
    ...mapGetters({ userFollowers: "UsersModule/getUserFollowers" })
  },
  created() {
    this.userName = this.$route.params.username;
    this.$store.dispatch("UsersModule/fetchUserData", this.userName);
    this.$store.dispatch("UsersModule/fetchUserFollowers", this.userName);
    // console.log(this.userData);

    //get user - action in store - trigger this over href this.$route.params.username
  }
};
</script>

<style>
.userImage {
  margin-top: 20px;
}
.userFollowersList {
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  padding: 10px;
}
.userFollowersImage {
  margin-right: 10px;
  padding: 10px;
}
img {
  border-radius: 4px;
}
.userFollowersName {
  margin-bottom: 10px;
}
</style>
