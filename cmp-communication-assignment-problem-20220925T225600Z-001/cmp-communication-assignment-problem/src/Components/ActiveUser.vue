<template>
  <div class="Name div-style">
    <h2>YOUR NAME:</h2>
    <h1 v-if="Name">{{ Name }}</h1>
  </div>
  <div class="Age div-style">
    <h3>Your Age:</h3>
    <h3 v-if="Age">{{ Age }}</h3>
  </div>
</template>

<script>
export default {
  props: ["Name", "Age"],
};
</script>

<style></style>
