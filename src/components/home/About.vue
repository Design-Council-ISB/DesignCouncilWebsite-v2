<template>
  <div class="container about">
    <div class="row">
      <div class="col-md-6 mr-auto">
        <h1>About us</h1>
        <hr />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-6">
        <img
          @mouseenter="image = images[1]"
          @mouseleave="image = images[0]"
          :src="image"
          class="img-fluid"
        />
      </div>
      <div class="col-md-6 mt-4 mt-md-0">
        <p class="mb-2">{{ data.about.text }}</p>
        <router-link to="/team" class="text-underline"
          >Meet the Team</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const images = [
      require("../../assets/images/team/team.jpg"),
      require("../../assets/images/team/team-funny.jpg"),
    ];
    return {
      image: images[0],
      images,
    };
  },

  computed: {
    data() {
      return this.$store.state.data;
    },
  },
};
</script>

<style>
.text-underline {
  text-decoration: underline;
}
.about {
  padding-bottom: 100px;
}
</style>
