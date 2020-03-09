var app;
$(function() {
	vueData.editOrAdd = "新建计划"
	if (window.location.href.indexOf("?id=") != -1) {
		vueData.editOrAdd = "编辑计划";
	}
	initVue();
	setTimeout(() => {
		document.body.style.opacity = 1
	}, 1000)
})

function initVue() {
	app = new Vue({
		el: "#ct",
		data: function() {
			return vueData;
		},
		methods: {
			setUrl() {
				//app.$data.select  siteId,自己查
				//app.$data.form.select;
				app.$data.form.ljdz = '自己赋值地址'

				//app.$data.form.select = "";
			},
			delCity(idx) {
				app.$data.form.areas.splice(idx, 1);
				app.$data.form.areasID.splice(idx, 1);
				app.$data.form.areas.sort();
				var temp = app.$data.form.dy;
				app.$data.form.dy = ''
				setTimeout(() => {

					app.$data.form.dy = temp;
				}, 20);


			},
			changeMb() {
				if (app.$data.form.tfmb == '转化量') {
					app.$data.form.tffs = "优先跑量";
					app.$data.form.fkfs = '按展示付费(oCPM)';
				}
				if (app.$data.form.tfmb == '点击量') {
					app.$data.form.cjfa = "手动";
					app.$data.form.tffs = "标准投放(推荐)";
					app.$data.form.fkfs = '按点击付费(CPC)';
				}
				if (app.$data.form.tfmb == '展示量') {
					app.$data.form.cjfa = "手动";
					app.$data.form.tffs = "标准投放(推荐)";
					app.$data.form.fkfs = '按展示付费(CPM)';
				}
			},
			muilSel(val) {
				if (event.currentTarget.value == "不限") {
					app.$data.form[val] = ['不限'];
					app.$data.form[val].sort();
				} else {
					let arr = [];
					app.$data.form[val] = app.$data.form[val].map((item) => {
						if (item != "不限") {
							return item;
						}
					})
					app.$data.form[val].sort();
				}
			},
			changeToFormValue(property, val) {
				app.$data.zone = val;
				// console.log(this.formData[property])
			},
			getSelArea() {
				app.$data.form.areas = this.$refs.areaSel.getCheckedNodes(true);
				console.log(app.$data.form.areas);
				app.$data.form.areas.sort();
			},
			back() {
				//取消
			},
			add(val) {
				app.$data.form.sd[val].push([8, 12]);
			},
			del(pos, idx) {
				app.$data.form.sd[pos].splice(idx, 1);
			},
			save(val) {

				this.$refs.form.validate((valid) => {
					if (valid) {
						//alert('submit!');
					} else {
						//console.log('error submit!!');
						return false;
					}
				});
				//val,保存 1，2
				var pars = {};
				var formTemp = app.$data.form;
				pars.ggzys = formTemp.ggzys;
				if (pars.ggzys != '不限') {
					if (formTemp.rys == '') {
						return;
					} else {
						pars.rys = formTemp.rys;
					}
				}

				if (formTemp.ggzmc == '' || formTemp.jhmc == '') {
					return;
				}
				pars.ggzmc = formTemp.ggzmc;
				pars.jhmc = formTemp.jhmc;
				pars.tfmb = formTemp.tfmb;
				pars.zhzj = formTemp.zhzj;
				if (formTemp.ljdz == null || formTemp.ljdz == '') {
					return;
				}
				pars.ljdz = formTemp.ljdz;

				pars.dy = formTemp.dy;
				if (pars.dy == '按省市') {
					pars.areaId = [];
					formTemp.areasID.map((item) => {
						pars.areaId.push(item[1]);
					})
				}
				if (pars.dy == '按商圈') {
					pars.zone = formTemp.zone;
				}

				pars.xb = formTemp.xb;

				pars.nl = formTemp.nl;
				pars.pt = formTemp.pt;


				if (pars.tfmb = '转化量') {
					pars.cjfa = formTemp.cjfa;
					pars.tffs = formTemp.tffs;
					pars.ysType = formTemp.ysType; //1-日预算 2-总预算

					pars.ys = formTemp.ys;
					if (pars.ys == '') {
						return;
					}

					pars.time1 = formTemp.time1;
					pars.time2 = formTemp.time2;

					pars.tfsd = formTemp.tfsd;
					if (pars.tfsd != '不限') {
						pars.sd = formTemp.sd;
					}
					pars.fkfs = formTemp.fkfs;
					pars.mbzh = formTemp.mbzh;
					if (pars.mbzh == '') {
						return;
					}
				}
				if (pars.tfmb = '点击量') {
					pars.cjfa = formTemp.cjfa;
					pars.tffs = formTemp.tffs;
					pars.fkfs = formTemp.fkfs;
					pars.mbzh = formTemp.mbzh;
					if (pars.mbzh == '') {
						return;
					}
				}
				if (pars.tfmb = '展示量') {
					pars.cjfa = formTemp.cjfa;
					pars.tffs = formTemp.tffs;
					pars.fkfs = formTemp.fkfs;
					pars.mbzh = formTemp.mbzh;
					if (pars.mbzh == '') {
						return;
					}
				}
				console.log(JSON.stringify(pars));
				console.log(app.$data.form);
			}

		},
	});
}
