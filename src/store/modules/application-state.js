import {viewports} from '../viewports'

const state = {
    stickyContainers: [],
    viewport: viewports.MOBILE.name,
    screenSize: {
        width: 0,
        height: 0,
    }
};

const mutations = {
    'SET_STICKY_CONTAINERS'(state, containers) {
        state.stickyContainers = containers;
    },
    'SET_SCREEN_SIZE'(state, screenSize) {
        state.screenSize = screenSize;
    },
    'SET_VIEWPORT'(state, viewportName) {
        state.viewport = viewportName;
    }
};

const actions = {
    addStickyContainer: ({commit, state}, newContainer) => {
        const storedContainers = [...state.stickyContainers];

        storedContainers.splice(newContainer.order, 0, newContainer);
        commit('SET_STICKY_CONTAINERS', storedContainers);
    },
    setStickyContainer: ({commit, state}, container) => {
        const storedContainers = [...state.stickyContainers];

        storedContainers.splice(container.order, 1, container);
        commit('SET_STICKY_CONTAINERS', storedContainers);
    },
    removeStickyContainer: ({commit}, container) => {
        const storedContainers = [...state.stickyContainers];

        storedContainers.splice(container.order, 1);
        commit('SET_STICKY_CONTAINERS', storedContainers);
    },
    setScreenSize: ({commit}, {width, height}) => {
        for (let viewportName in viewports) {
            let viewport = viewports[viewportName];
            console.log(viewport);
            if (viewport.minWidth <= width && width <= viewport.maxWidth) {
                commit('SET_VIEWPORT', viewport.name);
            }
        }
        commit('SET_SCREEN_SIZE', {width: width, height: height})
    }
};

const getters = {
    heightOfAllStickyContainers: state => index => {
        const storedContainers = [...state.stickyContainers];

        let height = 0;
        if (index < storedContainers.length) {
            for (let i = index - 1; i >= 0; i--) {
                height += storedContainers[i].containerHeight;
            }
        }

        return height;
    },
    screenSize: state => {
        return {...state.screenSize};
    },
    viewport: state => {
        return {...state.viewport};
    }
};

export default {state, mutations, actions, getters};

