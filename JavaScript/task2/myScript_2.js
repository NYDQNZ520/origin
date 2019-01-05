function myFunction(){ 
	if (inputNumber.value>18 || inputNumber.value<4) {
		window.alert("请输入正确的玩家数量");
	}else{
		inputNumber.value=rangeNumber.value;
	}
   if (carname != undefined) {
       window.location.href = "http://118.126.113.248/jnshu784/JavaScript/task3/fenpeiye.html";
       //已配置身份转到下一个页面
   } else {
       alert("请先点击设置玩家身份哦");
   }
}
var inputNumber = document.getElementById("inputNumber");
var rangeNumber = document.getElementById("rangeNumber");
//玩家人数的输入框与滚动条同步
//滚动条改变玩家人数随着改变
function change(){
    inputNumber.value=rangeNumber.value;
}
//减号按钮与滚动条同步
function btLeft(){
    rangeNumber.value--;
    if(inputNumber.value<=4) {
        alert("人数不足，请凑好再来");
    }
    else{
        inputNumber.value=rangeNumber.value;
    }
}
//加号按钮与滚动条同步
function btRight(){
    rangeNumber.value++;
    if(inputNumber.value>=18) {
        alert("人数太多，请分开游戏");
    }
    else{
        inputNumber.value=rangeNumber.value;
    }
}
//获取杀手数量和平民数量
function makeId() {
	var x=document.getElementById("inputNumber").value;
    var killer = [];  //杀手数组的声明
    var civy = [];  //平民数组的声明
    if (x > 18 || x < 4) {
        return;
    }
    if (x == undefined) {
        return;
    }
    if (x >= 4 && x < 6) {
        killer.length = 1;
        civy.length = x - killer.length;
    } else if (x >= 6 && x < 9) {
        killer.length = 2;
        civy.length = x - killer.length;
    } else if (x >= 9 && x < 12) {
        killer.length = 3;
        civy.length = x - killer.length;
    } else if (x >= 12 && x < 16) {
        killer.length = 4;
        civy.length = x - killer.length;
    } else if (x>=16){
        killer.length = 5;
        civy.length = x - killer.length;
    }
    document.getElementById("play1").innerHTML = killer.length;  //杀手数量
    document.getElementById("play2").innerHTML = civy.length;  //平民数量
    for (var i = 0; i < killer.length; i++){
        killer[i] = "杀手";  //生成杀手数组
    }
    for (var j = 0; j < civy.length; j++){
        civy[j] = "平民";  //生成平民数组
    }
    var allplayer = killer.concat(civy); //将杀手和平民的数组合并
    for (var n = 0; n < inputNumber.value; n++){
        var all = n + Math.floor( Math.random()*(inputNumber.value - n));
        var k = allplayer[n];
        allplayer[n]=allplayer[all];
        allplayer[all] = k;  //将身份牌打乱
    }
    console.log(allplayer);
    carname = JSON.stringify(allplayer);  //转换为字符串
    sessionStorage.data = carname;  //存入
}
var carname;