<template>
  <div>
    <p class="text-center text-h4 my-2">Products</p>
    <NewComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import NewComponent from '@/components/NewComponent.vue'

  export default {
  name: 'HomeView',
  components: {
    NewComponent
  }
}
</script>
