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
        <router-link
          :to="{
            name: 'portfolio-type',
            params: {
              type_id: project.type_id,
            },
          }"
          class="type-label"
          :class="'label-' + project.type.label"
          >{{ project.type.label }}
        </router-link>
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
