import Vue from 'vue'
import Vuex from 'vuex'

import games from '@/assets/games';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    games,
    sales: [],
    filter: '',
  },
  mutations: {
    SET_FIlTER(state, payload) {
      state.filter = payload;
    },
    SET_GAMES(state, payload) {
      state.games = payload;
    },
    ADD_SALE(state, payload) {
      state.sales = payload;
    }
  },
  actions: {
    sellOneItemProduct({ commit, state }, indexProduct) {
      setTimeout(() => {
        const game = {
          ...state.games[indexProduct],
          stock: state.games[indexProduct].stock - 1,
        };

        const newGames = [
          ...state.games.slice(0, indexProduct),
          game,
          ...state.games.slice(indexProduct + 1)
        ];
        commit('SET_GAMES', newGames);

        setTimeout(() => {
          const sale = {
            code: game.code,
            name: game.name,
            price: game.price,
            hora_venta: new Date().toLocaleString(),
          };
          const ventas = [...state.sale];
          ventas.push(venta);
          commit('ADD_SALE', sale);
          alert('Sale Succsess');
        }, 1000);
      }, 2000)
    },
  },
  getters: {
    getGamesRegister: ({ games }) => {
      return games.length;
    },
    getStockTotal: ({ games }) => {
      return games.reduce(((previusValue, currentValue) => previusValue + currentValue.stock), 0);
    },
    getGamesByFilter: ({ games, filtro }) => {
      return games.filter((game) => {
        for (const word of filtro) {
          if (game.code.indexOf(word) === -1) {
            return false;
          }
        }
        return true;
      });
    },
    getCountGamesWithStock: ({ games }) => {
      return games
        .filter((game) => game.stock > 0)
        .length;
    },
    getListGamesWithStock: ({ games }) => {
      return games
        .filter((game) => game.stock > 0);
    },
    getTotalAmount: ({ ventas }) => {
      return ventas.reduce(((previusValue, currentValue) => previusValue + currentValue.precio), 0);
    }
  },
})