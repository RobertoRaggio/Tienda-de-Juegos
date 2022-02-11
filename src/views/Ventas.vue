<template>
  <div>
    <h1>Games Sales</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formCountProductsWithStock">
        Games Stock
        </span>
        <input
          type="text"
          class="form-control"
          v-model="getCountJuegosWithStock"
          aria-describedby="formCountProductsWithStock"
          disabled
        />
      </div>
    </section>
    <section>
      <ListGames :juegos="getListJuegosWithStock" cantSell />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GamesList from "@/components/GamesList";
export default {
  name: "sales",
  components: { GamesList },
  computed: {
    ...mapGetters(["getCountGamesWithStock", "getListGamesWithStock"]),
  },
};
</script>

<style></style>