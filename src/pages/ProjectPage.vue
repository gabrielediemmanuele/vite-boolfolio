<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      project: {},
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  components: {
    ProjectCard,
  },

  created() {
    console.log(this.$route.params.id);
    axios
      .get(this.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <ProjectCard :project="project" :detailView="true" v-if="project">
    </ProjectCard>
  </div>
</template>

<style lang="scss" scoped></style>
