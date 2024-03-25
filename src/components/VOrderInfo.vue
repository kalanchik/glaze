<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <div class="v-order-info-container">
    <VRow justify="beetwen" align="center">
      <VRow>
        <span class="cake-type">Капкейки</span>
        <span class="cake-name">вишня</span>
      </VRow>
      <span class="cake-price">1 599 ₽</span>
    </VRow>
    <span class="order-comment">
      Комментарии к заказу: капкейки синего цвета
    </span>
    <VRow justify="beetwen" class="discount-bloc">
      <span class="discount">Скидка</span>
      <span class="discount-number">300 ₽</span>
    </VRow>
    <VRow class="result-bloc" justify="beetwen">
      <span class="result">Итого:</span>
      <span class="result-number">1 299₽</span>
    </VRow>
    <VRow>
      <RouterLink to="/ordering" class="order-confrim-button">
        <button class="router-content">ОФОРМИТЬ ЗАКАЗ</button>
      </RouterLink>
    </VRow>
  </div>
</template>

<style>
.v-order-info-container {
  background-color: #f5f5f5;
  flex: 1;
  width: 504px;
  padding: 26px 29px;
}

.router-content {
  border: none;
  background-color: transparent;
  color: white;
  background-color: #9d0000;
  font-size: 18px;
  font-style: italic;
  font-family: "Jost";
  cursor: pointer;
}

.order-confrim-button {
  text-align: center;
  flex: 1;
  padding: 5px 0px;
  color: white;
  background-color: #9d0000;
  border-radius: 100px;
  border: none;
}

.result-bloc {
  margin-bottom: 21px;
}

.result {
  font-size: 24px;
  font-weight: 300;
}

.result-number {
  font-size: 24px;
  color: #9d0000;
  font-weight: 300;
}

.discount-bloc {
  margin-top: 57px;
  margin-bottom: 5px;
}

.discount-number {
  font-size: 18px;
  color: #9d0000;
  font-weight: 300;
}

.discount {
  font-size: 18px;
  font-weight: 300;
}

.order-comment {
  font-size: 18px;
  font-weight: 300;
}

.cake-price {
  color: #9d0000;
  font-size: 18px;
  font-weight: 300;
}

.cake-name {
  font-size: 22px;
  font-family: "NyghtSerif";
  font-style: italic;
  font-weight: 500;
  color: #9d0000;
}

.cake-type {
  font-size: 22px;
  font-weight: 300;
  margin-right: 7px;
}
</style>
