const mutations = {
    UPDATE_WINDOW_SCROLL_Y(state, scrollY) {
        state.scrollY = scrollY
    },
    UPDATE_WINDOW_WIDTH(state, width) {
        state.screenWidth = width
    },
    UPDATE_SIDE_BAR_STATUS(state, isOpen) {
        state.isSideBarOpen = isOpen
    },
}
export default mutations
