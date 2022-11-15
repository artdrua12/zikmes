<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div v-if="snackbar.run" class="snackbar">{{ snackbar.text }}</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.get("message");
      },
      set() {
        this.$store.commit("setMessage", { text: "", run: false });
      },
    },
  },
  watch: {
    snackbar() {
      if (this.snackbar.run)
        setTimeout(
          () => this.$store.commit("setMessage", { text: "", run: false }),
          2500
        );
    },
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  background-image: url(http://35photo.ru/photobank/1/8873.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
  margin: 0px;
  padding: 0px;
}
.snackbar {
  position: fixed;
  padding: 2px 20px;
  bottom: 30px;
  right: 30px;
  min-width: 250px;
  min-height: 70px;
  background: yellow;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
