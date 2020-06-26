import {viewports} from '../viewports'
import {orderProcess} from "../order-process";

const state = {
    stickyContainers: [],
    currentViewport: viewports.MOBILE.name,
    currentOrderProcessStep: orderProcess.STEPS.NO_ORDER_ONGOING,
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
    'SET_CURRENT_VIEWPORT'(state, viewportName) {
        state.currentViewport = viewportName;
    },
    'SET_CURRENT_ORDER_PROCESS_STEP'(state, orderProcessStep) {
        state.currentOrderProcessStep = orderProcessStep
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
            if (viewport.minWidth <= width && width <= viewport.maxWidth) {
                commit('SET_CURRENT_VIEWPORT', viewport.name);
            }
        }
        commit('SET_SCREEN_SIZE', {width: width, height: height});
    },
    setCurrentOrderProcessStep: ({commit}, orderProcessStep) => {
        commit('SET_CURRENT_ORDER_PROCESS_STEP', orderProcessStep);
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
    currentViewport: state => {
        return state.currentViewport;
    },
    currentOrderProcessStep: state => {
        return state.currentOrderProcessStep;
    }
};

export default {state, mutations, actions, getters};

