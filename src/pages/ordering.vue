<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VButton from "@/components/UI/VButton.vue";
import { useOrdering } from "@/composables";
import VCatalogHeader from "@/components/VCatalogHeader.vue";
import VDiliveryInfo from "@/components/VDiliveryInfo.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VOredrResult from "@/components/VOrderResult.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
</script>

<template>
  <v-layout-default>
    <v-catalog-header />
    <v-container class="main-container">
      <v-row>
        <v-row class="payment-bloc">
          <v-col class="payment-container">
            <img src="@/assets/images/payment.svg" alt="" />
            <VDiliveryInfo />
          </v-col>
        </v-row>
        <v-row class="order-bloc">
          <VOredrResult />
        </v-row>
      </v-row>
    </v-container>
    <VHomeAbout />
  </v-layout-default>
</template>

<style scoped>
.main-container {
  margin-bottom: 100px;
}

.payment-bloc {
  flex: 4;
}

.payment-container {
  flex: 1;
}

.order-bloc {
  flex: 2;
}
</style>
