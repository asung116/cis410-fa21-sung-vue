import {createStore} from "vuex";
// import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
    // chores: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    // storeChores(state, chores) {
    //   state.chores = chores;
    // },
  },

  actions: {
    // getChores({commit}) {
    //   axios.get("/chores/household").then((aResponse) => {
    //     console.log("response in /chores/household", aResponse);
    //     commit("storeChores", aResponse.data);
    //   });
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
