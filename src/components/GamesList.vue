<template>
  <div class="table-responsive">
    <table v-if="juegos.length > 0" class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Code</th>
          <th scope="col">Name</th>
          <th scope="col">Available Stock</th>
          <th scope="col">Price</th>
          <th v-if="cantSell" scope="col">Sell</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(games, index) in games"
          :key="index"
          :class="getBgColor(games.color)"
        >
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ games.code }}</td>
          <td>{{ games.name }}</td>
          <td>{{ games.stock }}</td>
          <td>{{ games.price }}</td>
          <th v-if="cantSell" scope="col">
            <button
              id="btn-sell-product"
              class="btn btn-dark"
              @click="sellOneItemProduct(index)"
            >
              Sell
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "GamesList",
  props: {
    games: {
      type: [],
      default() {
        return [];
      },
    },
    cantSell: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  methods: {
    ...mapActions(["sellOneItemProduct"]),
    getBgColor(color) {
      switch (color) {
        case "red":
          return "bg-danger";
        case "blue":
          return "bg-primary";
        case "green":
          return "bg-success";
        case "yellow":
          return "bg-warning";
        default:
          return "bg-info";
      }
    },
  },
};
</script>