<template>
  <div>
    <h1>Search your Game</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formFiltroArial">Filter</span>
        <input
          type="text"
          class="form-control"
          placeholder="Ingrese filtro"
          v-model="filtro"
          aria-describedby="formFiltroArial"
        />
      </div>
    </section>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formCantJuegosRegis">
          Register Game
        </span>
        <input
          type="text"
          class="form-control"
          v-model="getJuegosRegistrados"
          aria-describedby="formCantJuegosRegis"
          disabled
        />
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formStockTotal">Total Stock Games</span>
        <input
          type="text"
          class="form-control"
          v-model="getStockTotal"
          aria-describedby="formStockTotal"
          disabled
        />
      </div>
    </section>
    <section>
      <ListGames :juegos="getJuegosByFilter" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import GamesList from "@/components/GamesList";
export default {
  name: "Search",
  components: { GamesList },
  computed: {
    ...mapState(["filtro"]),
    ...mapGetters(["getGamesRegister", "getStockTotal", "getGamesByFilter"]),
    /**
     * @description Two-way Computed Property
     * @link https://vuex.vuejs.org/guide/forms.html#two-way-computed-property
     */
    filtro: {
      get() {
        return this.$store.state.filter;
      },
      set(value) {
        this.$store.commit("SET_FILTER", value);
      },
    },
  },
};
</script>

<style></style>