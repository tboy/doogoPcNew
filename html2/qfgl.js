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
		},
		methods: {
			query(){
		        var pars = {currentPage:this.currentPage};
				let cp = this.currentPage;
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
			send(item){
				var pars = item;
				item.state="已发送";
				this.$data.list.sort();
			},
			goEdit(item){
				var pars = item;
				location.href='xjqf.html?id='+item.id;
			},
			delRow(item){
				var pars = item;
				
				var pos = 0;
				var temp = null;
				this.$data.list.map((item2, idx) => {
					if (item2.id == item.id) {
						pos = idx;
						temp = item2;
					}
				});
				this.$data.list.splice(pos, 1);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				// this.$confirm('确定删除任务:' + temp.name + '吗?', '提示', {
				// 	confirmButtonText: '确定',
				// 	cancelButtonText: '取消',
				// 	type: 'warning'
				// }).then(() => {
				// 	this.$data.list.splice(pos, 1);
				// 	this.$message({
				// 		type: 'success',
				// 		message: '删除成功!'
				// 	});
				// }).catch(() => {
				// 	this.$message({
				// 		type: 'info',
				// 		message: '已取消删除'
				// 	});
				// });
			}
		}
	})
}
