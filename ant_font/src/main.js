// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routers from './router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import axios from 'axios'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css'
import jujWid from './util/wid'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(jujWid);
Vue.use(Vuex)

Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false


const RouterConfig = {
    mode: 'history',
    routes: Routers
}
const router = new VueRouter(RouterConfig);
router.beforeEach((to, from, next) => {
        if (to.meta.jugg) {
            setTimeout(function() {
                if (store.state.isLogin.success) {
                    if (store.state.isLogin.admin) {
                        next({
                            path: '/admin_testlist',
                            query: {
                                redirect: to.fullPath
                            }
                        });
                    }
                    if (store.state.isLogin.admin == undefined) {
                        next({
                            path: '/testlist',
                            query: {
                                redirect: to.fullPath
                            }
                        })
                    }
                }
            }, 0)
        }
        if (to.meta.auth) {
            setTimeout(function() {
                if (store.state.isLogin.success) {
                    next();
                } else {
                    next({
                        path: '/login',
                        query: {
                            redirect: to.fullPath
                        }
                    })
                }
            }, 0)
        }
        window.document.title = to.meta.title;
        next();
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => {
        return h(App)
    },

})