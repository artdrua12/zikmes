<template>
  <div class="info">
    Количество пользователей Git, в логине котрых встречаются введенные символы:
    {{ searchUsers }}
  </div>
</template>
  
  <script>
export default {
  name: "zikmes-info",
  data() {
    return {};
  },
  computed: {
    searchUsers() {
      return this.$store.getters.get("searchUsers");
    },
  },
  methods: {},
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
.info {
  position: fixed;
  top: 19px;
  padding: 10px 30px;
  min-width: 0px;
  min-height: 0px;
  background-color: rgba(245, 245, 220, 0.65);
}
</style>
  