import {createStore} from "vuex";
import axios from "axios";

export default createStore({
  state: {
    token: null,
    user: null,
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    // storeHouseInApp(state, theHousehold) {
    //   state.household = theHousehold;
    // },
    storeChoresInApp(state, theChores) {
      state.chores = theChores;
    },
    // storeRoommatesInApp(state, theRoommates) {
    //   state.roommates = theRoommates;
    // },
    // storeNeedsInApp(state, theNeeds) {
    //   state.needs = theNeeds;
    // },
  },
  // why doesn't this work at all???

  actions: {
    // getHousehold({commit}) {
    //   axios.get("/household/HouseholdPK/4").then((aResponse) => {
    //     console.log("response in /household/me", aResponse);
    //     commit("storeHousehold", aResponse.data);
    //   });
    // },
    // getHousehold({commit}) {
    //   axios
    //     .get("/household/${this.$store.state.user.HouseholdFK}")
    //     .then((aResponse) => {
    //       console.log("response in /household/me", aResponse);
    //       commit("storeHousehold", aResponse.data);
    //     });
    // },
    getChores({commit}) {
      axios
        .get("`/chores/${this.$store.state.user.HouseholdFK}`")
        .then((aResponse) => {
          console.log("response in /chores/me", aResponse);
          commit("storeChores", aResponse.data);
        });
    },
    // getRoommates({commit}) {
    //   axios
    //     .get("/roommate/householdFK/`${this.$store.state.user.HouseholdFK}`")
    //     .then((aResponse) => {
    //       console.log("response in /roommate/me", aResponse);
    //       commit("storeRoommate", aResponse.data);
    //     });
    // },
    // getNeeds({commit}) {
    //   axios.get("/needs/householdFK/`${this.$store.state.user.HouseholdFK}`").then((aResponse) => {
    //     console.log("response in /needs/me", aResponse);
    //     commit("storeNeeds", aResponse.data);
    //   });
    // },
  },
});
//console.log("is this even working?");
