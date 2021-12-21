<template>
  <div class="container">
    <h2 class="text-center">Events List</h2>
    <div class="row">
      <div class="col-md-12">
        <router-link
          to="/events/create"
          class="btn btn-primary btn-sm float-right mb-2"
          >Add Events</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, key) of events" :key="event.id">
              <td>{{ key + 1 }}</td>
              <td>{{ event.name }}</td>
              <td class="desc">{{ event.description }}</td>
              <td>{{ event.price }}</td>
              <td>
                <router-link
                  class="btn btn-success btn-sm"
                  :to="{
                    name: 'Edit',
                    params: { eventId: event.id },
                  }"
                  >Edit</router-link
                >
                <button
                  type="button"
                  class="btn btn-danger btn-sm"
                  data-toggle="modal"
                  data-target="#exampleModal"
                >
                  Delete
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <p>Are you sure that you want to delete this item?</p>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="deleteEvent(event.id)"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: {},
    };
  },
  created() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      const response = await axios.get("/events/mine");
      this.events = response.data;
    },
    async deleteEvent(eventId) {
      const response = await axios.post(`/events/delete/${eventId}`);
      if (response) {
        let i = this.events.map((data) => data.id).indexOf(eventId);
        this.events.splice(i, 1);
      }
    },
  },
};
</script>

<style>
.modal-backdrop {
  display: none !important;
}
.modal-content {
  margin: 2px auto;
  z-index: 1100 !important;
}
.modal-open {
  padding-right: 0px !important;
}
.desc {
  word-break: break-all;
}
</style>
