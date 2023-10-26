import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './styles.scss'

Vue.use(ElementUI, { locale })

createApp(App).mount('#app')
