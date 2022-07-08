<template>
  <div class="container mx-auto text-center">
    <h1 class="text-3xl text-[#fa0] my-[3.75rem]">
      This is home page.
    </h1>
    <for-test :msg="testMsg" />
    <!-- <hello-world /> -->
  </div>
</template>

<script>
import { ref } from 'vue'
// import HelloWorld from '../components/HelloWorld.vue'
import ForTest from '@/components/forTest.vue'
export default {
  name: 'Home',
  components: { ForTest },
  setup () {
    const testMsg = ref('test')

    return {
      testMsg,
    }
  },
}
</script>
