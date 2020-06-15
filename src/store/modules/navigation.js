import {mainNavigation} from '../dummy-data'
import {contentNavigation} from '../dummy-data'
import {footerNavigation} from '../dummy-data'

const state = {
    mainNavigation: [],
    contentNavigation: [],
    footerNavigation: []
};

const mutations = {
    'SET_MAIN_NAVIGATION'(state, navigation) {
        state.mainNavigation = navigation;
    },
    'SET_CONTENT_NAVIGATION'(state, navigation) {
        state.contentNavigation = navigation;
    },
    'SET_FOOTER_NAVIGATION'(state, navigation) {
        state.footerNavigation = navigation;
    }
};

const actions = {
    fetchMainNavigation: ({commit}) => {
        commit('SET_MAIN_NAVIGATION', mainNavigation)
    },
    fetchContentNavigation: ({commit}) => {
        commit('SET_CONTENT_NAVIGATION', contentNavigation)
    },
    fetchFooterNavigation: ({commit}) => {
        commit('SET_FOOTER_NAVIGATION', footerNavigation)
    }
};

const getters = {
    mainNavigation: state => {
        return state.mainNavigation
    },
    contentNavigation: state => {
        return state.contentNavigation
    },
    footerNavigation: state => {
        return state.footerNavigation
    }
};

export default {state, mutations, actions, getters};

