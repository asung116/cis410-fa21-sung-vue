<template>
  <div>
    <h1>Chores</h1>
    <hr />
    <router-link v-if="auth" :to="`/chores/choreCreate`"
      ><button class="btn btn-success">Create a new chore</button></router-link
    >
    <router-view />
    <table class="table">
      <thead>
        <tr>
          <th>Chore</th>
          <th>Assigned To</th>
          <th>Due Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="thisChore in chores" :key="thisChore.ChorePK">
          <th>{{ thisChore.Chore }}</th>
          <th>{{ thisChore.AssignedTo }}</th>
          <th>{{ thisChore.DueDate }}</th>
          <th>
            <router-link :to="`/chores/${thisChore.ChorePK}`"
              ><button class="btn btn-primary">Details</button></router-link
            >
          </th>
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
      chores: null,
    };
  },
  computed: {
    auth() {
      return this.$store.state.token;
    },
  },
  created() {
    axios
      .get("/chores/household", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((myResponse) => {
        this.$store.commit("storeChores", myResponse.data);
        console.log("house chores", myResponse);
        this.chores = myResponse.data;
        console.log("here is the store so far from Chores", this.$store.state);
      });
  },
};
</script>

<style></style>
