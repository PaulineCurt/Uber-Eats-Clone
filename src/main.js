import { createApp } from 'vue'
import App from './App.vue'

// createRouteur, créer le routeur
// createWebHasHistory, garde un historique 
import{ createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/HomeView.vue'
import RestaurantView from './page/RestaurantView.vue'

// gère les routes
const routes = [
    { path: '/', component: Home },
    { path: '/restaurant', component: RestaurantView},
]

const routeur = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App)

VueApp.use(routeur);
VueApp.mount('#app');

