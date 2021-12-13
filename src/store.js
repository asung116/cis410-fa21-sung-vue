import {createStore} from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
    tasks: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
  },

  actions: {
    getRoommates() {
      axios.get("/myroommates").then((aResponse) => {
        console.log("response in /roommates/:pk", aResponse);
        //commit("storeChores", aResponse.data);
      });
    },
  },
});
//console.log("is this even working?");
