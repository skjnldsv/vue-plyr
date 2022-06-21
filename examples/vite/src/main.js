import { createApp } from 'vue'
import App from './App.vue'

// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import VuePlyr from '@skjnldsv/vue-plyr'
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

createApp(App).use(VuePlyr).mount('#app')
