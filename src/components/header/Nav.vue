<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="navbar-brand">Vue Js Exercise</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav" v-if="!user">
        <li class="nav-item active">
          <router-link to="/login" class="nav-link"
            >Login <span class="sr-only">Login</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/register" class="nav-link">Sign up</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto" v-if="user">
        <div class="navbar-nav">
          <router-link to="/events" class="nav-item nav-link"
            >Events</router-link
          >
        </div>
        <li class="nav-item active">
          <a href="javascript:void(0)" class="nav-link" @click="handleClick"
            >Logout <span class="sr-only">Logout</span></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",

  methods: {
    handleClick() {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
#navbarSupportedContent {
  justify-content: flex-end;
}
</style>
