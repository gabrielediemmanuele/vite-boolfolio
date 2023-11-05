<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectList from "./components/projects/ProjectList.vue";

import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  components: {
    ProjectList,
  },

  methods: {
    fetchProjects(uri = this.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <h1>Projects</h1>
  <hr />
  <ProjectList :projects="projects"></ProjectList>
</template>

<style lang="scss" scoped></style>
