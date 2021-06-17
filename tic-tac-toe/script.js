var i = 0;
		var flag = 0;
		var j = 0;
        function fn(x) {
            if (x.innerHTML == ""){
                if(i % 2 == 0){
                    x.innerHTML = "O"; 
                }
                else{
					x.innerHTML = "X";
                }
                i++;
            }
			win('1','2','3');
			win('4','5','6');
			win('7','8','9');
			win('1','4','7');
			win('2','5','8');
			win('3','6','9');
			win('1','5','9');
			win('3','5','7');
        }
		function win(x,y,z){
			var a = document.getElementById(x);
			var b = document.getElementById(y);
			var c = document.getElementById(z);
			
			if(a.innerHTML == 'O' && b.innerHTML == 'O' && c.innerHTML == 'O'){
				alert("O win!!!");
				flag=1;
			}
			if(a.innerHTML == 'X' && b.innerHTML == 'X' && c.innerHTML == 'X'){
				alert("X win!!!");
				flag=1;
			}
			j++;
			if(j=="72" && flag=="0"){
                alert("Draw!!!");
                flag=1;
            }
            if(flag=="1"){
                reset();
            }
        }
        function reset(){
            var a = document.getElementById("1");
            var b = document.getElementById("2");
            var c = document.getElementById("3");
            var d = document.getElementById("4");
            var e = document.getElementById("5");
            var f = document.getElementById("6");
            var g = document.getElementById("7");
            var h = document.getElementById("8");
            var k = document.getElementById("9");

            a.innerHTML="";
            b.innerHTML="";
            c.innerHTML="";
            d.innerHTML="";
            e.innerHTML="";
            f.innerHTML="";
            g.innerHTML="";
            h.innerHTML="";
            k.innerHTML="";

            i=0;
            j=0;
            flag=0;
        }