<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      /* title: "Hello world", */
    };
  },

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark p-0 mb-2">
    <div class="container-fluid bg-dark p-2">
      <router-link class="navbar-brand text-light" :to="{ name: 'portfolio' }"
        >MyProject</router-link
      >
      <button
        class="navbar-toggler bg-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active text-light"
              aria-current="page"
              :to="{ name: 'home' }"
              >Homepage</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active text-light"
              aria-current="page"
              :to="{ name: 'portfolio' }"
              >Portfolio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active text-light"
              aria-current="page"
              :to="{ name: 'advanced-filter' }"
              >Advanced Filter Search</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
