<script setup>
import VCol from "./UI/VCol.vue";
import VRow from "./UI/VRow.vue";
</script>

<template>
  <VCol class="v-order-form">
    <VRow class="form-bloc">
      <VCol class="form-field">
        <p class="header">Дата доставки</p>
        <div class="input-container">
          <VRow justify="end" class="inputfild">
            <img src="@/assets/icons/down.svg" alt="" class="input-button" />
          </VRow>
        </div>
      </VCol>
      <VCol class="form-field">
        <p class="header">Дата доставки</p>
        <div class="input-container">
          <VRow justify="beetwen" class="inputfild">
            <span class="input-text">C 10:00 до 16:00</span>
            <img src="@/assets/icons/down.svg" alt="" class="input-button" />
          </VRow>
        </div>
      </VCol>
    </VRow>
    <VCol class="addres-bloc">
      <p class="header">Адрес доставки</p>
      <input type="text" placeholder="Введите адрес" class="addres-field" />
    </VCol>
  </VCol>
</template>

<style scoped>
.v-order-form {
  padding: 0;
}

.addres-field {
  width: 562px;
  height: 38px;
  border: 1px solid #9d0000;
  border-radius: 100px;
  padding: 20px;
  font-family: "Jost";
  font-size: 18px;
  font-weight: 300;
  outline: none;
}

.header {
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 19px;
}

.inputfild {
  flex: 1;
}

.form-field {
  margin-right: 60px;
  margin-bottom: 40px;
}

.input-button {
  cursor: pointer;
}

.input-text {
  font-size: 18px;
  font-weight: 300;
  color: #090909;
}

.input-container {
  padding: 20px;
  display: flex;
  align-items: center;
  align-items: center;
  width: 251px;
  cursor: pointer;
  height: 38px;
  border: 1px solid #9d0000;
  border-radius: 100px;
}
</style>
