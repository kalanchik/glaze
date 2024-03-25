import { ref, computed } from 'vue';
import { CartApiService } from '@/services';

export function useCart () {
    const cart = ref([]);

    const cartDelay = computed(() => cart.value.filter(item => item.delay));
    const cartNotDelay = computed(() => cart.value.filter(item => !item.delay));

    const cartTotalSum = computed(() => {
        return cart.value.reduce((acc, product) => {
            return acc += (product.price * product.quantity);
        }, 0);
    });

    const cartTotalCount = computed(() => {
        return cart.value.reduce((acc, product) => {
            return acc += product.quantity;
        }, 0);
    });

    function getCart () {
        CartApiService.getCart()
            .then(data => {
                cart.value = data;
            });
    }

    function onAddToCart (params) {
        CartApiService.addToCart(params).then(() => {
            alert('Товар добавлен успешно!')
        });
    }

    function onChangeCount (params) {
        CartApiService.changeCount(params)
            .then(() => {
                getCart();
            });
    }

    function onDelete (id) {
        CartApiService.delete(id)
            .then(() => {
                getCart();
            });
    }

    function onChangeDelay (params) {
        CartApiService.changeDelay(params)
            .then(() => {
                getCart();
            });
    }

    return {
        cartDelay,
        cartNotDelay,
        cartTotalSum,
        cartTotalCount,
        getCart,
        onAddToCart,
        onChangeCount,
        onDelete,
        onChangeDelay
    }
}