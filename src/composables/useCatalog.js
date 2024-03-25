import { ref } from 'vue';
import { useAuth } from './useAuth';
import { CatalogApiService } from '@/services';

export function useCatalog () {
    const { user } = useAuth();

    const categories = ref([]);

    function getCatalog () {
        CatalogApiService.getCategories()
            .then(data => {
                categories.value = data;
            });
    }

    function addProduct (params) {
        CatalogApiService.addProduct({
            ...params,
            userId: user.value.id,
            isFavorite: false
        })
    }

    return {
        categories,
        getCatalog,
        addProduct
    }
}