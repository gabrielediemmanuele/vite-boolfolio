<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      /* title: "Hello world", */
    };
  },

  props: {
    projects: Array,
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <div class="container">
    <h2>Project List</h2>
    <div class="row row-cols-3 g-4">
      <div class="col" v-for="project in projects">
        <div class="card h-100">
          <div class="card-body">
            <h4>{{ project.title }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
