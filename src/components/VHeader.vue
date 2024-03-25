<template>
  <header class="v-header">
    <v-container>
      <v-row align="center" justify="beetwen" no-gutters>
        <v-row>
          <v-col>
            <div class="logo">
              <v-logo />
            </div>
          </v-col>

          <v-col>
            <v-row justify="beetwen">
              <p class="nav_button">О НАС</p>
              <p class="nav_button">ДОСТАВКА</p>
              <router-link to="/catalog" class="route_button">
                <p class="nav_button">ТОРТЫ</p>
              </router-link>
              <router-link to="/kapcake" class="route_button">
                <p class="nav_button">КАПКЕЙКИ</p>
              </router-link>
              <p class="nav_button">АКЦИИ</p>
            </v-row>
          </v-col>
        </v-row>

        <v-row>
          <img src="../assets/icons/search.svg" alt="" class="nav_icon" />
          <router-link to="/basket" class="route_button">
            <img
              src="../assets/icons/shopping_cart.svg"
              alt=""
              class="nav_icon"
            />
          </router-link>
          <img src="../assets/icons/user.svg" alt="" class="nav_icon" />
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

const search = ref();

const router = useRouter();
const { isAuth, user } = useAuth();

function onSearch() {
  router.push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}
</script>

<style>
.route_button {
  text-decoration: none;
}

.nav_icon {
  padding-right: 26px;
  cursor: pointer;
}
.nav_button {
  padding-right: 10px;
  font-size: 16;
  font-weight: 400;
  font-family: "Jost";
  color: #330707;
}
.v-header {
  background-size: cover;
  height: 676px;
  width: 100%;
  background-image: url("../assets/images/appbar.svg");
}
</style>
