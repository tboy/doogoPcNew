var app;
$(function() {

	initVue();
	setTimeout(() => {
		document.getElementById("ct").style.opacity = 1;
		initChart();
	}, 1000)

})
var myChart;

function initChart() {

	myChart = echarts.init(document.getElementById('charts'));
	myChart.setOption(option);
}

function initVue() {
	app = new Vue({
		el: "#ct",
		data: function() {
			return vueData;
		},
		methods: {
			query() {
				// form: {
				// 	daterange: [],
				// 	zb1: '曝光量',
				// 	zb2: '点击量',
				// 	currentPage: 1,
				// 	pageSize: 10,
				// 	total: 100

				// }
				//参数
				var pars = {};
				pars.startTime = this.form.daterange[0];
				pars.endTime = this.form.daterange[0];
				pars.zb1 = this.form.zb1;
				pars.zb2 = this.form.zb2;
				pars.currentPage = this.form.currentPage;
				//查询赋值
				//总条数
				this.form.total = 20;
				this.zhf = '123123' //总花费(下面注解的也要)
				// zhf: '1234.23',
				// bgl: '23211',
				// djl: '123',
				// djll: '123',
				// djjj: '39',
				// zhs: '123',
				// zhcb: '123',
				// zhl: '13',
				//图示意 
				//暴光量 点击量
				option.legend.data = [this.form.zb1, this.form.zb2]
				//x轴标签
				option.xAxis.data = ['私域流量建1', '2私域流量建', '3私域流量建', '4私域流量建', '5私域流量建', '6私域流量建', '7私域流量建', '8私域流量建', '9私域流量建',
					'10私域流量建',
					'11私域流量建', '12私域流量建'
				]
				//暴光量 点击量
				option.yAxis[0].name = this.form.zb1;
				option.yAxis[1].name = this.form.zb2;
				
				option.series[0].name = this.form.zb1
				option.series[1].name = this.form.zb2
				
				//数值
				option.series[0].data = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				option.series[1].data = [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				
				myChart.setOption(option);
				
				//表格数据
				//第一条放统计,下面的是数据
				var tableList = [];
				
				for (var i = 0; i < 10; i++) {
					var item = {};
					if (i == 0) {
						item.str = "总计共9条记录"
						
					} else {
						item.name = "私域流量一站式平台全国火热招商中!总部扶持!";
						item.img = '../images/imgs.jpg';
					}
					item.hf = 123;
					item.bgl = 234;
					item.djl = 234;
					item.djll = 234;
					item.djjj = 234;
					item.zhs = 234;
					item.zhcb = 234;
					item.zhl = 234;
					tableList.push(item);
				}
				this.list = tableList;
				//结束

				console.log(pars);
			}
		},
	})
};
