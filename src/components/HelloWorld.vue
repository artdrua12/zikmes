<template>
  <form class="myInput slope">
    <div class="myInput-field">
      <input type="text" v-model="field" А placeholder="Ваше номер ..." />
    </div>
    <div class="myInput-button">
      <font-awesome-icon icon="fa-solid fa-user-secret" class="icon" />
      <input type="button" value="заказать" @click="onClick" />
    </div>
  </form>
</template>

<script>
export default {
  name: "zikmes-app",
  data() {
    return {
      field: "",
      visible: 20,
      page: 0,
    };
  },
  methods: {
    async onClick() {
      let check = this.check();
      if (check) {
        await this.search();
      } else {
        this.$store.commit("setMessage", {
          text: "Заполните поле 'Ваш номер'",
          run: true,
        });
      }
    },
    check() {
      return this.field != "";
    },
    async search() {
      try {
        this.loading = true;
        await this.$store.dispatch("search", {
          visible: this.visible,
          users: this.field,
          page: this.page,
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.myInput {
  width: 70%;
  min-width: 630px;
  max-width: 720px;
  background-color: rgba(245, 245, 220, 0.65);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border: 2px solid whitesmoke;
}

.myInput-button {
  background-color: red;
  border-left: 2px solid whitesmoke;
}

input {
  border: none;
  outline: none;
  font-size: 24px;
  background-color: transparent;
  padding: 20px 40px;
}
input[type="button"] {
  color: whitesmoke;
}

.slope {
  transform: skewX(-45deg);
}

.slope input,
.slope .icon {
  transform: skewX(45deg);
}
.icon {
  color: whitesmoke;
  position: absolute;
  top: 27px;
  right: 20px;
}

@media (max-width: 779px) {
  .slope,
  .slope input,
  .slope .icon {
    transform: skewX(0deg);
  }

  .myInput {
    min-width: 450px;
  }
  .icon {
    top: 13px;
    right: 13px;
  }

  input {
    font-size: 20px;
    padding: 10px 30px;
  }
}
</style>
