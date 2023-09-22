const sidebarcontrol = {
  namespaced: true,
    state: {
        sidebarVisible: 'wwww',
        sidebarUnfoldable: false,
      },
      mutations: {
        toggleSidebar(state) {
          state.sidebarVisible = !state.sidebarVisible
        },
        toggleUnfoldable(state) {
          state.sidebarUnfoldable = !state.sidebarUnfoldable
        },
        updateSidebarVisible(state, payload) {
          state.sidebarVisible = payload.value
        },
      },
      actions: {},
      modules: {},
}

export default sidebarcontrol;