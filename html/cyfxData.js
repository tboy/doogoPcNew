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
var vueData = {
	form: {
		daterange: [],
		zb1: '曝光量',
		zb2: '点击量',
		currentPage: 1,
		pageSize: 10,
		total: 100

	},
	list: tableList,
	zbs: [{
			value: '花费',
			label: '花费',
		},
		{
			value: '曝光量',
			label: '曝光量',
		},
		{
			value: '点击量',
			label: '点击量',
		},
		{
			value: '点击率',
			label: '点击率',
		},
		{
			value: '点击均价',
			label: '点击均价',
		},
		{
			value: '转化数',
			label: '转化数',
		},

		{
			value: '转化成本',
			label: '转化成本',
		},

		{
			value: '转化率',
			label: '转化率',
		}
	],
	zhf: '1234.23',
	bgl: '23211',
	djl: '123',
	djll: '123',
	djjj: '39',
	zhs: '123',
	zhcb: '123',
	zhl: '13',

};

option = {
	grid: {
		x: 50,
		y: 50,
		x2: 50,
		y2: 70,
		borderWidth: 1
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},

	legend: {
		data: ['暴光量', '点击量']
	},
	xAxis: [{
		type: 'category',
		data: ['私域流量建1', '2私域流量建', '3私域流量建', '4私域流量建', '5私域流量建', '6私域流量建', '7私域流量建', '8私域流量建', '9私域流量建', '10私域流量建',
			'11私域流量建', '12私域流量建'
		],
		axisPointer: {
			type: 'shadow'
		}
	}],
	yAxis: [{
			type: 'value',
			name: '暴光量',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value} 次'
			}
		},
		{
			type: 'value',
			name: '点击量',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value} 元'
			}
		}
	],
	series: [{
			name: '暴光量',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
			itemStyle: {
				normal: {
					color: '#086a8b'
				}
			}
		},
		{
			name: '点击量',
			type: 'bar',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
			itemStyle: {
				normal: {
					color: '#009944'
				}
			}
		}
	]
};
