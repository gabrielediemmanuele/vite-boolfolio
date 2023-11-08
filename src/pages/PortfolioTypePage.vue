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
  <div class="container">
    <h1>{{ title }}</h1>
    <span class="type-label" :class="'label-' + type.label">
      {{ type.label }}
    </span>
    <span>
      <router-link
        :to="{ name: 'portfolio' }"
        class="btn btn-danger mt-1 my-2 mx-4"
        >Torna al Portfolio</router-link
      >
    </span>
    <ProjectTypeList :type_id="type.id" v-if="type.id"></ProjectTypeList>
  </div>
</template>

<style lang="scss" scoped>
.type-label {
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
}

.label-Front-End {
  background-color: rgb(50, 124, 86);
}

.label-Back-End {
  background-color: rgb(212, 119, 66);
}

.label-Full-stack {
  background-color: rgb(76, 55, 101);
}
</style>
