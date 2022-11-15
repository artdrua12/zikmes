import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    repositories: {},
    message: { text: 'default', run: false }
  },
  getters: {
    get: state => type => {
      return state[type]
    }
  },
  mutations: {
    set(state, obj) {
      state[obj.name] = obj.value;
    },

    setMessage(state, obj) {
      Vue.set(state, 'message', obj);
    }
  },
  actions: {
    async search({ commit }, obj) {
      try {
        const response = await fetch(
          `https://api.github.com/search/users?q=${obj.users}&per_page=${obj.visible}&page=${obj.page}`
        );
        const res = await response.json();
        console.log('data', res);
        commit('set', { name: 'searchUsers', value: res });
        commit('setMessage', { text: 'Успешно отправлены и загружены данные', run: true });
      } catch (e) {
        commit('setMessage', { text: 'Ошибка запроса', run: true });
      }
    },

    async searchRepositories({ commit }, user) {
      try {
        const response = await fetch(
          `https://api.github.com/users/${user}/repos`
        );
        const res = await response.json();
        commit('setRepositories', { name: 'repositories', value: res });
      } catch (e) {
        commit('setMessage', { color: 'error', text: 'Ошибка запроса', run: true });
      }
    },

  }

})
