<template>
  <div class="container">
    <VCol>
      <VRow justify="beetwen">
        <p class="about_text">GLAZE, INC</p>
        <VRow>
          <p class="about_text pad">УСЛОВИЯ</p>
          <p class="about_text">ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
        </VRow>
      </VRow>
      <VSpacing :size="31"></VSpacing>
      <VRow>
        <p class="add_info">
          Компания осуществляет деятельность в области информационных
          технологий: оказание услуг в сети “Интернет” по размещению предложений
          (объявлений) продавцов о реализации товаров. Посмотреть сведения о
          программах, включенных в реестр российских программ для электронных
          вычислительных машин и баз данных.
        </p>
      </VRow>
    </VCol>
  </div>
</template>

<script setup>
import VRow from "./UI/VRow.vue";
import VСol from "./UI/VCol.vue";
</script>

<style scoped>
.container {
  margin-left: 20px;
  margin-right: 20px;
}

.add_info {
  color: #9d0000;
  font-size: 15;
  font-family: "Jost";
  opacity: 0.2;
}

.about_text {
  font-family: "Jost";
  font-size: 16;
  font-weight: 400;
  color: #9d0000;
}

.about_text.pad {
  padding-right: 50px;
}
</style>
