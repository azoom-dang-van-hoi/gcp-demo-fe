import { make } from 'vuex-pathify'
import { getMe } from '@/models/user'

export const state = () => ({
  user: null,
})

export const mutations = {
  ...make.mutations(state),
}

export const getters = {
  ...make.getters(state),
}

export const actions = {
  async fetchMe({ commit }) {
    const user = await getMe()
    commit('SET_USER', { ...user, loggedIn: true })
  },
}
