<template>
  <v-layout-default>
    <!-- Header -->
    <VHeader></VHeader>

    <v-container>
      <VSpacing :size="101"></VSpacing>

      <v-col>
        <v-row justify="center">
          <img src="@/assets/icons/popular_banner.svg" alt="" />
        </v-row>
      </v-col>

      <VSpacing :size="28"></VSpacing>

      <!-- Cake Types -->
      <v-row justify="center">
        <p
          v-for="type in cakeTypes"
          :key="type"
          :class="{
            cake_type: true,
            active: type === activeType,
            pancake: type === 'КАПКЕЙКИ',
          }"
          @click="changeType(type)"
        >
          {{ type }}
        </p>
      </v-row>

      <VSpacing :size="52"></VSpacing>

      <!-- Cake Card -->
      <v-col class="container">
        <v-row justify="beetwen">
          <VCakeCard
            v-for="cake in cakes"
            :key="cake.name"
            :image="cake.image"
            :name="cake.name"
            :price="cake.price"
            :id="cake.id"
          ></VCakeCard>
        </v-row>
      </v-col>
    </v-container>

    <!-- Promo Banner -->
    <v-row justify="center">
      <img src="@/assets/images/center.svg" alt="" style="width: 98%" />
    </v-row>

    <VSpacing :size="58"></VSpacing>

    <!-- Cake Layers -->
    <div class="cake-layers">
      <v-row justify="center">
        <img src="@/assets/images/cake_layers.svg" alt="" style="width: 90%" />
      </v-row>
    </div>

    <VSpacing :size="38"></VSpacing>

    <v-container>
      <VRow justify="center">
        <img src="@/assets/images/sales.svg" alt="" />
      </VRow>

      <VSpacing :size="103"></VSpacing>

      <v-row justify="beetwen">
        <img src="@/assets/images/promo1.svg" alt="" width="600" />
        <img src="@/assets/images/promo2.svg" alt="" width="600" />
      </v-row>

      <VHomeAbout />
    </v-container>
  </v-layout-default>
</template>

<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VSpacing from "@/components/VSpacing.vue";
import VHeader from "@/components/VHeader.vue";
import VCakeCard from "@/components/VCakeCard.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
import { computed, ref } from "vue";

const cakeTypes = ["КЛАССИКА", "СВАДЕБНЫЕ", "КАПКЕЙКИ"];
let activeType = ref("КЛАССИКА");

function changeType(newType) {
  activeType.value = newType;
}

const cakes = computed(() => {
  if (activeType.value === "КЛАССИКА") {
    return [
      {
        name: "Торт апельсин-крем",
        price: "1 599 ₽",
        image: "src/assets/images/cake1.svg",
        id: 1,
      },
      {
        name: "Торт вишня-смородина",
        price: "1 599 ₽",
        image: "src/assets/images/cake2.svg",
        id: 2,
      },
      {
        name: "Торт клубника-сливки",
        price: "1 299 ₽",
        image: "src/assets/images/cake3.svg",
        id: 3,
      },
      {
        name: "Торт гранат-шоколад",
        price: "1 099 ₽",
        image: "src/assets/images/cake4.svg",
        id: 4,
      },
    ];
  } else if (activeType.value === "СВАДЕБНЫЕ") {
    return [
      {
        name: "Торт сникерс",
        price: "2 999 ₽",
        image: "src/assets/images/weddingcake1.svg",
        id: 9,
      },
      {
        name: "Торт фисташка-малина",
        price: "3 699 ₽",
        image: "src/assets/images/weddingcake2.svg",
        id: 10,
      },
      {
        name: "Торт печенье-персик",
        price: "3 499 ₽",
        image: "src/assets/images/weddingcake3.svg",
        id: 11,
      },
      {
        name: "Торт гранат-шоколад",
        price: "3 699 ₽",
        image: "src/assets/images/weddingcake4.svg",
        id: 12,
      },
    ];
  } else {
    return [
      {
        name: "Капкейки конфитюр",
        price: "1 299 ₽",
        image: "src/assets/images/pancake1.svg",
        id: 17,
      },
      {
        name: "Капкейки вишня",
        price: "1 599 ₽",
        image: "src/assets/images/pancake2.svg",
        id: 18,
      },
      {
        name: "Капкейки орео",
        price: "1 299 ₽",
        image: "src/assets/images/pancake3.svg",
        id: 19,
      },
      {
        name: "Капкейки лимонные",
        price: "1 199 ₽",
        image: "src/assets/images/pancake4.svg",
        id: 20,
      },
    ];
  }
});
</script>

<style>
.sales {
  width: 200px;
}

.cake-layers {
  padding-left: 130px;
}

.cake_type.active {
  text-decoration: underline;
}

.cake_type {
  font-size: 16px;
  padding-right: 15px;
  font-family: "Jost";
  cursor: pointer;
}

.padding {
  padding-left: 5px;
}
</style>
