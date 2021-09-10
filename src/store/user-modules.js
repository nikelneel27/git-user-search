export default {


    state: {
        userName: "",
        userProfiles: [],
        userData: {},
        userFollowers: []
    },
    mutations: {
        SET_USER_PROFILES(state, value) {
            state.userProfiles = value
        },
        SET_USER_NAME(state, value) {
            state.userName = value
        },
        SET_USER_DATA(state, value) {
            state.userData = value
        },
        SET_USER_FOLLOWERS(state, value) {
            state.userFollowers = value
        }

    },
    getters: {
        getUserProfiles(state) {
            return state.userProfiles
        },
        getUserData(state) {
            return state.userData
        },
        getUserFollowers(state) {
            return state.userFollowers
        }
    },

    actions: {
        fetchUsers({ commit }, userName) {
            fetch(`https://api.github.com/search/users?q=${userName}`)
                .then(response => response.json())
                .then(data => { commit('SET_USER_PROFILES', data.items) })
                .catch(error => console.log(error.message));
            // console.log(this.userProfiles);
        },
        fetchUserData({ commit }, userName) {
            fetch(`https://api.github.com/users/${userName}`)
                .then(response => response.json())
                .then(data => { commit('SET_USER_DATA', data) })
                .catch(error => console.log(error.message))
        },
        fetchUserFollowers({ commit }, userName) {
            console.log("userData in store");
            fetch(`https://api.github.com/users/${userName}/followers`)
                .then(response => response.json())
                .then(data => { commit('SET_USER_FOLLOWERS', data) })
                .catch(error => console.log(error.message))
        }

    },

    namespaced: true

}