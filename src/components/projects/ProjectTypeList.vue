<script>
import axios from "axios";

import ProjectCard from "../projects/ProjectCard.vue";
import PaginationApp from "../ui-elements/PaginationApp.vue";

export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api/",
      pagination: [],
    };
  },

  props: {
    type_id: Number,
  },

  components: {
    ProjectCard,
    PaginationApp,
  },

  methods: {
    fetchProjects(
      endpoint = this.baseUrl + "projects-by-type/" + this.type_id
    ) {
      axios.get(endpoint).then((response) => {
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
  <PaginationApp
    :pagination="pagination"
    @change-page="fetchProjects"
  ></PaginationApp>

  <div class="row row-cols-3 g4">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      :detailView="false"
    ></ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
