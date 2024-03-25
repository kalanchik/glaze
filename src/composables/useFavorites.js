import { FavoritesApiService } from '@/services';

export function useFavorites () {
    function onToggleFavorites (params) {
        FavoritesApiService.toggle(params);
    }

    return {
        onToggleFavorites
    };
}