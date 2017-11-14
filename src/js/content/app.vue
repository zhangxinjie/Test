<template>
	<div>
		<div class="header">
			<h3>content<button class="right" @click="onChange">Submit</button></h3>
			<input v-focus v-model="val" />
			<p>{{val}}</p>
			<footer-component></footer-component>
		</div>
	</div>
</template>
<script>
	import FooterComponent from "./components/footer.vue";
	export default{
		components:{
			FooterComponent
		},
		computed:{
			val(){
				return this.$store.getters.getVal
			}
		},
		directives: {
			focus: {
				inserted: function(el) {
					el.focus()
				}
			}
		},
		methods:{
			onChange:function(){
				console.log(staticpath);
				console.log(this.val);
			}
		}
	}
</script>
<style lang="scss">
	@import "../../css/reset.scss";
	@import "../../css/content.scss";
</style>