<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectCard from "./components/projects/ProjectCard.vue";

export default {
  data() {
    return {
      /* title: "Hello world", */
    };
  },

  props: {
    projects: Array,
  },

  components: { ProjectCard },
};
</script>

<template>
  <div class="container">
    <h2>Project List</h2>
    <div class="row row-cols-3 g-4">
      <ProjectCard v-for="project in projects" :project="project"></ProjectCard>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
