<template>
  <div>
    <h1>Chores</h1>
    <hr />
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
  // computed: {
  //   theChores() {
  //     return this.$store.state.chores;
  //   },
  // },
  created() {
    axios
      .get("/chores/household", {
        headers: {
          Authorization: `Bearer ${this.$store.state.token}`,
        },
      })
      .then((myResponse) => {
        console.log("house chores", myResponse);
        this.chores = myResponse.data;
      });
  },
};
</script>

<style></style>
