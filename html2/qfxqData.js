var vueData = {
	form: {
		rwmc: '双十一活动推广',
		rwlx: '上新',
		qfmb: '商品推广',//领券中心 商品推广 图文消息 商城优惠券
		qfwz: '春装上新，全网新品3月最低价\n——把青春穿在身上',
		qfnr: '领券中心',
		tgsps: advData,
		tgsp:'',
		tw:'../images/imgs.jpg',
		yhq:'',
		qfrq: '按成员',//按标签,按成员
		tags:[{"label":"勿打扰","value":111},{"label":"沟通反应","value":2222}],
		cys:[{"label":"成员1","value":1},{"label":"成员2","value":2},{"label":"成员3","value":3}],
		peoples:12,
		names:'道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；道小古；',
		time:'2020-02-28 11:00:00'
	},
	yhq:[],
	yhqAll:[
		{value:'1',label:'优惠券1'},
		{value:'2',label:'优惠券2'},
		{value:'3',label:'优惠券3'},
		{value:'4',label:'优惠券4'}
	],
	rules: {
		rwmc: [{
			required: true,
			message: '请输入任务名称',
			trigger: 'blur'
		}],
		rwlx: [{
			required: true,
			trigger: 'blur'
		}],

		qfmb: [{
			required: true,
			trigger: 'blur'
		}],

		qfwz: [{
			required: true,
			message: '请输入群发文字',
			trigger: 'blur'
		}],

		qfnr: [{
			required: true,
			trigger: 'blur'
		}],

		qfrq: [{
			required: true,
			trigger: 'blur'
		}],
		dsqf: [{
			required: true,
			trigger: 'blur'
		}]

	}

}
