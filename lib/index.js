import VuePlyr from './VuePlyr.vue'

VuePlyr.install = (app, options = {}) => {
	if (options.plyr) {
		VuePlyr.props.options.default = () => {
			return { ...options.plyr }
		}
	}

	app.component(VuePlyr.name, VuePlyr)
}

export default VuePlyr
