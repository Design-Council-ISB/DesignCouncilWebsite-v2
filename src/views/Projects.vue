<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-md-12">
        <h1>Our Projects</h1>
        <hr class="mt-3" />
        <p>
          {{ data.projects.text }}
        </p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-md-12 mt-4"
        :key="project.name"
        v-for="project in data.projects.projects"
      >
        <div class="container box">
          <div class="row">
            <div class="col-md-4 mb-4 mb-md-0">
              <img loading="lazy" :src="project.image" class="img-fluid" />
            </div>
            <div class="col-md-8">
              <a :href="project.link">
                <h2>{{ project.name }}</h2>
              </a>
              <p>{{ project.description }}</p>

              <h3>Links</h3>
              <hr class="my-2" />
              <a
                v-for="btn in project.btns"
                :key="btn.name"
                class="mr-2 text-underline"
                :href="btn.url"
              >
                {{ btn.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
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
