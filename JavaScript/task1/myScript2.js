var x = document.getElementsByTagName("div");
var colors=['red','plum','blue','green','cyan','black','pink','gray','brown'];
btnstart.onclick=function(){//点击开始
    o=setInterval(function(){//使用定时器
        one();//调用函数
    },1000)//设置时间
}
btnend.onclick = function(){
    for(var i=0;i<x.length;i++){//每次随机颜色时遍历将背景设置好
    x[i].style.background="#ffa600";
    }
	clearInterval(o);//停止计时器
}
function one(){
	for(var i=0;i<x.length;i++){//每次随机颜色时遍历将背景设置好
        x[i].style.background="#ffa600";
    }
    var arr = new Array(3);//生成空数组格子
    var arr1 = new Array(3);
    for (var i=0; i<arr.length; i++) {
        var rnd = Math.floor(Math.random()*9);
        console.log(rnd);//监控rnd
        if(i==0){
            arr[i]=rnd;
        }else{
            for (var j=0; j<i; j++) {
            if(arr[j]==rnd){
                i--
            }else{
                arr[i]=rnd;
                }
            }
        }
    }
    for (var i=0; i<arr1.length; i++){
        var rnd = Math.floor(Math.random()*9);
        if(i==0){
            arr1[i]=rnd;
        }else{
            for (var j=0; j<i; j++) {
            if(arr1[j]==rnd){
                i--
            }else{
                arr1[i]=rnd;
                }
            }
        }
    }
    for(var i=0;i<arr.length;i++){
        x[arr[i]].style.background=colors[arr1[i]];//将随机的颜色给随机的地址
    }
}