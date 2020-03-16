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
			addEvent(){
				this.form.id='';
				this.form.type='上新';
				this.form.name='';
				this.form.msg='';
				this.form.time='';
				this.form.cf = 0;
				this.form.isOpen = false;
				this.isShow = true;
			},
			edit(item){
				for(var key in item){
					this.form[key] = item[key];
				}
				this.isShow = true;
			},
			del(item2){
				let pos = 0;
				this.list.map((item,idx)=>{
					if(item.id == item2.id){
						pos = idx;
					}
				});
				
				this.$confirm('确定删除任务:' + item2.name + '吗?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$data.list.splice(pos, 1);
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
				//this.list.splice(pos,1);
			},
			switchHandle(item){
				var pars = {};
				pars.id = item.id;
				pars.isOpen = item.isOpen;
			},
			open(){
				console.log(this.sendFlag);
			},
			editDay(){
				this.day1 = this.day;
				this.isOpen = true;
			},
			updateDay(){
				if(this.day1<5){
					alert("输入至少5天")
					return;
				}
			  this.day = this.day1;
				  this.isOpen = false;
			},
			addItem(){
				if(this.form.name==''){
				   alert('请填写事件标题');
					   return;
				}
				if(this.form.msg==''){
				   alert('请填写群发文字');
					   return;
				}
				if(this.form.time==''){
					alert('请填写触发时间');
					 return;
				}
				
				
				var pars = {};
				pars.id = this.form.id;
				pars.type = this.form.type;
				pars.name= this.form.name;
				pars.msg = this.form.msg;
				pars.time = this.form.time;
				pars.cf = this.form.cf;
				pars.isOpen = this.form.isOpen;
		
		       // 自己保存后刷新，下面是模拟数据
				if(pars.id==''){
					pars.id=this.list.length;
					this.list.push(pars);
				}else{
				    this.list.map(item=>{
						if(item.id == pars.id){
							for(var key in pars){
								item[key] = pars[key];
							}
						}
					});
				}
				
				this.isShow = false;
			}
		}
	})
}
