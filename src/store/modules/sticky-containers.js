const state = {
    stackedContainerHeight: 0,
};

const mutations = {
    'SET_STACKED_CONTAINER_HEIGHT'(state, height) {
        state.stackedContainerHeight = height;
    }
};

const actions = {
    stackStickyContainer: ({commit, state}, containerHeight) => {
        const stackedContainerHeight = [...state.stackedContainerHeight];

        commit('SET_STACKED_CONTAINER_HEIGHT', stackedContainerHeight + containerHeight);
    },

    unstackStickyContainer: ({commit, state}, containerHeight) => {
        const stackedContainerHeight = [...state.stackedContainerHeight];

        commit('SET_STACKED_CONTAINER_HEIGHT', stackedContainerHeight - containerHeight);
    },
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

