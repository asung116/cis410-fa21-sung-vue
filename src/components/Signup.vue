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

      <div>
        <h5>
          If you have a household code, enter your household CODE in the field
          below.
        </h5>

        <!-- Display this if they already have a household (if checkbox is checked) -->
        <div id="hasHousehold" class="mb-3" visibility="hidden">
          <label for="householdCode-input" class="form-label"
            >Household Code</label
          ><input
            type="text"
            class="form-control"
            id="householdCode-input"
            placeholder="Household CODE"
            v-model="householdCode"
          />
        </div>

        <h5>
          If you DO NOT have a household code, enter your household NAME in the
          field below.
        </h5>
        <!-- Display this if they do not already have a household (if checkbox is not checked) -->
        <div id="noHousehold" class="mb-3">
          <label for="householdName-input" class="form-label"
            >Household Name</label
          ><input
            type="text"
            class="form-control"
            id="householdName-input"
            placeholder="Household NAME"
            v-model="householdName"
          />
          <label for="address-input" class="form-label">Address</label
          ><input
            type="text"
            class="form-control"
            id="address-input"
            placeholder="Address"
            v-model="address"
          />
        </div>
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
      nameFirst: "",
      nameLast: "",
      phone: "",
      email: "",
      password: "",
      householdCode: "",
      householdName: "",
      address: "",
      errorMessage: "",
      dupEmail: false,
    };
  },
  methods: {
    onSubmit() {
      // console.log("form submitted");
      if (this.householdCode == "") {
        const myHousehold = {
          householdName: this.householdName,
          address: this.address,
        };
        console.log("my household", myHousehold);
        axios.post("/household", myHousehold).then((theResponse) => {
          console.log("household Response", theResponse);
        });
      }
      if (this.householdName == "") {
        const myFormData = {
          nameFirst: this.nameFirst,
          nameLast: this.nameLast,
          phone: this.phone,
          email: this.email,
          password: this.password,
          householdCode: this.householdCode,
        };
        console.log("my form data", myFormData);
        axios
          .post("/roommate", myFormData)
          .then((myResponse) => {
            console.log("the response", myResponse);
            this.$router.replace("/login?signupsuccess=true");
          })
          .catch((myError) => {
            if (myError.response.status === 409) {
              this.dupEmail = true;
            } else {
              this.errorMessage = "Cannot sign you up, please try again later";
            }
          });
      }
    },
  },
};
</script>

<style></style>
