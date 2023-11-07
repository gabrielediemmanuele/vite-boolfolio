<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectCard from "./ProjectCard.vue";

import axios from "axios";

export default {
  data() {
    return {};
  },

  props: {
    projects: Array,
  },

  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-3">Project List</h2>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
