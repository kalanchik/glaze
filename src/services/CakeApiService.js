import { api } from '@/utils';

export class CakesServices {
	static async getCakes() {
		return api.get("/cakes");
	}

	static async getCake(id) {
		const cakes = await api.get("/cakes");
		const cake = cakes.find(item => String(item.id) === id);
		return cake;
	}

	static async getCakesFromId(ids) {
		const cakes = await api.get("/cakes");
		const filteredCakes = cakes.filter(cake => ids.includes(cake.id));
		return filteredCakes;
	}
}