<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VCatalogHeader from "@/components/VCatalogHeader.vue";
import VSpacing from "@/components/VSpacing.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
import VOrderCard from "@/components/VOrderCard.vue";
import VColumHeader from "@/components/VColumHeader.vue";
import VCuponInput from "@/components/VCuponInput.vue";
import VOrderInfo from "@/components/VOrderInfo.vue";
</script>

<template>
  <VLayoutDefault>
    <VCatalogHeader />
    <VContainer>
      <VRow>
        <img src="../../assets/images/folder_tex.svg" alt="" />
      </VRow>
      <VRow class="main-container">
        <VRow class="left-container">
          <VCol class="cards-container">
            <VColumHeader></VColumHeader>
            <VOrderCard />
            <VCuponInput />
          </VCol>
        </VRow>
        <VRow class="right-container">
          <VCol>
            <VOrderInfo />
          </VCol>
        </VRow>
      </VRow>
    </VContainer>
    <VHomeAbout></VHomeAbout>
  </VLayoutDefault>
</template>

<style scoped>
.cards-container {
  flex: 1;
  margin-bottom: 300px;
}

.left-container {
  flex: 3;
}
.right-container {
  flex: 2;
  display: flex;
}
.main-container {
  margin-top: 40px;
}
</style>
