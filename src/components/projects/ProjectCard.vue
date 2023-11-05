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
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h4>Id: {{ project.id }}</h4>
        <h5>Title: {{ project.title }}</h5>
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
  </div>
</template>

<style lang="scss" scoped></style>
