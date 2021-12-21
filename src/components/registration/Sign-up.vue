<template>
  <form @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputName" class="form-label">First name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputName"
        v-model="first_name"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputLastName" class="form-label">Last name</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputLastName"
        v-model="last_name"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="email"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Sign up</button>
    <br />
    <br />
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("/auth/signup", {
        name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
      });
      if (response.data.success === true) {
        this.$router.push("/login");
      } else this.message = response.data.message;
    },
  },
};
</script>
