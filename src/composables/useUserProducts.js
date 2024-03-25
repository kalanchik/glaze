import { ref } from 'vue';
import { CatalogApiService } from '@/services';
import { useAuth } from './useAuth';

export function useUserProducts () {
    const { user } = useAuth();

    const products = ref([]);

    function getUserProducts () {
        CatalogApiService.getUserProducts(user.value.id)
            .then(data => {
                products.value = data;
            });
    }

    return {
        products,
        getUserProducts
    }
}