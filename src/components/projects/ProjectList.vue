<script>
import PaginationApp from "../ui-elements/PaginationApp.vue";
import ProjectCard from "./ProjectCard.vue";

import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api/",
      pagination: [],
    };
  },

  components: { ProjectCard, PaginationApp },

  methods: {
    fetchProjects(uri = this.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h2 class="mb-3">Project List</h2>
    <PaginationApp
      :pagination="pagination"
      @change-page="fetchProjects"
    ></PaginationApp>

    <div class="row row-cols-3">
      <ProjectCard
        v-for="project in projects"
        :detailView="false"
        :project="project"
      ></ProjectCard>
    </div>

    <PaginationApp
      :pagination="pagination"
      @change-page="fetchProjects"
    ></PaginationApp>
  </div>
</template>

<style lang="scss" scoped></style>
