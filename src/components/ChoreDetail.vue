<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ chore.Chore }}></h2>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  computed: {
    choreDetails() {
      let allChores = this.$store.state.chores;
      let thisChore = allChores.find((aChore) => {
        console.log("thisChore in ChoreDetail", thisChore);
        return aChore.ChorePK == this.$route.params.pk;
      });
      return thisChore;
    },
  },
  // created() {
  //   axios
  //     .get(`/chores/${thePK}`, {
  //       headers: {
  //         Authorization: `Bearer ${this.$store.state.token}`,
  //       },
  //     })
  //     .then((myResponse) => {
  //       console.log("all chores", myResponse);
  //       this.chore = myResponse.data;
  //     });
  // },
};
// export default {
//   computed: {
//     chore() {
//       let allChores = this.$store.state.chores;
//       console.log("all chores", allChores);

//       let thisChore = allChores.find((aChore) => {
//         return aChore.ChorePK == this.$route.params.pk;
//       });
//       return thisChore;
//     },
//   },
// };
</script>

<style></style>
