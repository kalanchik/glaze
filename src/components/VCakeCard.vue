<template>
  <div class="VCakeCard">
    <div class="cake-card">
      <router-link :to="{ name: 'product', params: { id: id } }">
        <img :src="image" class="cake-image" />
      </router-link>
      <div class="cake-details">
        <p class="cake-name">{{ name }}</p>
        <v-row>
          <p class="cake-price">{{ price }}</p>
          <img
            src="@/assets/images/shopping_bag.svg"
            alt=""
            class="cake-card-icon"
          />
        </v-row>
      </div>
    </div>
  </div>
</template>

<script setup>
import VRow from "./UI/VRow.vue";
const props = defineProps({
  image: {
    type: String,
  },
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
});
</script>

<style scoped>
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
  color: #9d0000;
  font-weight: 300;
  font-family: "Jost";
}

.cake-price {
  font-size: 18px;
  font-weight: 500;
  font-family: "Jost";
  color: #9d0000;
}

.cake-card-icon {
  padding-left: 10px;
  padding-right: 20px;
  cursor: pointer;
}
</style>
