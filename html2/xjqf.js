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
				
			},
			save(){
				var pars = {};
				if(this.form.rwmc == ''){
					alert("请输入任务名称");
					return;
				}
				if(this.form.qfwz == ''){
					alert("群发文字");
					return;
				}
				if(this.form.qfrq == '按标签'){
					if(this.form.tagId.length == 0){
						alert("请选择群发人群");
						return;
					}
				}
				if(this.form.qfrq == '按成员'){
					if(this.form.cyId.length == 0){
						alert("请选择群发人群");
						return;
					}
				}
				
				pars.rwmc = this.form.rwmc;
				pars.rwlx = this.form.rwlx;
				pars.qfmb = this.form.qfmb;
				pars.qfwz = this.form.qfwz;
				pars.qfnr = this.form.qfnr;
				
				
				if(this.form.qfmb =='领券中心'){
					pars.qfrq = this.form.qfrq;
				}
				if(this.form.qfmb =='商品推广'){
					if(this.form.tgsp == '' || this.form.tgsp.length==0){
						alert("请选择商品推广");
						return;
					}
					pars.tgsp = this.form.tgsp;
				}
				if(this.form.qfmb =='图文消息'){
					if(this.form.tw==''){
						alert("请选择图文消息");
						return;
					}
					pars.tw = this.form.tw;
				}
				if(this.form.qfmb =='商城优惠券'){
					if(this.form.yhq == '' || this.form.yhq.length==0){
						alert("请选择商城优惠券");
						return;
					}
					pars.yhq = this.form.yhq;
				}
				
				if(this.form.qfrq == '按标签'){
					pars.tagId = this.form.tagId;
					
				}
				if(this.form.qfrq == '按成员'){
					pars.tagId = this.form.cyId;
				}
				
				pars.dsqf = this.form.dsqf;
				if(this.form.dsqf != '马上群发'){
					if(this.form.sendTime == ''){
						alert("请选择发送时间");
						return;
					}
					pars.sendTime = this.form.sendTime;
				}
				console.log(pars);
				
				// rwmc: '',
				// rwlx: '上新',
				// qfmb: '领券中心',
				// qfwz: '',
				// qfnr: '领券中心',
				// tgsps: advData,
				// tgsp:'',
				// tw:'',
				
				// yhq:'',
				// qfrq: '按标签',
				// tagId:'',
				// tag:[{"label":"客户等待(12)","value":11,"children":[{"label":"勿打扰(3)","value":111},{"label":"沟通反应(3)","value":2222}]}],
				// tags:[],
				// cyId:'',
				// cy:[{"label":"成员1(5位客户)","value":1},{"label":"成员3(6位客户)","value":2},{"label":"成员3(7位客户)","value":3}],
				// cys:[],
				// dsqf: '马上群发',
				// sendTime:'',
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
