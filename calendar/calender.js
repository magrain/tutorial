(function(){
	var day = [];//基準日
	var plan = new Array();
	var elements = [];
	var mid = [];
	var morn = [];
	var noon = [];
	var night = [];
	var flag = 1;
	var DAY_OF_THE_WEEK = ["日","月","火","水","木","金","土"];
	var side = [];
	var mon;

	window.onload = function (){
		day = new Date();
		now = document.getElementById("now");
		mon = document.getElementById("month");
		side = document.getElementsByClassName("side");
		elements = document.getElementsByClassName("date");
		mid = document.getElementsByClassName("Mid");
		morn = document.getElementsByClassName("Morning");
		noon = document.getElementsByClassName("Noon");
		night = document.getElementsByClassName("Night");
		day.setDate(day.getDate()-day.getDay());
		var def = document.getElementsByClassName("flag");
		def[0].addEventListener("click",function(){load(-14)},false);
		def[1].addEventListener("click",function(){load(0)},false);

		var req = new XMLHttpRequest();
		req.onreadystatechange = function(){
			if(req.readyState==4 && req.status==200){
       // console.log(req.responseText);
                                plan = JSON.parse(req.responseText);
				load(flag);
			}
		}
		req.open("GET","./GetJson",true);
		req.send(null);
	}
/*
	function send_by_post(){
		var req = new XMLHttpRequest();
		var plandate = document.getElementsByClassName("plandate");
		
		req.open("POST","./GetJson",true);
		req.setRequestHeader("Content-Type","application/json; charset=UTF-8");
		//httpのヘッター部にどのような形式のものを送ったかの指定
		req.send("dateplan="+plandate);
		req.onreadystatechange = function() {
			if (req.readyState == 4 && req.status==200) {
				alert("POST");
			}
		}
	}
*/
/*
	function init(flag){
		
	}
*/

	function display(getdate,i){
		for(var key = 0;key<plan.length;key++){
			if((plan[key]["month"]==(day.getMonth()+1))&&(plan[key]["date"]==(day.getDate()))){
				var hour = parseInt(plan[key]["begin"].substr(0,2));
				if(hour<6){
					mid[i].innerHTML += (
						plan[key]["begin"]+
						"/<button type='button' class='but' data-number="+key+">"+
						plan[key]["title"]+"</button><br>"
						);
				}else if(hour<12){
					morn[i].innerHTML += (
						plan[key]["begin"]+
						"/<button type='button' class='but' data-number="+key+">"+
						plan[key]["title"]+"</button><br>"
						);
				}else if(hour<18){
					noon[i].innerHTML += (
						plan[key]["begin"]+
						"/<button type='button' class='but' data-number="+key+">"+
						plan[key]["title"]+"</button><br>"
						);
				}else if(hour<24){
					night[i].innerHTML += (
						plan[key]["begin"]+
						"/<button type='button' class='but' data-number="+key+">"+
						plan[key]["title"]+"</button><br>"
						);
				}
			}
		}
	}

	function load(flag){
		if(flag<1){
			day.setDate(day.getDate()+flag);
			for(var j=0;j<7;j++){
				mid[j].textContent = "";
				morn[j].textContent = "";
				noon[j].textContent = "";
				night[j].textContent = "";
			}
		}

		var tday = new Date();
		mon.textContent = (day.getMonth()+1+"月"+tday.toLocaleString());
		for(var i = 0;i<DAY_OF_THE_WEEK.length;i++){
			elements[i].textContent = (day.getDate());
			if(plan.length != 0){
				display(day.getDate(),i);
			}
			day.setDate(day.getDate()+1);
		}

		var task = document.getElementsByClassName("but");
		for(var i=0;i<task.length;i++){
			task[i].addEventListener("click",
				function(e){tasks(e.target.dataset.number);},
				false
				);
		}
	}
	function tasks(x){
		var type = new Array("date","begin","end","place","title");
		for(var i=0;i<type.length;i++){
			side[i].textContent = (plan[x][type[i]]);
		}
	}
}());