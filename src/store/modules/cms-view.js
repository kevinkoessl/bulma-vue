import {cmsPages} from '../dummy-data'

const state = {
    cmsPages: [],
};

const mutations = {
    'SET_CMS_PAGES'(state, cmsPages) {
        state.cmsPages = cmsPages;
    },
};

const actions = {
    fetchCMSPage: ({commit}) => {
        commit('SET_CMS_PAGES', cmsPages)
    },
};

const getters = {
    cmsPage: state => name => {
        const storedPages = [...state.cmsPages];
        let result = {};

        storedPages.forEach(cmsPage => {
            if (cmsPage.name === name) {
                result = cmsPage;
            }
        });

        return result;
    },
};

export default {state, mutations, actions, getters};

