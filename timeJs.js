window.onload=function(){
	var oDiv1=document.getElementById('div1')
	var oYear=oDiv1.getElementsByTagName('img')
	var oDiv2=document.getElementById('div2')
	var oDay=oDiv2.getElementsByTagName('img')
	var aYears =Array.prototype.slice.call(oYear)
    aYears.splice(4,1)
    aYears.splice(6,1)
    aYears.splice(8,1)//删除“年”“月”“日”的三行
    var aDays =Array.prototype.slice.call(oDay)
    aDays.splice(2,1)
    aDays.splice(4,1)
    aDays.splice(6,1)
    var str3=['seven',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',]
	timeChange()	
	function timeChange(){
	var Dt=new Date()
	var str1
	var str2
	getDayTime()
	getYearTime()
	function checkTime(a ){
		if (a<10) {
			return '0'+a
		}
		else return ""+a	
	}
   
setInterval(timeChange,1000)
    function getYearTime(){
    	var str2=checkTime(Dt.getFullYear())+checkTime(Dt.getMonth()+1)+checkTime(Dt.getDate())
	for(var i in aYears){	
			aYears[i].src='image/'+str2[i]+'.png'
    }
}
function getDayTime(){
	
	var str1=checkTime(Dt.getHours())+checkTime(Dt.getMinutes())+checkTime(Dt.getSeconds())
	
	for(var i in aDays){	
		if(i==6){

			aDays[i].src='image/'+str3[Dt.getDay()]+'.png'
		}

			else aDays[i].src='image/'+str1[i]+'.png'	
	}
}
}
}