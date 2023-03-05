export const utils = {
	props: ["propsData"],
	data() {
		return {
			alert1: 'test'
		}
	},
	methods: {
		testAlert() {
			alert(this.alert1)
		}
	},
}