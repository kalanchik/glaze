<script setup>
import { computed, onMounted, ref } from "vue";
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VCatalogHeader from "@/components/VCatalogHeader.vue";
import VRow from "@/components/UI/VRow.vue";
import VCakeCard from "@/components/VCakeCard.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
import { CakesServices } from "@/services/CakeApiService";

const cakes = ref([]);

onMounted(async () => {
  try {
    const response = await CakesServices.getCakesFromId([
      17, 18, 19, 20, 21, 22, 23, 24,
    ]);
    cakes.value = response;
    console.log(cakes.value);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <VCatalogHeader></VCatalogHeader>
  <v-layout-default>
    <v-container class="container">
      <!-- Cake Cards -->
      <div class="cake-cards">
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
      </div>

      <!-- Additional Info -->
      <VHomeAbout />
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.cake-cards {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
