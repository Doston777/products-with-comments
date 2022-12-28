<template>
  <div class="purple lighten-2">
    <div style="min-height: 100vh">
      <v-card max-width="400" class="full-centered mx-2 mt-16 mt-sm-0 mx-sm-0 light-blue lighten-5">
        <v-card-text class="text-center mx-auto">
          <div class="text-h4 blue--text text-center">Sign In</div>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              class="white mb-8"
              color=""
              v-model="login"
              name="login"
              label="Login"
              placeholder="mor_2314"
              id="login"
              outlined
              dense
              hide-details
            ></v-text-field>

            <v-text-field
              class="white mb-8"
              v-model="password"
              name="password"
              label="Password"
              placeholder="83r5^_"
              id="password"
              outlined
              dense
              hide-details
              :type="type"
              :append-icon="type == 'password' ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="type == 'password' ? type = 'text' : type = 'password'"
            ></v-text-field>
            <v-btn block @click="logIn" color="success">Login</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    data: () => ({
      login: '',
      password: '',
      type: 'password'
    }),
    methods: {
      async logIn() {
        const res = await axios.post('https://fakestoreapi.com/auth/login',
        {
          username: this.login,
          password: this.password
        })
        if (res.data.token) {
          this.$store.state.token = res.data.token
        }
        if (this.$store.state.token) this.$router.push("/")
      }
    }
  }
</script>

<style lang="scss" scoped>
@media (min-width:430px) {
  .full-centered {
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
  }
}
</style>