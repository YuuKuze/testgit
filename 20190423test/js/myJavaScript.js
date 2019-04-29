	function tijiao(){
			var userName= document.forms["myForm"]["userName"].value;
			var passwd= document.forms["myForm"]["passwd"].value;
			if(userName==null||userName==""||passwd==""||passwd==null){
				alert("账号密码不能为空");
			}
			var reg=/^[a-z][0-9]{8}$/i
			if(reg.test(userName)&&userName!=null&&userName!=""){
				alert("符合正则表达式");
				document.getElenmentById('message').innerHTML="";
			}else{
				//alert("不符合正则");
				document.getElenmentById('message').innerHTML="字母开头,后面8位位数字";
			}
	}
	var num=1;
	function myClick(obj){
		if(num%2==1){
		obj.style.backgroundColor='red';
		}else{
		obj.style.backgroundColor='blue';
		}
		this.num=num+1;
	}
	var reg=/^[a-z][0-9]{8}$/i;
	var test='{"exp":[{"fs":"i have","ls":"a plan"},{"fs":"Yuu","ls":"Kuze"}]}';	
	obj=JSON.parse(test);
	document.getElementById('demo').innerHTML=obj.exp[0].fs+" "+obj.exp[0].ls;
	document.getElementById('aButton').addEventListener("click",function aButton(){ alert("呵呵"); });
	document.getElementById('s1').addEventListener("click",function backMouseover(){
		if(!reg.test(document.getElementById('t1').value)){
			document.getElementById('t1').style.backgroundColor='#FFE4E1';
			document.getElementById('t1').value="";
			document.getElementById('t2').value="";
			document.getElementById('myForm').action="javascript:void(0)";
			alert("字母开头其余为数字，总共9位");
		}else{
			document.getElementById('myForm').action="";
		}
		
		});
	document.getElementById('t2').addEventListener("click",function backMouseover(){
		if(!reg.test(document.getElementById('t1').value)||document.getElementById('t1').value==null||document.getElementById('t1').value==""){
			document.getElementById('t1').style.backgroundColor='#FFE4E1'
			document.getElementById('t1').value="";
			document.getElementById('t2').value="";
			document.getElementById('myForm').action="javascript:void(0)";
			alert("字母开头其余为数字，总共9位");
		}else{
			document.getElementById('myForm').action="";
		}		
		});
var myVar=setInterval(function(){myTimer()},1000);
function myTimer(){
	var d= new Date();
	var t= d.toLocaleTimeString();
	document.getElementById("demo").innerHTML=t;
}
var x= document.cookie;
alert(x);