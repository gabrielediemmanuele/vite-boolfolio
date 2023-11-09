<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";

export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000/api/",
      types: [],
    };
  },

  /* components: {
     MyComponent,
   }, */

  methods: {
    fetchProjects() {
      const activeTypes = [];

      this.types.forEach((type) => {
        if (types.active) activeTypes.push(type.id);
      });

      axios
        .post(
          this.baseUrl + "get-projects-by-filters",
          { activeTypes },
          { headers: { "Content-Type": "multipart/from-data" } }
        )
        .then((response) => {
          this.filteredProjects = response.data.data;
        });
    },

    fetchTypes() {
      axios.get(this.baseUrl + "types").then((response) => {
        this.types = response.data.map((type) => {
          return {
            ...type,
            active: false,
          };
        });
      });
    },

    toggleType(type) {
      type.active = !type.active;
      this.fetchProjects();
    },
  },

  created() {
    this.fetchProjects();
    this.fetchTypes();
  },
};
</script>

<template>
  <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped></style>
