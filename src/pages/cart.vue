<template>
    <v-layout-default>
        <v-container>
            <div>
                Кол-во товаров: {{ cartTotalCount }}
            </div>

            <div>
                Сумма товаров: {{ cartTotalSum }}р.
            </div>

            <template v-if="cartNotDelay.length">
                <h5>Товары</h5>
                <v-cart-card 
                    v-for="cartItem in cartNotDelay"
                    :id="cartItem.id"
                    :title="cartItem.title"
                    :price="cartItem.price"
                    :quantity="cartItem.quantity"
                    :image="cartItem.image"
                    :delay="cartItem.delay"
                    @change-count="onChangeCount"
                    @change-delay="onChangeDelay"
                    @delete="onDelete"
                />
            </template>

            <template v-if="cartDelay.length">
                <h5>Отложенные товары</h5>
                <v-cart-card 
                    v-for="cartItem in cartDelay"
                    :id="cartItem.id"
                    :title="cartItem.title"
                    :price="cartItem.price"
                    :quantity="cartItem.quantity"
                    :image="cartItem.image"
                    :delay="cartItem.delay"
                    @change-count="onChangeCount"
                    @change-delay="onChangeDelay"
                    @delete="onDelete"
                />
            </template>

            <router-link to="/ordering">
                Перейти к оформлению
            </router-link>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import { useCart } from '@/composables';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import VCartCard from '@/components/VCartCard.vue';

    const { 
        cartDelay,
        cartNotDelay,
        cartTotalCount, 
        cartTotalSum, 
        getCart, 
        onChangeCount, 
        onChangeDelay, 
        onDelete 
    } = useCart();

    getCart();
</script>