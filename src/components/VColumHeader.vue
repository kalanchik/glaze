<script setup>
import VRow from "./UI/VRow.vue";
</script>

<template>
  <VRow class="colum-header">
    <VRow class="left">
      <span class="col-name">Название</span>
    </VRow>
    <VRow class="right">
      <span class="col-name">Количество</span>
      <span class="col-name">Цена</span>
    </VRow>
  </VRow>
</template>

<style scoped>
.colum-header {
  flex: 1;
  margin-bottom: 32px;
}

.left {
  flex: 3;
}

.right {
  flex: 2;
}

.col-name {
  font-size: 18px;
  font-weight: 300;
  margin-right: 50px;
}
</style>
