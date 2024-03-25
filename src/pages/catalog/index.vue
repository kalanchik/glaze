<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VCatalogHeader from "@/components/VCatalogHeader.vue";
import VRow from "@/components/UI/VRow.vue";
import VCakeCard from "@/components/VCakeCard.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
import VSpacing from "@/components/VSpacing.vue";

import { computed, onMounted, ref } from "vue";
import { CakesServices } from "@/services/CakeApiService";

const cakeTypes = ["ВСЕ", "КЛАССИЧЕСКИЕ", "СВАДЕБНЫЕ"];
let activeType = ref("ВСЕ");

function changeType(newType) {
  activeType.value = newType;
}

const weddingCakes = ref([]);

const classicCakes = ref([]);

onMounted(async () => {
  try {
    const response = await CakesServices.getCakesFromId([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    classicCakes.value = response;
    const response2 = await CakesServices.getCakesFromId([
      9, 10, 11, 12, 13, 14, 15, 16,
    ]);
    weddingCakes.value = response2;
  } catch (error) {}
});

const cakes = computed(() => {
  if (activeType.value === "ВСЕ") {
    return [...classicCakes.value, ...weddingCakes.value];
  } else if (activeType.value === "КЛАССИЧЕСКИЕ") {
    return classicCakes.value;
  } else {
    return weddingCakes.value;
  }
});
</script>

<template>
  <VCatalogHeader></VCatalogHeader>
  <v-layout-default>
    <v-container class="container">
      <!-- Cake Types -->
      <VRow>
        <p
          v-for="type in cakeTypes"
          :key="type"
          :class="{
            cake_type: true,
            active: type === activeType,
          }"
          @click="changeType(type)"
        >
          {{ type }}
        </p>
      </VRow>

      <!-- Cake Cards -->
      <v-row justify="beetwen">
        <VCakeCard
          v-for="cake in cakes"
          :key="cake.image"
          :image="cake.image"
          :name="cake.type + ' ' + cake.name"
          :price="cake.price"
          :id="cake.id"
        ></VCakeCard>
      </v-row>

      <!-- Additional Info -->
      <VHomeAbout />
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.container {
  padding-right: 15px;
  padding-left: 15px;
}

.cake_type {
  color: #9d0000;
  font-size: 18px;
  font-weight: 400;
  font-family: "Jost";
  margin-right: 27px;
  cursor: pointer;
}

.cake_type.active {
  text-decoration: underline;
  text-decoration-color: #9d0000;
}

.user-selector {
  padding-right: 69px;
}
</style>
