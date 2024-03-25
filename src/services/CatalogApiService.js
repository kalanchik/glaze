import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/catalog');
    }

    static getCategory (id, params) {
        return api.get(`/products?categoryId=${id}`, params);
    }

    static getProduct (id) {
        return api.get(`/products/${id}`);
    }

    static addProduct (params) {
        return api.post('/products', params);
    }

    static getUserProducts (userId) {
        return api.get(`/my-products/${userId}`);
    }
}