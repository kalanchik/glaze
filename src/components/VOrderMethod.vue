<script setup>
import VCol from "./UI/VCol.vue";
import VRow from "./UI/VRow.vue";
</script>

<template>
  <VCol class="v-order-method">
    <p class="header">Способ получения</p>
    <VRow>
      <VRow align="center" class="method-bloc">
        <div class="checkbox active"></div>
        <span class="method-text">ДОСТАВКА</span>
      </VRow>
      <VRow align="center" class="method-bloc">
        <div class="checkbox"></div>
        <span class="method-text">САМОВЫВОЗ</span>
      </VRow>
    </VRow>
  </VCol>
</template>

<style scoped>
.v-order-method {
  margin-bottom: 40px;
}

.header {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 19px;
}

.method-bloc {
  margin-right: 30px;
}

.method-text {
  font-size: 18px;
  color: #9d0000;
}

.checkbox {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-right: 15px;
  cursor: pointer;
  border: 1px solid #9d0000;
}

.checkbox.active {
  background-color: #9d0000;
}
</style>
