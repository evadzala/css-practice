<template>
  <div class="container mx-auto text-center">
    <h1 class="text-3xl text-[#fa0] my-[3.75rem]">
      This is home page.
    </h1>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
export default {
  name: 'Home',
  components: { HelloWorld },
}
</script>
