import router from '@/router/index';
import '@fortawesome/fontawesome-free/css/all.css';
import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';

const app = createApp(App);

app.use(router);
app.mount('#app');