<script>
// import MyComponent from "./components/MyComponent.vue";
import NavBar from "./components/NavBar.vue";

import axios from "axios";

export default {
  data() {
    return {
      //
    };
  },

  components: {
    NavBar,
  },
};
</script>

<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
