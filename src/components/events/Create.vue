<template>
  <div class="container">
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <h2 class="text-center">Create event</h2>
    <div class="row">
      <div class="col-md-12">
        <router-link
          to="/events"
          class="btn btn-primary btn-sm float-right mb-2"
          >Back</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="event.name" />
          </div>
          <div class="form-group">
            <label>Description</label>
            <textarea
              type="text"
              rows="5"
              class="form-control"
              v-model="event.description"
            ></textarea>
          </div>
          <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control" v-model="event.price" />
          </div>
          <button type="button" class="btn btn-primary" @click="createEvent()">
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      event: {},
      message: "",
    };
  },
  methods: {
    async createEvent() {
      const response = await axios.post("/events/create", {
        name: this.event.name,
        description: this.event.description,
        price: this.event.price,
      });
      if (response.data.success === true) {
        this.$router.push("/events");
      } else this.message = response.data.message;
    },
  },
};
</script>
