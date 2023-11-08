<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world",
    };
  },

  props: {
    project: Object,
    detailView: Boolean,
  },
};
</script>

<template>
  <div class="col mt-5 mb-5">
    <div class="card h-100">
      <div class="card-body">
        <h4>Id: {{ project.id }}</h4>
        <h5>Title: {{ project.title }}</h5>
        <span class="type-label">{{ project.type.label }}</span>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Author: {{ project.author }}</li>
        <li class="list-group-item">Date: {{ project.date }}</li>
        <li class="list-group-item">
          Link: <a href=" #">{{ project.link }}</a>
        </li>
        <li class="list-group-item">Descrizione: {{ project.description }}</li>
      </ul>
    </div>
    <div class="card-footer" v-if="!detailView">
      <router-link
        :to="{ name: 'project-detail', params: { id: project.id } }"
        class="btn btn-primary mt-1"
        >Vedi</router-link
      >
    </div>
    <div class="card-footer" v-if="detailView">
      <router-link :to="{ name: 'portfolio' }" class="btn btn-danger mt-1"
        >Torna al Portfolio</router-link
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.type-label {
  background-color: rgb(0, 76, 255);
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
