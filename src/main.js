import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import Vue, { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './styles.scss';

Vue.use(ElementUI, { locale })

createApp(App, store, router).mount('#app')
