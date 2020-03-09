var vueData = {
	list: [],
	selId: null,
	isShow:false,
	currentPage: 1,
	form:{
		id:'',
		type:'上新',
		name:'',
		msg:'',
		time:'',
		cf:0,
		isOpen:false,
	}
}

var queryData = [{
		id: 1,
		isOpen: true,
		type: '上新',
		name: '双十一活动来啦，福利享不停 ',
		msg: '全网新品3月最低价——把青春穿在身上',
		time: '2020-01-02',
		cf: '0'
	},
	{
		id: 2,
		isOpen: false,
		type: '促销',
		name: '双十一活动来啦，福利享不停 ',
		msg: '全网新品3月最低价——把青春穿在身上',
		time: '2020-01-02',
		cf: '7'
	}, {
		id: 3,
		isOpen: true,
		type: '上新',
		name: '双十一活动来啦，福利享不停 ',
		msg: '全网新品3月最低价——把青春穿在身上',
		time: '2020-01-02',
		cf: '0'
	}
]
