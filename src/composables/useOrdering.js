import { OrdersApiService, CartApiService } from '@/services';
import { useAuth } from './useAuth';
 
export function useOrdering () {
    const { user } = useAuth();

    function createOrder (params) {
        CartApiService.getCart()
            .then((data) => {
                OrdersApiService.createOrder({
                    ...params,
                    products: data,
                    userId: user.value.id
                });
            })
    }

    return {
        createOrder
    };
}