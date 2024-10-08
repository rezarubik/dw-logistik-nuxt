export const state = () => ({
  isAuth: false,
  api_token: null,
})

// todo: Manupulation for state (memanipulasi state)
export const mutations = {
  SET_IS_AUTH(state, payload) {
    state.isAuth = payload
  },
  SET_API_TOKEN(state, payload) {
    state.api_token = payload
  },
}

export const actions = {
  // todo: fungsi akan berjalan ketika halaman di load
  nuxtServerInit({ commit }, context) {
    console.log('In nuxtServerInit')
    // console.log(context.app.$auth.$state.loggedIn)
    // todo: Set ke mutation yang udah dibuat
    commit('SET_IS_AUTH', context.app.$auth.$state.loggedIn)
    if (context.app.$auth.$state.loggedIn) {
      commit('SET_API_TOKEN', context.app.$auth.$state.user.api_token)
      console.log('api_token')
      console.log(context.app.$auth.$state.user.api_token)
    }
  },
}
