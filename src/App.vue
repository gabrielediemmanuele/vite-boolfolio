<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectList from "./components/projects/ProjectList.vue";
import NavBar from "./components/NavBar.vue";

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
    NavBar,
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
  <div class="container mt-3">
    <h1>Projects</h1>
  </div>

  <hr />
  <NavBar></NavBar>
  <ProjectList :projects="projects"></ProjectList>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
