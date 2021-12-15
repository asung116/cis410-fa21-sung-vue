<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Household</h3>

    <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p>
    <!-- {{householdPK}} where "Household Code" is -->
    <h5>Household Code: {{ houseCode }}</h5>

    <br />
    <h4>Roommates</h4>
    <table v-if="roommates" class="table">
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Roommate Code</th>
      </thead>
      <tbody>
        <tr v-for="thisRoommate in roommates" :key="thisRoommate.RoommatePK">
          <th>{{ thisRoommate.FirstName }}</th>
          <th>{{ thisRoommate.LastName }}</th>
          <th>{{ thisRoommate.Email }}</th>
          <th>{{ thisRoommate.RoommatePK }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: null,
      roommates: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      console.log("here is the store so far from Account", this.$store.state);
      return this.$store.state.user.FirstName;
    },
    houseCode() {
      return this.$store.state.user.HouseholdFK;
    },
  },
  created() {
    axios
      .get("/roommate/me", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((theResponse) => {
        console.log("user info from Account", theResponse);
        this.userInfo = theResponse.data;
      })
      .catch(() => {
        this.accountError = true;
      });

    axios
      .get("/myroommates", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((myResponse) => {
        this.$store.commit("storeRoommates", myResponse.data);
        console.log("my roommates from Account", myResponse);
        this.roommates = myResponse.data;
      });
  },
};
</script>

<style></style>
