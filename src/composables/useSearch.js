import { ref } from 'vue'
import { SearchApiService } from '@/services'

export function useSearch () {
    const products = ref([]);
    const isLoading = ref(false);

    function getSearch (query) {
        isLoading.value = true;

        SearchApiService.getSearch(query)
            .then(data => {
                products.value = data;

                isLoading.value = false;
            });
    }

    return {
        products,
        isLoading,
        getSearch
    }
}