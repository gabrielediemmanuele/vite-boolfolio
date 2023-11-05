<script>
// import MyComponent from "./components/MyComponent.vue";
import ProjectList from "./components/projects/ProjectList.vue";

import axios from "axios";

export default {
  data() {
    return {
      /* title: "Hello world", */
    };
  },

  components: {
    ProjectList,
  },
};
</script>

<template>
  <h1>VEDIAMO</h1>
  <hr />
  <ProjectList></ProjectList>
</template>

<style lang="scss" scoped></style>
