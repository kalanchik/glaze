<template>
  <p :class="{ cake_type: true, active: isActive, pancake: isPancake }">
    {{ name }}
  </p>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  isPancake: {
    type: Boolean,
  },
});
</script>

<style scoped>
.cake_type.pancake {
  background-color: #9d0000;
  border-radius: 100px;
  color: white;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 2px;
  padding-bottom: 2px;
}

.cake_type.active {
  text-decoration: underline;
}

.cake_type {
  font-size: 16px;
  padding-right: 15px;
  font-family: "Jost";
}
</style>
