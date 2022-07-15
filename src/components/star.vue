<template>
  <div class="table m-auto">
    <div class="outside-circle red">
      <div class="square square-center red"></div>
      <!-- <div
        v-for="i in 4"
        :key="`square-${i + 1}`"
        :class="`square-${i}`"
        class="square"
      ></div> -->
    </div>
    <div class="outside-circle">
      <div class="equilateral-triangle equilateral-triangle-positive"></div>
      <div class="equilateral-triangle equilateral-triangle-negative"></div>
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
  display: inline-block;
}
.outside-circle {
  margin: 10px auto 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 240px;
  height: 240px;
  border: 1px solid;
  border-radius: 100%;

  &:hover {
    animation: rolling 4s linear infinite;
  }
}

.outside-circle:hover {
  animation: rolling 4s linear infinite;
}
.square {
  width: 120px;
  height: 120px;
  border: 1px black solid;
  position: absolute;

  // &.red {
  //   background-color: red;
  // }

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
    width: 169.7px;
    height: 169.7px;
    border: 1px solid red;
  }
}

.equilateral-triangle {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 103.923px 180px 103.923px;
  border-color: transparent transparent #007bff transparent;

  &-positive {
    top: 0;
  }
  &-negative {
    bottom: 0;
    transform: rotate(180deg);
  }
}

@keyframes rolling{
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(180deg);
  }
  100%{
    transform: rotate(360deg);
  }
}

.outside-circle .red{
  background-color: red;
}

// .outside-circle.red{
//   background-color: red;
// }
</style>
