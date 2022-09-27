<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->

  <h3 v-if="RefObject.Toggle">{{ RefObject.MainGoal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="ToggleBtn">{{ RefObject.ToggleText }}</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
//import { ref } from 'vue';
import { reactive } from 'vue';
export default {
  setup() {
    //<!-- => Reactive Object -->
    const RefObject = reactive({
      MainGoal: 'improve as a webdeveloper and get a job :D',
      ToggleText: 'hide',
      Toggle: true,
    });
    function ToggleBtn() {
      RefObject.Toggle = !RefObject.Toggle;
      if (RefObject.Toggle) {
        RefObject.ToggleText = 'hide';
      } else {
        RefObject.ToggleText = 'show';
      }
    }
    return { RefObject, ToggleBtn };

    // <!-- => Ref Object -->
    // const RefObject = ref({
    //   MainGoal: 'improve as a webdeveloper and get a job :D',
    //   ToggleText: 'hide',
    //   Toggle: true,
    // });
    // function ToggleBtn() {
    //   RefObject.value.Toggle = !RefObject.value.Toggle;
    //   if (RefObject.value.Toggle) {
    //     RefObject.value.ToggleText = 'hide';
    //   } else {
    //     RefObject.value.ToggleText = 'show';
    //   }
    // }
    // return { RefObject, ToggleBtn };
    //
    //
    //
    //
    // <!-- => Separate refs -->
    // const MainGoal = ref('improve as a webdeveloper and get a job :D');
    // const ToggleText = ref('hide');
    // const Toggle = ref(true);
    // function ToggleBtn() {
    //   Toggle.value = !Toggle.value;
    //   if (Toggle.value) {
    //     ToggleText.value = 'hide';
    //   } else {
    //     ToggleText.value = 'show';
    //   }
    // }
    // return {
    //   MainGoal,
    //   Toggle,
    //   ToggleText,
    //   ToggleBtn,
    // };
  },

  // <!-- Task 4: Also solve the assignment with the Options API -->
  // data() {
  //   return {
  //     MainGoal: 'improve as a webdeveloper and get a job :D',
  //      ToggleText:'hide',
  //     Toggle: true,
  //   };
  // },
  // methods: {
  //   ToggleBtn() {
  //     this.Toggle = !this.Toggle;
  //      if(this.Toggle){
  //       this.ToggleText = 'hide'
  //}else{
  // this.ToggleText = 'show'
  //}
  //   },
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
