<template>
  <div>

    <Split>
      <template #image>
        <h2>Path</h2>

        <input type="text" v-model="color" />

        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="200">
          <path id="path"
            class="poly"
            :d="path"
            fill="transparent"
            :stroke="color"
            :stroke-dasharray="dashLength"
            stroke-dashoffset="10"
            stroke-miterlimit="10"
            stroke-linecap="round"
            :stroke-width="stroke">

            <animate
              :dur="duration + 's'"
              attributeName="stroke-dashoffset"
              values="0;2037"
              calcMode="linear"
              repeatCount="indefinite"
              />
          </path>

        </svg>
      </template>
      <template>
        <h2>Object</h2>
        <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="200">

          <circle r="3" :fill="color">
          </circle>
        </svg>
      </template>
    </Split>

    <PageSection padding="6rem">
      {{duration}}
      <input type="range" v-model="duration">
      <input type="range" v-model="stroke">
      <input type="range" v-model="dashLength">

      <h2>Combined</h2>

      <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 110 110" width="200">

        <path id="path"
          class="poly"
          :d="path"
          fill="transparent"
          :stroke="color"
          :stroke-dasharray="dashLength"
          stroke-dashoffset="10"
          stroke-miterlimit="10"
          stroke-linecap="round"
          :stroke-width="stroke">

          <animate
            :dur="duration + 's'"
            attributeName="stroke-dashoffset"
            values="0;2037"
            calcMode="linear"
            repeatCount="indefinite"
            />
        </path>

        <circle r="6" :fill="color">
          <animateMotion
            :dur="duration + 's'"
            repeatCount="indefinite"
            :path="path" />
        </circle>

      </svg>
    </PageSection>

  </div>
</template>

<script>

export default {
  name: "Animation",
  data() {
    return {
      dashLength:10,
      duration: 40,
      stroke: 1,
      color: "#EEE"
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
  svg {
    margin: 6rem;
  }

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
