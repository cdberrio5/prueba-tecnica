import router from '@/router/index';
import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown, faBell, faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const app = createApp(App);
library.add(faBell, faEnvelope, faPlus, faAngleDown)

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');