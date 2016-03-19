(function(){
	var cont = 0;
	var key = 0;
	var flag = 0;
	var midnum = [];
	var bol;
	var lastnum;
	var elems;
	var ari;

	window.onload = function init(){
		midnum[0] = document.getElementById("mid1num");
		midnum[1] = document.getElementById("mid2num");
		bol = document.getElementById("bol");
		lastnum = document.getElementById("lastnum");
		document.getElementById("clr").addEventListener("click",clr,false);
		elems = document.getElementsByClassName("button");
		ari = document.getElementsByClassName("symbol");
		for(var i=0;i<=10;i++){
			elems[i].addEventListener("click",function(e){push(e.target.dataset.number);
				},false);
		}
		for(var i=0;i<5;i++){
			if(i==4){
				ari[i].addEventListener("click",eql,false);
			}else{
				ari[i].addEventListener("click",function(e){
					symbol(e.target.dataset.number);
				},false);
			}
		}
	}

	function push(new_num){
		if(flag==2||lastnum.value == "ERROR"){
			clr();
		}

		if(new_num != "."&&midnum[key].value=="0"){
			midnum[key].value = new_num;
		}else if(midnum[key]==""){
			midnum[key].value = "0.";
		}else{
			midnum[key].value += new_num;
		}
		flag=1;
	}

	function symbol(new_cont){
		if (key==0) {
			key = 1;
		}else if(flag==1||flag==2){
			eql();
			if(lastnum.value != "ERROR"){
				midnum[0].value = parseFloat(lastnum.value);
				midnum[1].value = "0";
				lastnum.value = "";
			}
		}
		if(midnum[1].value==""){
			midnum[1].value = "0";
		}

		cont = new_cont;
		switch(cont){
			case "0":
				bol.textContent = ("+");
				break;
			case "1":
				bol.textContent = ("-");
				break;
			case "2":
				bol.textContent = ("×");
				break;
			case "3":
				bol.textContent = ("÷");
				break;
		}
		flag = 0;
	}

	function eql() {
		switch(cont){
			case "0":
				lastnum.value = parseFloat(midnum[0].value) + parseFloat(midnum[1].value);
				break;
			case "1":
				lastnum.value = parseFloat(midnum[0].value) - parseFloat(midnum[1].value);
				break;
			case "2":
				lastnum.value = parseFloat(midnum[0].value) * parseFloat(midnum[1].value);
				break;
			case "3":
				if(parseFloat(midnum[1].value)==0){
					lastnum.value = "ERROR";
				}else{
					lastnum.value = parseFloat(midnum[0].value) / parseFloat(midnum[1].value);
				}
				break;
		}
		flag = 2;
	}

	function clr(){
		midnum[0].value = "0";
		bol.textContent = "";
		midnum[1].value = "";
		lastnum.value = "";
		key = 0;
	}
}());