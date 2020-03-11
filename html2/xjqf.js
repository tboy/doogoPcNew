var app;
$(function() {

	initVue();
	initFile();
})

function initVue() {
	app = new Vue({
		el: "#ct",
		data: function() {
			return vueData;
		},
		mounted() {
			document.getElementById("ct").style.opacity = 1
            if(location.href.indexOf("?")!=-1){
				var id = location.href.substring(location.href.indexOf("=")+1,location.href.length);
				this.titl="编辑群发";
			
			}
			this.getYhq(null);
		},
		methods: {
			upLoadFile(val) {
				u.minWidth = 1;
				u.minHeight = 1;
				u.maxWidth = 100000;
				u.maxHeight = 100000;


				$('#file').trigger('click');
			},
			getYhq(key) {
				console.log(key);
				//获取优惠券
				var pars = {
					keyword: key
				};
				//后台返回数据
				var arr = [];
				this.yhqAll.map(item => {
					if (item.label.indexOf(key) != -1) {
						arr.push(item);
					}
				})
				this.yhq = arr;
				if (key == null || key == '') {
					this.yhq = this.yhqAll.map(item => {
						return item;
					});
				}
				this.yhq.sort();

			},
			getTag() {
				app.$data.form.tags = this.$refs.tagSel.getCheckedNodes(true);
				app.$data.form.tags.sort();

			},
			delTag(idx) {
				app.$data.form.tags.splice(idx, 1);
				app.$data.form.tagId.splice(idx, 1);
				app.$data.form.tags.sort();
				var temp = app.$data.form.qfrq;
				app.$data.form.qfrq = ''
				setTimeout(() => {
				
					app.$data.form.qfrq = temp;
				}, 20);
				
			},
			getCy() {
				app.$data.form.cys = this.$refs.cySel.getCheckedNodes(true);
				app.$data.form.cys.sort();
			
			},
			delCy(idx) {
				app.$data.form.cys.splice(idx, 1);
				app.$data.form.cyId.splice(idx, 1);
				app.$data.form.cys.sort();
				var temp = app.$data.form.qfrq;
				app.$data.form.qfrq = ''
				setTimeout(() => {
				
					app.$data.form.qfrq = temp;
				}, 20);
				
			}

		},
	});
}


var u = null;

function initFile() {
	u = new UploadBase64();

	u.init({

		input: document.querySelector('#file'),

		callback: function(base64) {

			if (base64) {
				app.$data.form.tw = base64;
			}
			$("#file").val(null);

		},

		loading: function() {



		}

	});
}
