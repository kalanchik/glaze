<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
import VTextField from "./VTextField.vue";
import VOrderMethod from "./VOrderMethod.vue";
import VOrderForm from "./VOrderForm.vue";
</script>

<template>
  <VCol class="dilivery-info">
    <VRow class="user-info-bloc">
      <VTextField header="Получатель" placeholder="Введите имя" />
      <VTextField header="Фамилия" placeholder="Введите фамилию" />
      <VTextField header="Email" placeholder="Введите e-mail" />
    </VRow>
    <VOrderMethod />
    <VOrderForm />
  </VCol>
</template>

<style scoped>
.dilivery-info {
  margin-top: 64px;
}

.user-info-bloc {
  margin-bottom: 75px;
}
</style>
