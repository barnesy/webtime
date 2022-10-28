<template>
  <div>

    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="300px">

      <path id="path"
        class="poly"
        :d="path"
        fill="transparent"
        stroke="#EEE"
        :stroke-dasharray="dashLength"
        stroke-dashoffset="10"
        stroke-miterlimit="10"
        :stroke-width="stroke">

        <animate
          :dur="duration + 's'"
          attributeName="stroke-dashoffset"
          values="0;2037"
          calcMode="linear"
          repeatCount="indefinite"
          />
      </path>

      <circle r="3" fill="#EEE">
        <animateMotion
          :dur="duration + 's'"
          repeatCount="indefinite"
          :path="path" />
      </circle>

    </svg>

    {{duration}}
    <input type="range" v-model="duration">
    <input type="range" v-model="stroke">
    <input type="range" v-model="dashLength">

  </div>
</template>

<script>

export default {
  name: "Animation",
  data() {
    return {
      dashLength:10,
      duration: 10,
      stroke: 1
    }
  },
  computed: {
    path(){
      return "M100,50A50,50,0,1,1,50,0,50,50,0,0,1,100,50ZM50,29.33c-27.61,0-50,8.46-50,18.91S22.39,67.15,50,67.15s50-8.47,50-18.91S77.61,29.33,50,29.33Z"
    }
  },
};

</script>


<style lang="scss" scoped>
  @keyframes dash {
    to {
      stroke-dashoffset: 1000;
    }
  }

  .block {
    width: 60rem;
    height: 60rem;
    margin-top: 12rem;
    background: rgb(255, 255, 255);
    background-repeat: repeat;
    background-size: 1%;
    margin: 0 auto;
  }
</style>
