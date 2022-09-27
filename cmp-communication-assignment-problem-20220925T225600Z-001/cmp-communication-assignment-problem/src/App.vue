<template>
  <section>
    <ActiveUser :Name="Name" :Age="Age" />
    <div class="Inputs">
      <UserData type="text" v-model="Name" placeholder="John..." />
      <UserData type="number" v-model="Age" placeholder="19.." />
    </div>
  </section>
</template>

<script>
import ActiveUser from "./Components/ActiveUser.vue";
import UserData from "./Components/UserData.vue";
export default {
  components: { ActiveUser, UserData },
  data() {
    return {
      Name: "",
      Age: null,
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.Name {
  padding: 5px;
  text-align: center;
}
.div-style {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #970076;
  gap: 5px;
  border-radius: 5px;
}
.div-style h1 {
  font-size: 1.7rem;
  color: white;
}
.div-style h2 {
  font-size: 1.7rem;
  border-bottom: 4px solid #ccc;
  color: white;
}
.div-style h3 {
  color: white;
  font-size: 1.7rem;
}
.Inputs {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  gap: 20px;
}
</style>
