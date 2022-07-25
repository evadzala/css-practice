<template>
  <!-- <div class="table m-auto"> -->
  <div class="w-[600px] h-[600px] inline-block bg-[#257]">
    <!-- <div class="outside-circle red"> -->
    <div
      class="flex justify-center items-center my-[10px] mx-auto relative w-60 h-60 border divide-solid rounded-full animate-[rolling_4s_linear_infinite] hover:animate-rolling"
    >
      <div class="square square-center red"></div>
      <!-- <div
        v-for="i in 4"
        :key="`square-${i + 1}`"
        :class="`square-${i}`"
        class="square"
      ></div> -->
    </div>
    <div
      class="outside-circle animate-[rolling_reverse_4s_linear_infinite] hover:animate-[rolling_reverse_1s_linear_infinite]"
    >
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
}

.square {
  width: 120px;
  height: 120px;
  border: 1px black solid;
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

@keyframes rolling_reverse {
  0%{
    transform: rotate(0);
  }
  50%{
    transform: rotate(-180deg);
  }
  100%{
    transform: rotate(-360deg);
  }
}

.outside-circle .red{
  background-color: red;
}
</style>
