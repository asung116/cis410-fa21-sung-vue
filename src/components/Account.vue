<template>
  <div>
    <h1>Account</h1>
    <hr />
    <h3>{{ firstName }}'s Household</h3>

    <!-- <p v-if="accountError" class="text-danger">
      Cannot get your account information, please try again later.
    </p> -->
    <!-- {{householdPK}} where "Household Code" is -->
    <h5>Household Code: Household Code</h5>

    <br />
    <h4>Roommates</h4>
    <!-- <table v-if="householdInfo" class="table">
      <thead>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
      </thead>
      <tbody>
        <tr
          v-for="thisHousehold in householdInfo"
          :key="thisHousehold.householdPK"
        >
          <th>
            <router-link :to="`/roommate/${thisRoommate.HouseholdFK}`">{{
              thisRoommate.LastName
            }}</router-link>
          </th>
          <th>{{ thisRoommate.FirstName }}</th>
          <th>{{ thisRoommate.LastName }}</th>
          <th>{{ thisRoommate.Email }}</th>
        </tr>
      </tbody>
    </table> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userInfo: null,
      accountError: false,
    };
  },
  computed: {
    firstName() {
      //console.log("here is the store so far", this.$store.state);
      return this.$store.state.user.FirstName;
      // How do I get the household info and the roommate info from the HouseholdFK that is returned?
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
        //console.log("here is the response", theResponse);
        this.userInfo = theResponse.data;
      });
    // .catch(() => {
    //   this.accountError = true;
    // });
  },
};
</script>

<style></style>
