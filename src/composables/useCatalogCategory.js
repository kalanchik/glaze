import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    function getProductsCategory (id, params) {
        CatalogApiService.getCategory(id, params)
            .then(data => {
                products.value = data;
            });
    }

    return {
        products,
        getProductsCategory
    }
}