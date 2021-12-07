<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="household-input" class="form-label">Household Name</label
        ><input
          type="text"
          class="form-control"
          id="household-input"
          required=""
          placeholder="Household Name"
          v-model="nameHouse"
        />
      </div>
      <div class="mb-3">
        <label for="address-input" class="form-label">Address</label
        ><input
          type="text"
          class="form-control"
          id="address-input"
          required=""
          placeholder="Address"
          v-model="address"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <p id="error-signup" class="text-danger">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      householdName: "",
      address: "",
    };
  },
  methods: {
    onSubmit() {
      // console.log("form submitted");
      const myFormData = {
        householdName: this.address,
        address: this.address,
      };
      //console.log(myFormData);
      axios
        .post("/roommate", myFormData)
        .then((myResponse) => {
          console.log("the response", myResponse);
          this.$router.replace("/login>signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage = "Cannot sign you up, please try again later";
          }
        });
    },
  },
};
</script>

<style></style>
