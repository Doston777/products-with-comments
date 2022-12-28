<template>
  <v-row class="my-5 mx-8 d-flex justify-space-between">
    <v-col :cols="12" sm="6" md="4" lg="3" v-for="p in products" :key="p.id" class="py-2">
      <v-card class="pa-4 text-center mx-auto d-flex flex-column" elevation="5">
        <img class="thumb" :src="p.image" />
        <p class="ma-4 mt-auto text-truncate">{{ p.title }}</p>
        <v-btn color="success" class=" my-4 mt-auto"><router-link class="white--text text-decoration-none none" :to="`products/${p.id}`">View details</router-link></v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    products: [],
  }),
  methods: {
    async fetchProducts() {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => (this.products = data));
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss" scoped>
.thumb {
  max-width: 80%;
  margin: 0 auto;
  max-height: 120px;
}
.none {
  text-transform: none;
}
</style>
