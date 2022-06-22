// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import { defineNuxtPlugin } from '#app'

// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import VuePlyr from '@skjnldsv/vue-plyr'
// eslint-disable-next-line import/no-unresolved,node/no-missing-import
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(VuePlyr)
})
