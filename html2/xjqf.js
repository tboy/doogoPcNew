var app;
$(function() {
	initVue();
})

function initVue() {
	app = new Vue({
		el: "#ct",
		data: function() {
			return vueData;
		},
	    mounted(){
			document.getElementById("ct").style.opacity = 1
		},
		methods: {
			

		},
	});
}
