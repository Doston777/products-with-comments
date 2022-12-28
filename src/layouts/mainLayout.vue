<template>
  <v-app>
    <v-app-bar
      app
      color="white darken-5"
      clipped-right
      shadow-color="white"
      elevation="1"
    >
      <!-- <v-app-bar-nav-icon
        @click="navigator = !navigator"
        color="black"
      ></v-app-bar-nav-icon> -->
      <div>Brand</div>
      <v-spacer></v-spacer>
      <div>
        <v-btn color="black" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn color="black" icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn color="black" icon @click="$store.state.token.length < 1 ? $router.push('/login') : ($store.state.token = '', $router.push('/login'))">
          <v-icon>{{ $store.state.token.length > 0 ? 'mdi-dots-vertical' : 'mdi-account-circle'}}</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!-- <v-navigation-drawer
      v-model="navigator"
      app
      fixed
      permament
      class="d-flex sidebar"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Online Shop
          </v-list-item-title>
          <v-list-item-subtitle>
            low prices
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-shape-outline</v-icon>  
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>
                Category
              </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    navigator: false,
  }),
  computed: {
    navig: {
      get: function () {
        if (this.$vuetify.breakpoint.mdAndDown) {
          return !this.navigator;
        } else {
          return this.navigator;
        }
      },
      set: function () {
        this.navigator = !this.navigator;
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
