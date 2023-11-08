<script>
import axios from "axios";

import ProjectTypeList from "../components/projects/ProjectTypeList.vue";

export default {
  data() {
    return {
      title: "Projects by Types",
      type: {
        id: "",
        label: "",
      },
      baseUrl: "http://127.0.0.1:8000/api/",
    };
  },

  components: { ProjectTypeList },

  created() {
    axios
      .get(this.baseUrl + "types/" + this.$route.params.type_id)
      .then((response) => {
        this.type = response.data;
      });
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
  <span class="type-label">
    {{ type.label }}
  </span>
  <ProjectTypeList :type_id="type.id" v-if="type.id"></ProjectTypeList>
</template>

<style lang="scss" scoped>
.type-label {
  background-color: rgb(0, 76, 255);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
