<template>
  <div class="container">
    <div v-if="message" class="alert alert-danger" role="alert">
      {{ message }}
    </div>
    <h2 class="text-center">Update Event</h2>
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
            <input type="text" class="form-control" v-model="event.price" />
          </div>
          <button type="button" class="btn btn-primary" @click="updateEvent()">
            Update
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
  mounted() {
    this.editEvent(this.$route.params.eventId);
  },
  methods: {
    async editEvent(eventId) {
      const response = await axios.get(`events/details/${eventId}`);
      if (response.data) {
        this.event = response.data;
      }
    },
    async updateEvent() {
      const response = await axios.put(
        `events/edit/${this.$route.params.eventId}`,
        this.event
      );
      if (response.data.success === true) {
        this.$router.push("/events");
      } else this.message = response.data.message;
    },
  },
};
</script>
