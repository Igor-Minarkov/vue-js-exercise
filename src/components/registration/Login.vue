<template>
  <form @submit.prevent="handleSubmit">
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter email"
        v-model="email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
        v-model="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("/auth/login", {
        email: this.email,
        password: this.password,
      });
      if (response.data.success === true) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", response.data.user.name);
        this.$store.dispatch("user", response.data.user.name);
        this.$router.push("/");
      } else this.message = response.data.message;
    },
  },
};
</script>
