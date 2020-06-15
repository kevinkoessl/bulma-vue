import Vue from 'vue'
import Vuex from 'vuex'

import navigation from "./modules/navigation";
import application from "./modules/application-state"
import cms from "./modules/cms-view.js"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        navigation,
        application,
        cms
    },
    strict: true
})
