var app;
$(function() {
	initVue();
	
})

function initVue() {
	app = new Vue({
		el: "#ct",
		data:vueData,
		mounted(){
			document.getElementById("ct").style.opacity=1
			this.query();
			if(this.selId == null){
				this.$confirm('欢迎首次使用智能群发方案<br/>使用前需要简单设置方案触发规则来激活智能智能群发\n如果已经设置完毕直接点击取消即可', '方案设置向导', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
					dangerouslyUseHTMLString:true
				})
			}
			
		},
		methods: {
			goSetting(){
			  location.href="fasz.html";	
			},
			query(){
		        var pars = {currentPage:this.currentPage};
				
				this.list = queryData;
				Helper.ui.page("#page", {
					total: 30, //数据总量
					pageSize: 8, //每页的数据量
					currentPage: vueData.currentPage, //默认处于哪一页
					showTotal: false, //是否在分页按钮左侧显示数据总量
					showTo: false, //是否在分页按钮右侧显示直接跳转至某一页
					change: function(i) {
						console.log("第几页" + i);
						if(i == app.$data.currentPage){return;}
						app.$data.currentPage = i;
						app.query();
					}
				});
			},
			
			setFa(item){
			
				this.selId=item.id;
				
			}
		}
	})
}
