<template>
  <div>
    <span v-for="locale in $i18n.availableLocales" :key="locale" @click="changeLocale(locale)">{{ locale }}</span>
  </div>
</template>

<script>
export default {
	methods: {
		changeLocale(language){
			this.$i18n.locale = language
			this.$router.push({name: this.$route.name, params: {locale: language === 'ru' ? null :this.$i18n.locale }})
		}
	},
};
</script>

<style lang="scss" scoped>
span{
	margin: 0px 5px
}
</style>

