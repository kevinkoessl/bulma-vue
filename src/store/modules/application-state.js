const state = {
    stickyContainers: [],
};

const mutations = {
    'SET_STICKY_CONTAINERS'(state, containers) {
        state.stickyContainers = containers;
    }
};

const actions = {
    addStickyContainer: ({commit, state}, newContainer) => {
        const storedContainers = [...state.stickyContainers];

        storedContainers.splice(newContainer.order, 0, newContainer);
        commit('SET_STICKY_CONTAINERS', storedContainers);
    },

    removeStickyContainer: ({commit}, container) => {
        const storedContainers = [...state.stickyContainers];

        storedContainers.splice(container.order, 1);
        commit('SET_STICKY_CONTAINERS', storedContainers);
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
};

export default {state, mutations, actions, getters};

