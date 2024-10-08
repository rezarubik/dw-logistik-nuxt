export const state = () => ({
  users: [],
  errors: [],
})

// todo: Manupulation for state (memanipulasi state)
export const mutations = {
  SET_USER_DATA(state, payload) {
    state.users = payload
  },
  SET_ERRORS(state, payload) {
    state.errors = payload
  },
}

export const actions = {
  getUsersData({ commit }) {
    return new Promise((resolve, reject) => {
      this.$axios.get('/users').then((response) => {
        commit('SET_USER_DATA', response.data.data)
        resolve()
      })
    })
  },
  storeUsersData({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post('/users', payload)
        .then((response) => {
          dispatch('getUsersData')
          resolve()
        })
        .catch((error) => {
          console.log(error)
          console.log(error.response.data)
          commit('SET_ERRORS', error.response.data)
        })
    })
  },
}
