<template>
	<div>
		<h4>footer</h4>
		<button @click="show=!show">Click</button>
		<transition name="fade">
			<p v-if="show">Look at me!</p>
		</transition>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show:true
			}
		}
//		props:["show"]
	}
</script>
<style lang="scss">
	/*.fade-enter-active {
		transition: all .3s ease;
	}
	.fade-leave-active {
		transition: all 1s ease;
	}
	.fade-enter,.fade-leave-to{
		transform: rotate(180deg);
		opacity:0;
	}*/
	.fade-enter-active{
		animation: fade-in 2s;
	}
	.fade-leave-active{
		animation: fade-in 2s reverse;
	}
	@keyframes fade-in{
		0% {
			transform: scaleY(0);
		}
		25%{
			transform: scaleY(2);
		}
		50% {
			transform: scaleY(1.5);
		}
		75%{
			transform: scaleY(2)
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>