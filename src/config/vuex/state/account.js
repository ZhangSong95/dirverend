export default {
  state: {
    signedIn: false,
    session: undefined,
    nick: undefined,
    uid: undefined,
    username: undefined,
    tilte: undefined
  },
  mutations: {
    _setTilte (state, aug) {
      state.tilte = aug
    }
  },
  action: {}
}
