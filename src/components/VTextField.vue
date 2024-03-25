<script setup>
import VCol from "./UI/VCol.vue";
const props = defineProps({
  header: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
</script>

<template>
  <VCol class="v-textfield">
    <p class="input-header">{{ header }}</p>
    <input type="text" :placeholder="placeholder" class="textfield" />
  </VCol>
</template>

<style scoped>
.v-textfield {
  margin-right: 30px;
}

.textfield {
  width: 251px;
  padding: 10px 15px;
  border: 1px solid #9d0000;
  border-radius: 100px;
  font-family: "Jost";
  font-weight: 300;
  font-size: 18px;
  outline: none;
}

.input-header {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 15px;
}
</style>
