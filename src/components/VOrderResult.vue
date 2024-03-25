<script setup>
import VCol from "./UI/VCol.vue";
import VRow from "./UI/VRow.vue";
</script>

<template>
  <VCol class="v-order-result">
    <p class="header">ваш заказ</p>
    <div class="order-container">
      <VRow justify="beetwen">
        <VRow>
          <span class="cake-type">Капкейки</span>
          <span class="cake-name">вишня</span>
        </VRow>
        <span class="cake-price">1 599 ₽</span>
      </VRow>
      <p class="comment-text">Комментарии к заказу: капкейки синего цвета</p>
      <VRow class="dilivery-info" justify="beetwen" align="center">
        <span class="dilivery-text">Доставка</span>
        <span class="dilivery-price">500 ₽</span>
      </VRow>
      <VRow class="discount-info" justify="beetwen">
        <span class="discount-text">Скидка</span>
        <span class="dilivery-price">300 ₽</span>
      </VRow>
      <VRow justify="beetwen">
        <span class="result-text">Итого:</span>
        <span class="result-price">1 799 ₽</span>
      </VRow>
      <VRow>
        <button class="result-button">ОФОРМИТЬ ЗАКАЗ</button>
      </VRow>
    </div>
  </VCol>
</template>

<style scoped>
.result-button {
  background-color: #9d0000;
  border: none;
  flex: 1;
  margin-top: 21px;
  font-family: "Jost";
  font-size: 18px;
  color: white;
  font-style: italic;
  border-radius: 100px;
  cursor: pointer;
}

.result-price {
  font-size: 24px;
  font-weight: 300;
  color: #9d0000;
}

.result-text {
  font-size: 24px;
  font-weight: 300;
}

.discount-text {
  font-size: 18px;
  font-weight: 300;
}

.discount-info {
  margin-bottom: 5px;
}

.dilivery-info {
  margin-bottom: 17px;
}

.dilivery-price {
  font-size: 18px;
  font-weight: 300;
  color: #9d0000;
}

.dilivery-text {
  font-size: 24px;
  font-weight: 300;
}

.header {
  font-size: 55px;
  font-weight: 300;
  margin-bottom: 47px;
}
.order-container {
  width: 504px;
  background-color: #f5f5f5;
  padding: 26px 28px;
}
.cake-type {
  font-size: 20px;
  font-weight: 300;
  margin-right: 7px;
}
.cake-name {
  font-size: 20px;
  font-family: "NyghtSerif";
  color: #9d0000;
  font-style: italic;
  font-weight: 500;
}
.cake-price {
  font-size: 18px;
  font-weight: 300;
  color: #9d0000;
}

.comment-text {
  font-size: 18px;
  font-weight: 300;
}

.dilivery-info {
  margin-top: 15px;
}
</style>
