import Vue from 'vue'
import App from './App.vue'
import axios from "axios"
import Vuex from "vuex"
import store from "./store"


new Vue({
	el:"#app",
	store,
	render: h => h(App)
})


