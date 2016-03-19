(function(){
	var new_task = [];
	var task_date = [];
	var priority = [];
	var prioritys = new Array("Hurry"," Normal","Anytime")
	var contents = [];
	var Replace = false;
	window.onload = function (){
		new_task = document.getElementsByClassName("new_task");
		priority = document.getElementsByName("priority");
		contents = document.getElementById("date");
		var btn = document.getElementsByClassName("button");
		btn[0].addEventListener("click",function(){title_sort();},false);
		btn[1].addEventListener("click",function(){limit_sort();},false);
		btn[2].addEventListener("click",function(){priority_sort();},false);
		btn[3].addEventListener("click",function(){priority_sort();},false);
		btn[4].addEventListener("click",function(){priority_sort();},false);
		btn[5].addEventListener("click",function(){Add_task();},false);
	}

	function Add_task(){
		if(new_task[0].value == ""){
			alert("task_title = null !!");
			return;
		}

		for(var i in priority){
			if(priority[i].checked){
				task_date[task_date.length] = {"title":new_task[0].value,"limit":new_task[1].value,"priority":i};

				task_date.sort(function(a,b){
					if(a.limit > b.limit) return 1;
					if(a.limit < b.limit) return -1;
					return 0;
				});
				new_task[0].value = "";
				new_task[1].value = "1st";
				break;
			}
		}
		Ascend_Order();
		//sort()
	}
	function title_sort(){
		task_date.sort(function(a,b){
			if(a.title > b.title) return 1;
			if(a.title < b.title) return -1;
			return 0;
		});
		if(Replace){
			Descend_Order();
		}else{
			Ascend_Order();
		}
	}

	function limit_sort(){
		task_date.sort(function(a,b){
			if(parseInt(a.limit) >parseInt( b.limit)) return 1;
			if(parseInt(a.limit) < (b.limit)) return -1;
			return 0;
		});
		if(Replace){
			Descend_Order();
		}else{
			Ascend_Order();
		}
	}

	function priority_sort(){
		task_date.sort(function(a,b){
			if(a.priority > b.priority) return 1;
			if(a.priority < b.priority) return -1;
			return 0;
		});
		if(Replace){
			Descend_Order();
		}else{
			Ascend_Order();
		}
	}

	function Ascend_Order(){
		contents.innerHTML = "";
		Replace = true;
		for(var i in task_date){
			contents.innerHTML += "Title:"+task_date[i]["title"]+"  ";
			contents.innerHTML += "Day:"+task_date[i]["limit"]+"  ";
			contents.innerHTML += "Priority:"+ prioritys[task_date[i]["priority"]];
			contents.innerHTML += "<br>";
		}
	}


	function Descend_Order(){
		contents.innerHTML = "";
		Replace = false;
		for(var i = task_date.length-1;i >= 0; i--){
			contents.innerHTML += "Title:"+task_date[i]["title"]+"  ";
			contents.innerHTML += "Day:"+task_date[i]["limit"]+"  ";
			contents.innerHTML += "Priority:"+prioritys[task_date[i]["priority"]];
			contents.innerHTML += "<br>";
		}
	}

}())