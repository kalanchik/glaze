<!-- ProductPage.vue -->
<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VCatalogHeader from "@/components/VCatalogHeader.vue";
import VSpacing from "@/components/VSpacing.vue";
import VRow from "@/components/UI/VRow.vue";
import VHomeAbout from "@/components/VHomeAbout.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { CakesServices } from "@/services/CakeApiService";

const props = defineProps({
  productId: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
});
const route = useRoute();
const cake = ref({});
const productId = computed(() => props.productId || route.params.id);

const productImage = computed(
  () => props.productImage || route.params.productImage
);

const image = "/" + productImage.value;

onMounted(async () => {
  try {
    const response = await CakesServices.getCake(productId.value);
    cake.value = response;
    console.log(cake);
  } catch {}
});
</script>

<template>
  <VLayoutDefault>
    <VCatalogHeader></VCatalogHeader>
    <VContainer>
      <VSpacing :size="45"></VSpacing>
      <VRow class="row">
        <div class="container">
          <img
            :src="cake.image"
            :key="cake.img"
            alt=""
            width="902"
            height="600"
            class="product-image"
          />
        </div>
        <div class="product-info">
          <p class="product-type">{{ cake.type }}</p>
          <p class="product-name">{{ cake.name }}</p>
          <p class="product-desc">{{ cake.desc }}</p>
          <VRow>
            <img
              v-for="image in cake.icons"
              :key="image"
              :src="image"
              class="product-icon"
            />
          </VRow>
          <p class="product-info-text weight">вес</p>
          <p class="product-info-number">
            {{
              cake.weight +
              " кг" +
              "  " +
              "(на " +
              cake.peopleCount +
              " " +
              "человек)"
            }}
          </p>
          <p class="product-info-text">энергетическая ценность</p>
          <p class="product-info-number" v-if="cake.pfc">
            {{ " (на 100г): " + String(cake.pfc.sum) + " ккал" }}
          </p>
          <div class="pad"></div>
          <p class="product-info-text">белки</p>
          <p class="product-info-number" v-if="cake.pfc">
            {{ cake.pfc.protein + " г" }}
          </p>
          <div class="pad"></div>
          <p class="product-info-text">углеводы</p>
          <p class="product-info-number" v-if="cake.pfc">
            {{ cake.pfc.carb + " г" }}
          </p>
          <div class="pad"></div>
          <p class="product-info-text">жиры</p>
          <p class="product-info-number" v-if="cake.pfc">
            {{ cake.pfc.fat + " г" }}
          </p>
          <div class="order">
            <VRow>
              <p class="product-price">{{ cake.price }}</p>
              <p class="product-buy">В КОРЗИНУ</p>
            </VRow>
          </div>
        </div>
      </VRow>
    </VContainer>
    <VSpacing size="50" />
    <VHomeAbout></VHomeAbout>
  </VLayoutDefault>
</template>

<style scoped>
.row {
  display: flex;
}

.container {
  margin-left: 15px;
}
.product-image {
  object-fit: cover;
}
.product-info {
  margin-left: 37px;
  flex: 1;
  margin-right: 80px;
}
.product-type {
  font-family: "Jost";
  font-size: 36px;
  font-weight: 300;
  display: inline-block;
  margin-bottom: 0;
}
.product-name {
  margin-left: 8px;
  font-family: "Jost";
  font-size: 36px;
  font-weight: 400;
  color: #9d0000;
  font-style: italic;
  display: inline-block;
  margin-bottom: 0;
}
.product-desc {
  color: #9d0000;
  font-family: "Jost";
  font-size: 24px;
  font-weight: 300;
}
.product-icon {
  margin-right: 13px;
  margin-bottom: 31px;
}
.product-info-text {
  font-family: "Jost";
  color: #9d0000;
  font-size: 20px;
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 2px;
  margin-top: 2px;
}

.product-info-text.weight {
  margin-bottom: 16px;
}

.product-info-number {
  display: inline-block;
  font-size: 20px;
  font-family: "Jost";
  font-weight: 300;
  margin-bottom: 2px;
  margin-top: 2px;
}

.product-price {
  color: #9d0000;
  font-size: 28px;
  margin-right: 43px;
  font-family: "Jost";
}

.product-buy {
  margin-left: 43px;
  font-size: 18px;
  font-style: italic;
  background-color: #9d0000;
  margin: auto 0;
  padding: 2px 15px 2px 15px;
  border-radius: 100px;
  color: white;
  font-weight: 300;
  cursor: pointer;
  font-family: "Jost";
}
</style>
