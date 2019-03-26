//总人数输入脚本
function sliderNum(playerNum) {//滑块移动发生的脚本
    document.getElementById("writeNum").value= playerNum ;//滑块总人数与键盘输入总人数数值同步
    minPlayerNum(playerNum);//判断最少人数


}
function writeNum(playerNum) {//书写发生的脚本
    document.getElementById("sliderNum").value= playerNum ;//键盘输入总人数与滑块总人数数值同步
    minPlayerNum(playerNum);//判断最少人数

}
//判断最少人数
  function minPlayerNum(playerNum) {
    if(playerNum>=4) {
        killerNum=1;
        if(playerNum>5){
            killerNum=2;
            if(playerNum>10){
                killerNum=3;
                if(playerNum>15){
                    killerNum=4;
                }
            }
        }
    }

    civilianNum =playerNum-killerNum;
    document.getElementById("killerNum").innerHTML= "杀&nbsp;&nbsp;&nbsp;&nbsp;手&nbsp;&nbsp;" + killerNum + "&nbsp;&nbsp;人;";
    document.getElementById("civilianNum").innerHTML= "平&nbsp;&nbsp;&nbsp;&nbsp;民&nbsp;&nbsp;" + civilianNum + "&nbsp;&nbsp;人;";
      console.log(killerNum);
    return killerNum;


}
//滑块input点击改变数值
function reduceNum() {
    a = document.getElementById("sliderNum").value - 1;//点击则-1
    if (a<4){//消除点击后会出现的3的bug
        a=4;
        return a;
    }
    document.getElementById("sliderNum").value = a;//将数值赋予value
    sliderNum(a);
    // document.getElementById("sliderNum").value = document.getElementById("sliderNum").value - 1;//形式1
    // sliderNum(document.getElementById("sliderNum").value);
}
function addNum() {
    // var b = parseFloat(document.getElementById("sliderNum").value);//形式2
    // b = b + 1;
    // document.getElementById("sliderNum").value = b;
    // sliderNum(b);
    document.getElementById("sliderNum").value =parseFloat( document.getElementById("sliderNum").value) + 1;//parseFloat数值化，而不让+进行字符串相连
    sliderNum(document.getElementById("sliderNum").value);

}
//输入总人数input数值监听
function monitorNum(playerNum) {
    if(playerNum<4) {
        playerNum = 4;
        alert("请输入正确数值（4-18）");
        sliderNum(playerNum);
    }
    if(playerNum>18) {
        playerNum = 18;
        alert("请输入正确数值（4-18）");
        sliderNum(playerNum);
    }
}


function getNumArray(arr) {
    var arr=document.getElementById("writeNum").value;
    var numArray = new Array(parseFloat(arr)).fill("平民");
    var killerArray = numArray.slice(0),count=parseFloat(killerNum);
    for (i=0;i < count;i++) {
        killerArray[i] = "杀手";
    }
    var shuffle = killerArray.slice(0), l = killerArray.length, temp,index;
    for (l>=0;l--;) {
        index = Math.floor((l+1) * Math.random());
        temp = shuffle[index];
        shuffle[index] = shuffle[l];
        shuffle[l] = temp;
    }
    console.log(shuffle);
    return shuffle;
}
//开始发牌脚本
function begin() {
    getNumArray();
    window.location.href = "Task2-check-role.html";
}
//返回脚本
function backLink() {
    window.location.href = "Task2-page.html";
}

//初始默认人数脚本
window.onload= onload();
function onload() {
    document.getElementById("sliderNum").value=8;
    sliderNum(8);
}



