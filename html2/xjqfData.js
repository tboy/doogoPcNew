var vueData = {
		titl:'新建群发',
	form: {
	
		rwmc: '',
		rwlx: '上新',
		qfmb: '领券中心',
		qfwz: '',
		qfnr: '领券中心',
		tgsps: advData,
		tgsp:'',
		tw:'',
		
		yhq:'',
		qfrq: '按标签',
		tagId:'',
		tag:[{"label":"客户等待(12)","value":11,"children":[{"label":"勿打扰(3)","value":111},{"label":"沟通反应(3)","value":2222}]}],
		tags:[],
		cyId:'',
		cy:[{"label":"成员1(5位客户)","value":1},{"label":"成员3(6位客户)","value":2},{"label":"成员3(7位客户)","value":3}],
		cys:[],
		dsqf: '马上群发',
		sendTime:'',
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
