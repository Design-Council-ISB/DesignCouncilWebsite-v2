<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <h1>Our Projects</h1>
        <hr class="mt-3" />
        <p>
          Here are all of our projects, finished and ongoing which we worked on.
        </p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-12"
        :key="project.name"
        v-for="project in data.projects"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    data() {
      return this.$store.state.data;
    },
  },
};
</script>

<style></style>
