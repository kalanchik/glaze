<template>
  <v-layout-default>
    <v-container>
        <VSpacing :size="101" ></VSpacing>
        <v-col>
          <v-row justify="center">
            <img src="../../assets/icons/popular_banner.svg" alt="">
          </v-row>
        </v-col>
        <VSpacing :size="28"></VSpacing>
        <v-col>
          <v-row justify="center" >
            <p class="cake_type active">
              Классика
            </p>
            <p class="cake_type">
              Свадебные
            </p>
            <p class="cake_type pancake">
              Капкейки
            </p>
          </v-row>
        </v-col>
        <VSpacing :size="52"></VSpacing>
        <v-col class="container">
          <v-row justify="beetwen">
            <div class="cake-card">
              <img src="@/assets/images/cake1.svg" class="cake-image" />
              <div class="cake-details">
                <p class="cake-name">Торт апельсин-крем</p>
                <v-row>
                  <p class="cake-price">1 599 ₽</p>
                  <img src="../../assets/images/shopping_bag.svg" alt="" class="cake-card-icon">
                </v-row>
              </div>
            </div>
            <div class="cake-card">
              <img src="@/assets/images/cake2.svg" class="cake-image" />
              <div class="cake-details">
                <p class="cake-name">Торт вишня-смородина</p>
                <v-row>
                  <p class="cake-price">1 599 ₽</p>
                  <img src="../../assets/images/shopping_bag.svg" alt="" class="cake-card-icon">
                </v-row>
              </div>
            </div>
            <div class="cake-card">
              <img src="@/assets/images/cake3.svg" class="cake-image" />
              <div class="cake-details">
                <p class="cake-name">Торт клубника-сливки</p>
                <v-row>
                  <p class="cake-price">1 299 ₽</p>
                  <img src="../../assets/images/shopping_bag.svg" alt="" class="cake-card-icon">
                </v-row>
              </div>
            </div>
            <div class="cake-card">
              <img src="@/assets/images/cake1.svg" class="cake-image" />
              <div class="cake-details">
                <p class="cake-name">Торт апельсин-крем</p>
                <v-row>
                  <p class="cake-price">1 599 ₽</p>
                  <img src="../../assets/images/shopping_bag.svg" alt="" class="cake-card-icon">
                </v-row>
              </div>
            </div>
          </v-row>
        </v-col>
        <v-row justify="center">
          <img src="../../assets/images/center.svg" alt="">
        </v-row>
        <VSpacing :size="58"></VSpacing>
        <v-row justify="center" class="cake-layers">
          <img src="../../assets/images/cake_layers.svg" alt="">
        </v-row>
        <VSpacing :size="38"></VSpacing>
        <v-row justify="center">
          <img src="../../assets/images/sales.svg" alt="">
        </v-row>
        <VSpacing :size="103"></VSpacing>
        <v-row justify="beetwen">
          <img src="../../assets/images/promo1.svg" alt="" width="600">
          <img src="../../assets/images/promo2.svg" alt="" width="600">
        </v-row>
    </v-container>
  </v-layout-default>
</template>

<style>

.cake-layers {
  padding-left: 130px;
}


.cake-card {
  display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .cake-image {
    width: 300px;
    height: 268px;
    object-fit: cover;
  }
  
  .cake-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .cake-name {
    font-size: 18px;
    color: #9D0000;
    font-weight: 300;
  }
  
  .cake-price {
    font-size: 18px;
    font-weight: 500;
    color: #9D0000;
  }

  .cake-card-icon {
    padding-left: 10px;
    padding-right: 20px;
  }

  .cake_type.pancake {
    background-color: #9D0000;
    border-radius: 100px;
    color: white;
    padding-left: 12px;
    padding-right: 12px;
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .cake_type.active {
    text-decoration: underline;
  }

  .cake_type {
    font-size: 16px;
    padding-right: 15px;
  }

  .sizedbox {
    height: 101px;
  }
  .padding {
    padding-left: 5px;
  }
</style>

<script setup>
    import { ref } from 'vue';
    import { useRoute } from "vue-router";
    import { useCart } from '@/composables/useCart';
    import { useCatalogCategory } from '@/composables/useCatalogCategory';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';
    import VSpacing from '@/components/VSpacing.vue';
    import VCakeCard from '@/components/VCakeCard.vue';

    const route = useRoute();

    const filter = ref({
      brand: '',
      color: ''
    });

    const { products, getProductsCategory } = useCatalogCategory();
    const { onAddToCart } = useCart();

    getProductsCategory(route.params.category, filter.value);

    function onFilter () {
      getProductsCategory(route.params.category, filter.value);
    }
</script>