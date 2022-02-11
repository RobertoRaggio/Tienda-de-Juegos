<template>
  <div>
    <h1>Total</h1>
    <section>
      <div class="input-group mb-3">
        <span class="input-group-text" id="formMontoTotalVentas">Total Amount</span>
        <input
          type="text"
          class="form-control"
          v-model="getTotalAmount"
          aria-describedby="formMontoTotalVentas"
          disabled
        />
      </div>
    </section>
    <section>
      <SalesList :sales="sales" />
    </section>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import SalesList from "@/components/SalesList";
export default {
  name: "Total",
  components: {
    SalesList,
  },
  computed: {
    ...mapState(["sales"]),
    ...mapGetters(["getTotalAmount"]),
  },
};
</script>

<style></style>