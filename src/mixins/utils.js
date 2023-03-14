export const utils = {
	props: ["propsData"],
	data() {
		return {
			alert1: 'test'
		}
	},
	computed: {
		locale() {
			return this.$i18n.locale
		}
	},
	methods: {
		testAlert() {
			alert(this.alert1)
		}
	},
}