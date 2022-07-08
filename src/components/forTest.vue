<template>
  <div class="test1">
    {{ msg }}
  </div>
  <div class="test2">
    {{ testValue }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    msg: {
      type: String,
      default: null,
    },
  },
  setup (props) {
    const testValue = ref(props.msg + 1)
    return {
      testValue,
    }
  },
}
</script>

<style lang="scss" scoped>
.test1 {
  font-size: 3rem;
}
</style>
