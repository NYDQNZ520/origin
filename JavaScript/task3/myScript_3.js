var objroles = JSON.parse(sessionStorage.data);//读取缓存，重新转换为数组
console.log(objroles);
function clickCounter() {
    if (sessionStorage.clickcount) {
        sessionStorage.clickcount = Number(sessionStorage.clickcount)+0.5;  //每次点击+0.5
    } else {
         sessionStorage.clickcount = 1;
    }
    if (sessionStorage.clickcount % 1 == 0) {  //判断是否为整数，除1除的尽为整数
        if (sessionStorage.clickcount >= objroles.length) {
            document.getElementById("result").innerHTML = "法官查看";
            document.getElementById("p2").innerHTML = sessionStorage.clickcount;
            document.getElementById("img0").style.display="none";  //隐藏求翻牌
            document.getElementById("box1-box1").style.display="block";  //显示身份
            document.getElementById("p1").innerHTML = "角色:" + objroles[sessionStorage.clickcount-1];
            window.location.href = "http://118.126.113.248/jnshu784/JavaScript/task3/task7-2.html";

        } else {
        document.getElementById("p2").innerHTML = sessionStorage.clickcount;
        document.getElementById("img0").style.display="none";  //隐藏求翻牌
        document.getElementById("box1-box1").style.display="block";  //显示身份
        document.getElementById("p1").innerHTML = "角色:" + objroles[sessionStorage.clickcount-1];
        document.getElementById("result").innerHTML = "隐藏并传递给" + [Number(sessionStorage.clickcount)+1] + " 号身份";
        }
    } else {
        document.getElementById("p2").innerHTML = Number(sessionStorage.clickcount)+0.5;
        document.getElementById("result").innerHTML = "查看" + [Number(sessionStorage.clickcount)+0.5] + " 号身份";
        document.getElementById("img0").style.display="flex";
        document.getElementById("box1-box1").style.display="none";
    }
    console.log(sessionStorage.clickcount);
}