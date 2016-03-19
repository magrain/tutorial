var kai = {};
(function(){	
	function check(){
		var cont = 0;
		var contn = 0;
		var i = 10;
		var num = 0;
		var chaf = 0;
		var cha = 0;
		var sym = 0;
		var lv = "</br>";
		var pa = document.getElementById("passName");
		var pr = document.getElementById("passoutAll");
		var er = document.getElementById("er");
		var res = document.getElementById("result");
		var adv = document.getElementById("adv");
		var word = pa.value;
		pr.innerHTML = word;
		if(word.match(/[^\x01-\x7E]/)){
			adv.innerHTML = "";
			er.innerHTML = "エラー：全角文字が入っています！"
		}else{
			er.innerHTML = "";
			if(word.match(/[0-9]/g)){
				while(i != 0){
					i--;
					if(word.match(i))
						num++;
				}
				lv += "数字:"+num+"種";
				contn++;
			}
			if(word.match(/[a-z]/g)){
				chaf++;
				lv += "小文字英字:OK ";
			}
			if(word.match(/[A-Z]/g)){
				cha++;
				lv += "大文字英字:OK ";
			}
			if(word.match(/[\W_]/g)){
				sym++;
				lv += "記号:OK";
			}
			cont = contn + chaf + cha + sym;
			if(cont == 4){
				res.innerHTML=("数字,大英字,小英字,記号の4種類使用したパスワードです。</br>忘れずに覚えておきましょう。定期に更新しましょう。");
			}	
			else{
				res.innerHTML=("数字,大英字,小英字,記号の内"+cont+"種類使用したパスワードです。</br>あと"+(4-cont)+"種類増やしましょう。");
			}	
		}
		adv.innerHTML = lv;
	}
	kai.check = check; 
})();