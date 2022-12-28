<template>
  <div class="mx-16 text-center my-8">
    <v-row align="center" justify="center">
      <v-col :cols="6">
        <img :src="product.image" class="img" />
      </v-col>
      <v-col :cols="6">
        <p class="text-h4">{{ product.title }}</p>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>
        <v-rating
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-start-half-full"
          length="5"
          :value="rating"
          hover
        ></v-rating>
      </v-col>
    </v-row>
    <div class="d-flex mx-auto justify-space-around mt-8">
      <div v-if="$store.state.token">
        <v-btn @click="dialog = true" color="success">Write comment</v-btn>
        <v-dialog
          v-model="dialog"
          scrollable
          persistent
          :overlay="false"
          max-width="500px"
          transition="dialog-transition"
        >
          <v-card class="">
            <v-card-title class="pa-4 pb-0 text-body-2">
              <p>Write comments to {{ product.title }}</p>
            </v-card-title>
            <v-card-text class="d-flex justify-center align-center">
              <p class="mt-4">Your rate:</p>
              <v-rating
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-start-half-full"
                length="5"
                :value="rating"
                hover
              ></v-rating>
            </v-card-text>
            <v-form class="pa-4">
              <v-row>
                <v-col>
                  <v-text-field
                    v-model="name"
                    outlined
                    dense
                    name="name"
                    label="Your name"
                    id="name"
                    :rules="[rules.required]"
                  ></v-text-field>
                  <v-textarea
                    v-model="comment"
                    outlined
                    dense
                    name="comment"
                    label="Comment"
                    id="comment"
                    :rules="[rules.required]"
                    @keyup.enter="sendMessage"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
            <v-card-actions>
              <v-btn icon color="black" @click="dialog = false"
                ><v-icon>mdi-close</v-icon></v-btn
              >
              <v-spacer></v-spacer>
              <v-btn icon color="info" @click="sendMessage"
                ><v-icon>mdi-send</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div>
        <v-btn text color="info" @click="show = !show">{{ show == false ? 'Show comments' : 'Hide comments'}}</v-btn>
      </div>
    </div>
    <p v-if="show" class="text-h4 mt-4 font-weight-bold">Comments</p>
    <div class="mt-8" v-if="show">
      <v-card class="text-start my-4 rounded-xl" color="#999" v-for="c in filteredComments" :key="c.id">
        <v-card-text >
          <div class="mb-2">
            <h4>{{ c.email }}</h4>
          </div>
          <div class="d-flex align-center">
            <v-avatar class="mr-4">
              <img
                :src="`https://randomuser.me/api/portraits/men/${c.id}.jpg`"
                alt="John"
              />
            </v-avatar>
            <p>{{ c.body }}</p>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {},
    dialog: false,
    name: "",
    comment: "",
    comments: [],
    rules: {
      required: (value) => !!value || "Required",
    },
    show: false
  }),
  computed: {
    id() {
      return this.$route.params.id;
    },
    filteredComments() {
      return this.comments.filter(comment => comment.postId === this.product.id)
    },
    rating() {
      return this.product.rating?.rate
    }
  },
  methods: {
    async fetchProduct() {
      this.product = await fetch(
        `https://fakestoreapi.com/products/${this.id}`
      ).then((res) => res.json());
    },
    sendMessage() {
      this.filteredComments.push({email: this.name, body: this.comment, id: this.filteredComments.length + 1})
      this.dialog =  false
    },
    async fetchComments() {
      this.comments = await fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(res => res.json())
    }
  },
  mounted() {
    this.fetchProduct()
    this.fetchComments()
  },
};
</script>

<style scoped>
.img {
  max-width: 50%;
  max-height: 800px;
  margin: 0 auto;
}
</style>
