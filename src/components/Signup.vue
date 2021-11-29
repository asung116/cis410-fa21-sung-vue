<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="fname-input" class="form-label">First name</label
        ><input
          type="text"
          class="form-control"
          id="fname-input"
          required=""
          placeholder="First name"
          v-model="nameFirst"
        />
      </div>
      <div class="mb-3">
        <label for="lname-input" class="form-label">Last name</label
        ><input
          type="text"
          class="form-control"
          id="lname-input"
          required=""
          placeholder="Last name"
          v-model="nameLast"
        />
      </div>
      <div class="mb-3">
        <label for="phone-input" class="form-label">Phone Number</label
        ><input
          type="tel"
          class="form-control"
          id="phone-input"
          required=""
          placeholder="Phone Number"
          v-model="phone"
        />
      </div>
      <div class="mb-3">
        <label for="email-input" class="form-label">Email</label
        ><input
          type="email"
          class="form-control"
          id="email-input"
          required=""
          placeholder="Enter email"
          v-model="email"
        />
        <small v-if="dupEmail" class="text-danger"
          >Please chose a different email</small
        >
      </div>
      <div class="mb-3">
        <label for="password-input" class="form-label">Password</label
        ><input
          type="password"
          class="form-control"
          id="password-input"
          placeholder="Password"
          required=""
          v-model="password"
        />
      </div>
      <div class="mb-3">
        <label for="household-input" class="form-label">Household</label
        ><input
          type="text"
          class="form-control"
          id="household-input"
          placeholder="Password"
          required=""
          v-model="password"
        />
      </div>
      <!-- <div class="mb-3">
        <input type="checkbox" id="household-checkbox" v-model="checked" />
        <label for="household-checkbox">I already have a household code</label>
      </div> -->
      <!-- <div id="householdControl">
        <div class="mb-3">
          <label for="hasHousehold" class="form-label">
            Enter Household Code
          </label>
          <input
            type="radio"
            class="radio-button"
            id="hasHousehold"
            :value="hasHousehold"
            :name="hasHousehold"
            v-model="hasHousehold"
          />
        </div>
        <div class="mb-3">
          <label for="hasHousehold" class="form-label">
            Create New Household
          </label>
          <input
            type="radio"
            class="radio-button"
            id="newHousehold"
            :value="label"
            :name="newHousehold"
            v-model="value"
          />
        </div>
      </div> -->
      <!-- <div class="mb-3">
        <label for="newHousehold-input" class="form-label">Household Name</label
        ><input
          type="text"
          class="form-control"
          id="newHousehold-input"
          placeholder="Household Name"
          required=""
          v-model="password"
        />
      </div> -->
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
      nameFirst: "",
      nameLast: "",
      phone: "",
      email: "",
      password: "",
      errorMessage: "",
      dupEmail: false,
    };
  },
  methods: {
    onSubmit() {
      // console.log("form submitted");
      const myFormData = {
        nameFirst: this.nameFirst,
        nameLast: this.nameLast,
        phone: this.phone,
        email: this.email,
        password: this.password,
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
