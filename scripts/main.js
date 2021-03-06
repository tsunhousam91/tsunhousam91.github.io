
var Restaurant = function (name, d0, d1, d2,d3,d4,d5,d6) {
  this.name = name;
  this.s =[]
  this.e =[]
  this.s[0] = getStartMinsFromRaw(d0)
  this.e[0] = getEndMinsFromRaw(d0)
  this.s[1] = getStartMinsFromRaw(d1)
  this.e[1] = getEndMinsFromRaw(d1)
  this.s[2] = getStartMinsFromRaw(d2)
  this.e[2] = getEndMinsFromRaw(d2)
  this.s[3] = getStartMinsFromRaw(d3)
  this.e[3] = getEndMinsFromRaw(d3)
  this.s[4] = getStartMinsFromRaw(d4)
  this.e[4] = getEndMinsFromRaw(d4)
  this.s[5] = getStartMinsFromRaw(d5)
  this.e[5] = getEndMinsFromRaw(d5)
  this.s[6]= getStartMinsFromRaw(d6)
  this.e[6] = getEndMinsFromRaw(d6)
};

function getStartMinsFromRaw(rawPattern){
	if(rawPattern == 'Closed'){
		return -1
	}
	var index = rawPattern.indexOf("-")
	var startPattern = rawPattern.substring(0,index)
	var index2 = startPattern.indexOf(":")
	return parseInt(startPattern.substring(0,index2))*60 + parseInt( startPattern.substring(index2+1))
}

function getEndMinsFromRaw(rawPattern){
	if(rawPattern == 'Closed'){
		return -1
	}
	var index = rawPattern.indexOf("-")
	var endPattern = rawPattern.substring(index+1)
	var index2 = endPattern.indexOf(":")
	return parseInt(endPattern.substring(0,index2))*60 + parseInt( endPattern.substring(index2+1))
}

var names = [
	'足立壽司',
'鮨隆',
'匠壽司',
'游壽司',
'同壽司',
'童壽司',
'牡丹 天ぷら',
'凜割烹',
'鮨野村',
'笹鮨',
'鮨天本',
'鮨七海',
'Ukai 鐵板燒',
'肉割烹',
'よる',
'和牛47',
'謙安和',
'凜割烹',
'匠樂',
'鮨十兵衛',
'吟翔懷石料理',
'初魚料亭',
'吉兆割烹壽司',
'野壽司',
'一宗壽司',
'鮨蕙',
'小粋鮨割烹',
'粋鮨',
'錵鑶日本料理',
'筌壽司割烹',
'平淡天真',
'新都里懷石料理',
'彧割烹',
'極壽司',
'允壽司',
'牛壽司',
'上引水產',
'三井料理美術館',
'森壽司',
'高玉日本料理',
'丸壽司',
'綠水棧',
'牛二壽司',
'子元日本料理',
'逸鮮棧',
'旬採鮨処',
'鯈樂',
'鯤壽司',
'初魚料亭',
'煮海',
'德壽司'
];

var d0s = [
	'Closed',
'11:30-21:00',
'11:30-22:00',
'11:30-22:00',
'11:00-22:00',
'10:00-23:00',
'05:30-22:00',
'11:30-21:30',
'11:30-23:00',
'11:00-23:00',
'10:00-21:30',
'09:30-21:30',
'11:30-22:30',
'Closed',
'11:00-22:00',
'11:30-21:00',
'15:00-23:30',
'11:00-00:00',
'09:00-22:00',
'05:30-22:00',
'12:00-22:00',
'11:00-22:00',
'12:00-00:00',
'11:00-22:00',
'07:00-15:00',
'11:00-04:00',
'11:00-21:30',
'11:30-22:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-22:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'Closed',
'17:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'17:00-22:00',
'10:00-22:30',
'Closed',
'09:00-22:00',
'10:00-23:00',
'11:00-22:30',
'08:00-22:30',
'16:30-22:30',
'05:30-02:00'
];

var d1s = [
'12:00-21:30',
'Closed',
'11:30-22:00',
'11:30-22:00',
'11:00-22:00',
'11:00-23:00',
'11:30-22:00',
'11:30-21:30',
'11:30-22:00',
'11:00-23:00',
'10:30-21:30',
'10:00-21:30',
'11:30-22:30',
'11:00-21:00',
'11:00-22:00',
'17:00-20:00',
'17:00-00:30',
'11:00-00:00',
'09:00-22:00',
'Closed',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-22:00',
'11:30-22:00',
'11:00-04:00',
'11:00-21:30',
'11:30-22:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'Closed',
'11:00-22:30',
'Closed',
'11:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'Closed',
'12:00-22:00',
'10:00-22:30',
'11:30-22:00',
'09:00-21:30',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:00-22:30',
'05:30-02:00'
];

var d2s = [
'11:30-17:00',
'11:30-21:00',
'Closed',
'11:30-22:00',
'11:00-22:00',
'11:00-23:00',
'11:30-22:00',
'11:30-21:30',
'11:30-22:00',
'11:00-23:00',
'10:30-21:30',
'10:00-21:30',
'11:30-22:30',
'11:00-21:00',
'11:00-22:00',
'17:00-20:00',
'17:00-00:30',
'11:00-00:00',
'09:00-22:00',
'11:30-22:00',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-22:00',
'11:30-22:00',
'11:00-04:00',
'11:00-21:30',
'11:30-22:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'11:30-21:30',
'11:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'12:00-22:00',
'10:00-22:30',
'11:30-22:00',
'Closed',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:00-22:30',
'05:30-02:00'
];

var d3s = [
'17:00-21:30',
'11:30-21:00',
'11:30-22:00',
'Closed',
'11:00-22:00',
'11:00-23:00',
'11:30-22:00',
'11:30-21:30',
'11:30-22:00',
'11:00-23:00',
'10:30-21:30',
'10:00-21:30',
'11:30-22:30',
'11:00-21:00',
'11:00-22:00',
'17:00-20:00',
'17:00-00:30',
'11:00-00:00',
'09:00-22:00',
'11:30-22:00',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-22:00',
'11:30-22:00',
'11:00-04:00',
'Closed',
'11:30-22:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'11:30-21:30',
'11:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'12:00-22:00',
'10:00-22:30',
'11:30-22:00',
'09:00-21:30',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:00-22:30',
'05:30-02:00'
];

var d4s = [
'11:30-21:30',
'11:30-21:00',
'11:30-22:00',
'11:30-22:00',
'Closed',
'11:00-23:00',
'11:30-22:00',
'11:30-21:30',
'11:30-22:00',
'11:00-23:00',
'10:30-21:30',
'10:00-21:30',
'11:30-22:30',
'11:00-21:00',
'11:00-22:00',
'17:00-20:00',
'17:00-01:30',
'11:00-00:00',
'09:00-22:00',
'11:30-22:00',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-22:00',
'11:30-22:00',
'11:00-04:00',
'11:00-21:30',
'11:30-22:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'11:30-21:30',
'11:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'12:00-22:00',
'10:00-22:30',
'11:30-22:00',
'09:00-21:30',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:00-22:30',
'05:30-02:00'
];

var d5s = [
'12:00-21:30',
'11:30-23:00',
'11:30-23:00',
'11:30-23:00',
'11:00-22:00',
'Closed',
'11:30-22:00',
'11:30-23:00',
'11:30-23:00',
'11:00-23:00',
'10:30-21:30',
'10:00-21:30',
'11:30-22:30',
'11:00-21:00',
'11:00-23:00',
'17:00-20:00',
'17:00-01:30',
'11:00-00:00',
'09:00-23:00',
'11:30-22:00',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-00:00',
'11:30-22:00',
'11:00-04:00',
'11:00-21:30',
'11:30-23:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'11:30-21:30',
'11:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'12:00-22:00',
'10:00-00:30',
'11:30-22:00',
'09:00-21:30',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:00-23:00',
'05:30-02:00'
];

var d6s = [
'12:00-21:30',
'11:30-23:00',
'11:30-23:00',
'11:30-23:00',
'11:00-22:00',
'11:00-00:30',
'Closed',
'11:30-23:00',
'11:30-23:00',
'11:00-23:00',
'10:00-21:30',
'09:30-21:30',
'11:30-22:30',
'17:00-23:00',
'11:00-23:00',
'17:00-20:00',
'15:00-01:30',
'11:00-00:00',
'09:00-23:00',
'11:30-22:00',
'11:00-22:00',
'11:00-22:00',
'11:00-00:00',
'11:00-00:00',
'07:00-15:00',
'11:00-04:00',
'11:00-21:30',
'11:30-23:00',
'11:30-21:30',
'11:00-00:00',
'11:30-22:00',
'11:30-22:00',
'11:00-23:00',
'11:00-23:00',
'11:00-22:00',
'11:00-22:30',
'11:30-21:30',
'17:00-22:00',
'11:00-22:30',
'11:00-23:00',
'11:00-01:00',
'11:00-01:00',
'17:00-22:00',
'10:00-00:30',
'17:00-22:00',
'09:00-22:00',
'10:00-23:00',
'11:00-23:00',
'08:00-22:30',
'11:30-23:00',
'05:30-02:00'
];

var restaurants = []

function initData(ns, dd0s, dd1s, dd2s, dd3s, dd4s, dd5s, dd6s) {
	for (var i = 0; i < ns.length ; i++) {
		restaurants[i] = 
		new Restaurant(ns[i],
			dd0s[i],
			dd1s[i],
			dd2s[i],
			dd3s[i],
			dd4s[i],
			dd5s[i],
			dd6s[i])
	}
}

initData(names, d0s, d1s, d2s, d3s, d4s, d5s, d6s)

var searchBtn = document.getElementById('search')
var year = document.getElementById('year')
var month = document.getElementById('month')
var day = document.getElementById('day')
var hour = document.getElementById('hour')
var min = document.getElementById('min')
var tab=document.getElementById('tab');
var dayResult=document.getElementById('dayResult');

searchBtn.onclick = function(){
	// alert( month.value + " " + day.value + " " + hour.value + " " + min.value)

	tab.innerHTML = ""


	var nowMins = parseInt(hour.value)*60 + parseInt(min.value)
	var nowDay = new Date('20'+ year.value +'-'+month.value+'-'+day.value).getDay()
	var count = 0

	for(var i = 0 ; i<restaurants.length; i++){
		var r = restaurants[i]
		var rs = r.s[nowDay]
		var re = r.e[nowDay]
		if(rs == -1 || re == -1){
			continue
		}
		if(rs <= re){
			if( nowMins >= rs && nowMins <= re){
					var tradd=tab.insertRow()
		   			var cell =  tradd.insertCell()
		        	cell.innerHTML = r.name
		        	count++
			}
		}else{
			//跨日
			if(nowMins <= re || nowMins >= rs){
					var tradd=tab.insertRow()
		   			var cell =  tradd.insertCell()
		        	cell.innerHTML = r.name
		        	count++
			}
		}
	}

	var dayString = '日'
	if(nowDay > 0){
		dayString = nowDay
	}
	dayResult.innerText = '星期' + dayString + " 營業餐廳如下: 共計" + count + "間"
	

}





