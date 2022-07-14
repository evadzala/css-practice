<template>
  <div class="table m-auto">
    <div class="outside-circle">
      <div class="square square-center"></div>
      <div
        v-for="i in 4"
        :key="`square-${i + 1}`"
        :class="`square-${i}`"
        class="square"
      ></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.table {
  width: 500px;
  height: 500px;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  align-items: center;
}
.outside-circle {
  position: relative;
  width: 240px;
  height: 240px;
  border: 1px solid;
  border-radius: 100%;
}
.square {
  width: 120px;
  height: 120px;
  border: 1px solid;
  position: absolute;

  &-1 {
    left: 120px;
  }

  &-2 {
    top: 120px;
  }

  &-3 {
    top: 120px;
    left: 120px;
  }

  &-center {
    top: 14%;
    left: 14%;
    width: 169.7px;
    height: 169.7px;
    border: 1px solid red;
  }
}
.equilateral-triangle-positive {
  position: absolute;
  top: 80px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 200px 200px 200px 200px;
  border-color: red transparent transparent transparent;
}
.equilateral-triangle-negative {
  position: absolute;
  bottom: 80px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 120px 160px 120px;
  border-color: transparent transparent red transparent;
}
</style>
