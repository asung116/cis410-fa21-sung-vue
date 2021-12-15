<template>
  <div>
    <h1>Create New Chore</h1>
    <div>
      <form @submit.prevent="onSubmit">
        <div class="mb-e">
          <label for="chore-input" class="form-label">Chore title</label
          ><input
            type="text"
            class="form-control"
            id="chore-input"
            required=""
            placeholder="Enter chore title"
            v-model="chore"
          />
        </div>
        <br />
        <div class="mb-e">
          <label for="description-input" class="form-label">Description</label
          ><input
            type="text"
            class="form-control"
            id="description-input"
            required=""
            placeholder="Enter description"
            v-model="choreDescription"
          />
        </div>
        <br />
        <div class="mb-e">
          <label for="dueDate-input" class="form-label">Due Date</label
          ><input
            type="date"
            class="form-control"
            id="dueDate-input"
            required=""
            placeholder="Enter Due Date"
            v-model="dueDate"
          />
        </div>
        <br />
        <div>
          <div class="mb-e">
            <label for="assignedTo-input" class="form-label"
              >Assignment Name</label
            ><input
              type="text"
              class="form-control"
              id="assignedTo-input"
              required=""
              placeholder="Enter roommate name"
              v-model="assignedTo"
            />
          </div>
          <br />
          <div class="mb-e">
            <label for="assignedToCode-input" class="form-label"
              >Assignment Code</label
            ><input
              type="number"
              class="form-control"
              id="assignedToCode-input"
              required=""
              placeholder="Enter roommate code from table below"
              v-model="assignedToCode"
            />
          </div>
          <p v-if="errorMessage" class="form-text text-danger">
            Please check that you have entered a valid roommate code.
          </p>
          <div>
            <p class="roommates">Roommates</p>
            <table v-if="roommates" class="table">
              <thead>
                <th class="headers">First Name</th>
                <th class="headers">Last Name</th>
                <th class="code">Roommate Code</th>
              </thead>
              <tbody>
                <tr
                  v-for="thisRoommate in roommates"
                  :key="thisRoommate.RoommatePK"
                >
                  <th class="cells">{{ thisRoommate.FirstName }}</th>
                  <th class="cells">{{ thisRoommate.LastName }}</th>
                  <th class="code">{{ thisRoommate.RoommatePK }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />

        <button type="submit" class="btn btn-primary">Submit</button>

        <router-link
          class="btn btn-outline-danger"
          aria-current="page"
          to="/chores"
          >Cancel</router-link
        >

        <p v-if="credentialsError" class="form-text text-danger">
          Invalid credentials
        </p>
        <p v-if="errorMessage" class="form-text text-danger">
          Could not submit new chore, please try again later.
        </p>
      </form>
    </div>
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
  methods: {
    onSubmit() {
      const newChore = {
        chore: this.chore,
        choreDesc: this.choreDescription,
        dueDate: this.dueDate,
        roommateAssignment: this.assignedToName,
        roommateSelect: this.assignedTo,
      };
      axios
        .post("/chorecreate", newChore)
        .then((myResponse) => {
          console.log("the response", myResponse);
          //this.$router.replace("/login?signupsuccess=true");
        })
        .catch((myError) => {
          if (myError.response.status === 409) {
            this.dupEmail = true;
          } else {
            this.errorMessage =
              "Could not submit new chore. Please try again later";
          }
        });
    },
    cancelReview() {
      this.$router.go(-1);
    },
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

<style>
.table {
  width: 75%;
}
/* .container {
  display: flex;
  width: 100%;
} */
.headers {
  font-size: 15px;
  font-weight: normal;
}
.cells {
  font-size: 15px;
  font-weight: normal;
}
.code {
  font-size: 15px;
  font-weight: normal;
  color: blue;
}
.roommates {
  font-size: 16px;
  margin: 5px;
  color: blue;
}
button {
  margin-right: 5px;
}
</style>
