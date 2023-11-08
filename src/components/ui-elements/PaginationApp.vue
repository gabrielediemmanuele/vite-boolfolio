<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {};
  },

  props: {
    pagination: Array,
  },

  emits: ["change-page"],
};
</script>

<template>
  <nav aria-label="...">
    <ul class="pagination">
      <li
        class="page-item"
        v-for="link in pagination"
        :class="{ disabled: !link.url }"
        @click="$emit('change-page', link.url)"
      >
        <a
          class="page-link"
          :class="{ active: link.active }"
          href="#"
          v-html="link.label"
        ></a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped></style>
