<template>
  <div>
    <h1>Login</h1>
    <div v-if="this.$route.query.signupsuccess" class="alert alert-success">
      Thanks for signing up, please log in now.
    </div>

    <form @submit.prevent="onSubmit">
      <div class="mb-e">
        <label for="email-input" class="form-label">Email</label
        ><input
          type="email"
          class="form-control"
          id="email-input"
          required=""
          placeholder="Enter email"
          v-model="email"
        />
      </div>
      <div class="mb-e">
        <label for="password-input" class="form-label">Password</label
        ><input
          type="password"
          class="form-control"
          id="password-input"
          required=""
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>

      <p v-if="credentialsError" class="form-text text-danger">
        Invalid credentials
      </p>
      <p v-if="loginError" class="form-text text-danger">
        Could not log you in, please try again later
      </p>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      loginError: false,
      credentialsError: false,
    };
  },

  methods: {
    onSubmit() {
      let myFormData = {
        email: this.email,
        password: this.password,
      };

      //console.log("the form data", myFormData);

      axios
        .post("/roommate/login", myFormData)
        .then((myResponse) => {
          console.log("the response from Login", myResponse);
          this.$store.commit("storeTokenInApp", myResponse.data.token);
          this.$store.commit("storeUserInApp", myResponse.data.user);
          this.$router.replace("/account");
        })
        .catch((myError) => {
          console.log("error in /roommate/login", myError);

          if (myError.response.status == 401) {
            this.credentialsError = true;
          } else {
            this.loginError = true;
          }
        });
    },
  },
};
</script>

<style>
button {
  margin-top: 10px;
}
</style>
