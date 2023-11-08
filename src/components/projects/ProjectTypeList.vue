<script>
import axios from "axios";

import ProjectCard from "../projects/ProjectCard.vue";

export default {
  data() {
    return {
      projects: [],
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  props: {
    type_id: Number,
  },

  components: {
    ProjectCard,
  },

  created() {
    axios
      .get(this.baseUrl + "projects-by-type/" + this.type_id)
      .then((response) => {
        this.projects = response.data.data;
      });
  },
};
</script>

<template>
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
