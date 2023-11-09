<script>
// import MyComponent from "./components/MyComponent.vue";
import axios from "axios";

import ProjectCard from "../components/projects/ProjectCard.vue";
export default {
  data() {
    return {
      baseUrl: "http://127.0.0.1:8000/api/",
      types: [],
      filteredProjects: [],
    };
  },

  components: {
    ProjectCard,
  },

  methods: {
    fetchProjects() {
      const activeTypes = [];

      this.types.forEach((type) => {
        if (type.active) {
          activeTypes.push(type.id);
        }
      });

      axios
        .get(this.baseUrl + "get-projects-by-filters", {
          headers: { "Content-Type": "multipart/from-data" },
          params: { activeTypes },
        })
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
    this.fetchTypes();
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>Advanced Research</h1>

    <div class="row">
      <h3>Select a type</h3>
      <div class="col-4 d-flex flex-column text-center">
        <span
          v-for="(type, index) in types"
          :key="type.id"
          :class="type.active ? 'label-' + type.label : 'disabled'"
          @click="toggleType(type)"
          class="type-label mx-3 my-2"
        >
          {{ type.label }}
        </span>
      </div>
      <div class="col-8">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :detailView="false"
        >
        </ProjectCard>
      </div>
    </div>
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

.disabled {
  background-color: gray;
}
</style>
