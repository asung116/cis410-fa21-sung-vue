import {createStore} from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

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
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    },
  },

  actions: {
    logout({commit, state}) {
      axios
        .post("/roommate/logout", null, {
          headers: {Authorization: `Bearer ${state.token}`},
        })
        .then(() => {
          commit("clearAuthData");
          localStorage.clear("token");
          localStorage.clear("expiration");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in loggins out");
        });
    },
  },
});
