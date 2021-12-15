<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h2 class="text-primary">{{ chore.Chore }}</h2>
        <br />

        <p>
          Description: <br /><strong>{{ chore.ChoreDescription }}</strong>
        </p>
        <p>
          Assigned to: <br /><strong>{{ chore.AssignedTo }}</strong>
        </p>
        <p>
          Completed: <br /><strong>{{ chore.Completion }}</strong>
        </p>
        <p>
          Due Date: <br /><strong>{{ chore.DueDate }}</strong>
        </p>
        <p>
          Completed By: <br /><strong>{{ chore.CompletedBy }}</strong>
        </p>
      </div>
    </div>
    <br />
    <router-link :to="'/chores'"
      ><button class="btn btn-primary">Return to Chores</button></router-link
    >
    <!-- <button v-if="completed" class="btn btn-primary">Complete Chore</button> -->
  </div>
</template>

<script>
export default {
  computed: {
    chore() {
      let allChores = this.$store.state.chores;
      console.log("allChores from chore detail", allChores);
      let thisChore = allChores.find((aChore) => {
        return aChore.ChorePK == this.$route.params.pk;
      });
      return thisChore;
    },
    // completed() {
    //   let allChores = this.$store.state.chores;
    //   //console.log("all chores", allChores);
    //   let vueIf;
    //   let pk = this.$route.params.pk;
    //   let completeStatus;
    //   for (let i = 0; i < allChores.length; i++) {
    //     if (pk != allChores[i].ChorePK) {
    //       continue;
    //     } else if (pk == allChores[i].ChorePK) {
    //       completeStatus = allChores[i].Completion;
    //     }
    //   }
    //   if (completeStatus == "Yes") {
    //     vueIf = true;
    //   }
    //   return vueIf;
    // },
  },
};
</script>

<style></style>
