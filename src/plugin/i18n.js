import Vue from 'vue'
import VueI18n from 'vue-i18n' 

Vue.use(VueI18n)

export default new VueI18n({
	locale: "ru",
	fallbackLocale: "en",
	messages: {
		ru: {
			hello: "hello world ru",
			name: "имя",
			username: "имя пользователя",
			email: "почта",
			street: "улица",
			suite: "набор",
			city: "город",
			zipcode: "зипкод",
			geo: "гео",
			lat: "широта",
			lng: "долгота",
			validations: {
				required: "поле {field} обязательное",
				maxLength: "Mаксимальное кол-во символов {max}",
				minLength: "Минимальное кол-во символов {min}",
			}
		},
		en: {
			hello: "hello world en",
			name: "name", 
			username: "username",
			email: "email",
			street: "street",
			suite: "suite",
			city: "city",
			zipcode: "zipcode",
			geo: "Geo",
			lat: "lat",
			lng: "lng",
			validations: {
				required: "field {field} has been required",
				maxLength: "Maximum number of characters {max}",
				minLength: "Minimum number of characters {min}",
			}
		}
	}
})