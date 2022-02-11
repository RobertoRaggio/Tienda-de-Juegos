<template>
  <div class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Code</th>
          <th scope="col">Name</th>
          <th scope="col">Date Sales</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venta, index) in ventas" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ venta.code }}</td>
          <td>{{ venta.name }}</td>
          <td>{{ venta.date_sales }}</td>
          <td>{{ venta.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "SalesList",
  props: {
    ventas: {
      type: [],
      default() {
        return [];
      },
    },
  },
};
</script>