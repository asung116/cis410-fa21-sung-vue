import {createStore} from "vuex";
//import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
    chores: [],
    roommates: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeChores(state, chores) {
      state.chores = chores;
    },
    storeRoommates(state, roommates) {
      state.roommates = roommates;
    },
  },

  actions: {
    // getChores({commit}) {
    //   axios
    //     .get("/chores/household", {
    //       headers: {
    //         Authorization: `Bearer ${this.$store.state.token}`,
    //       },
    //     })
    //     .then((aResponse) => {
    //       console.log("response in /chores/household from store.js", aResponse);
    //       commit("storeChores", aResponse.data);
    //     });
    // },
    // getRoommates() {
    //   axios.get("/myroommates").then((aResponse) => {
    //     console.log("response in /roommates/:pk", aResponse);
    //     commit("storeChores", aResponse.data);
    //   });
    // },
  },
});
//console.log("is this even working?");
