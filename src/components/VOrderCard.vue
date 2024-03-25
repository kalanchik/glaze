<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <VRow class="container">
    <VRow class="left">
      <img src="@/assets/images/order.svg" alt="" class="cake-image" />
      <VCol>
        <VRow class="info-bloc">
          <span class="cake-type">Капкейки</span>
          <span class="cake-name">вишня</span>
        </VRow>
        <VRow align="center">
          <span class="cake-weight">вес</span>
          <span class="cake-weight-number">800 г</span>
        </VRow>
        <p class="cake-people">на 4 человека</p>
        <button class="add-comment">Добавить комментарии к заказу:</button>
      </VCol>
    </VRow>
    <VRow class="right" align="start">
      <VCol class="count-bloc">
        <VRow class="count-button">
          <button class="count-number">--</button>
          <span class="count-number">1</span>
          <button class="count-number">+</button>
        </VRow>
      </VCol>
      <span class="price">1 599 ₽</span>
      <VCol>
        <button class="delete-button">
          <img src="@/assets/icons/close.svg" alt="" />
        </button>
      </VCol>
    </VRow>
  </VRow>
</template>

<style scoped>
.delete-button {
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
}

.price {
  color: #9d0000;
  font-size: 24px;
  font-weight: 300;
  margin: 0px 20px;
}

.count-bloc {
  margin: 0;
  padding: 0;
}

.count-number {
  font-size: 21px;
  margin: 0px 8px;
  font-weight: 300;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
}

.count-button {
  border: 1px solid #9d0000;
  padding: 5px 10px;
  border-radius: 100px;
}

.add-comment {
  border: none;
  background-color: transparent;
  font-family: "Jost";
  text-decoration: underline;
  font-size: 18px;
  padding: 0;
  font-weight: 300;
  cursor: pointer;
}

.cake-people {
  font-weight: 300;
  font-size: 18px;
  margin-bottom: 5px;
}

.cake-weight-number {
  font-weight: 300;
  font-size: 18px;
}

.cake-weight {
  font-family: "NyghtSerif";
  font-style: italic;
  color: #9d0000;
  font-size: 18px;
  margin-right: 10px;
}

.info-bloc {
  margin-bottom: 5px;
}

.cake-type {
  font-size: 22px;
  font-weight: 200;
  margin-right: 10px;
}

.cake-name {
  font-family: "NyghtSerif";
  font-size: 22px;
  color: #9d0000;
  font-style: italic;
}

.cake-image {
  margin-right: 22px;
}

.left {
  flex: 3;
}
.right {
  flex: 2;
}
</style>
