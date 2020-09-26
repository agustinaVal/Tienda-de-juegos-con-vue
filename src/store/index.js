import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		juguetes: [
			{
				id: '001',
				nombre: 'seiko',
				stock: 100,
				precio: 30000,
			},
			{
				id: '002',
				nombre: 'fifa 21',
				stock: 100,
				precio: 25000,
			},
			{
				id: '003',
				nombre: 'gears of war 4',
				stock: 100,
				precio: 15000,
			},
			{
				id: '004',
				nombre: 'mario tennis aces',
				stock: 100,
				precio: 35000,
			},
			{
				id: '005',
				nombre: 'bloodborne',
				stock: 100,
				precio: 10000,
			},
			{
				id: '006',
				nombre: 'forza horizon 4',
				stock: 100,
				precio: 2000,
			},
		],
	},
	mutations: {
		DESCONTAR(state, payload) {
			state.juguetes == state.juguetes.map((e) => {
					if (e.id == payload.trim()) {
						e.stock--;
					}
					return e;
				});
		},
	},
	actions: {
		descontar({ commit }, payload) {
			commit('DESCONTAR', payload);
		},
	},
});
