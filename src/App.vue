<template>
	<div id="app">
		<Header></Header>

		<Question-box></Question-box>
	</div>
</template>

<script>
	import QuestionBox from '@/components/QuestionBox'
	import Header from '@/components/Header'

	export default {
		name: 'App',
		components: {
			Header,
			QuestionBox,
		}
	}

</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

</style>
