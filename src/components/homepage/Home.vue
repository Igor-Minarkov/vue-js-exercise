<template>
  <div>
    <h3 v-if="user">Welcome {{ user }}, nice to have you here</h3>
    <h3 v-if="!user">You need to login in order to see the content</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Home",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
