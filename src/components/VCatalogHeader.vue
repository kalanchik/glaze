<template>
  <header class="v-catalog-header">
    <v-container>
      <v-row align="center" justify="beetwen" no-gutters>
        <v-row align="center">
          <div class="logo">
            <v-col>
              <router-link to="/">
                <v-logo />
              </router-link>
            </v-col>
          </div>

          <v-row justify="beetwen" align="center">
            <span class="nav_button">О НАС</span>
            <span class="nav_button">ДОСТАВКА</span>
            <router-link to="/catalog" class="route_button">
              <span class="nav_button">ТОРТЫ</span>
            </router-link>
            <router-link to="/kapcake" class="route_button">
              <span class="nav_button">КАПКЕЙКИ</span>
            </router-link>
            <span class="nav_button">АКЦИИ</span>
          </v-row>
        </v-row>

        <v-row>
          <img src="@/assets/icons/search.svg" alt="" class="nav_icon" />
          <img src="@/assets/icons/shopping_cart.svg" alt="" class="nav_icon" />
          <img src="@/assets/icons/user.svg" alt="" class="nav_icon" />
        </v-row>
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VLogo from "@/components/VLogo.vue";
import VSidebarMenu from "@/components/VSidebarMenu.vue";
import VContainer from "@/components/VContainer.vue";
</script>

<style>
.logo {
  margin-right: 100px;
}

.nav_icon {
  padding-right: 26px;
}
.nav_button {
  padding-right: 10px;
  font-size: 16;
  font-weight: 400;
  font-family: "Jost";
  color: #330707;
}
</style>
