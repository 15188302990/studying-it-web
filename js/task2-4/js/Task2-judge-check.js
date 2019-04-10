//font-size的控制
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度

    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化

//提取储存的数组（字符串）
let arr  = JSON.parse(sessionStorage.getItem("shuffleArr"));
console.log(arr);

//
// function backLink() {
//     var a=confirm("是否重新进行查看身份");
//     if (a===true){
//         window.location='Task2-allot-role.html';
//         localStorage.removeItem('key');
//         sessionStorage.clear();
//     }
// }
function backLink() {
    window.location='Task2-allot-role.html';
}
function endLink() {
    var a=confirm("是否结束本轮游戏");
    if (a===true){
        window.location='Task2-page.html';
        localStorage.removeItem('key');
        sessionStorage.clear();
    }
}



for (var n = 0;n < arr.length;n++) {
    $('main').append(`
<div class="player-box">
<p class="role">${arr[n]}</p>
<p class="player-num"><span class="id">${n+1}</span>号</p>
</div>
`);
}


//将数组里的字符串变成对象
var  playerArray= []; //建立一个新数组 ，数组用[]，对象用{}
for (i=0;i<arr.length;i++) {//根据arr数组循环判断，为playerArray数组填写相同长度的内容
    playerArray.push({role:arr[i], num:i+1, live: "survival",day:1}) //.push 为playerArray数组添加内容。{}代表对象，{}里的是属性，每个属性用逗号隔开
}
console.log(playerArray);
sessionStorage.setItem("playerArray",JSON.stringify(playerArray));//储存新数组

var playday=1;//原始游戏天数
console.log("此时游戏天数为"+playday);
sessionStorage.setItem("playDay",JSON.stringify(playday));//将天数保存到浏览器。
var playprocess=0;//原始游戏进程
console.log("此时游戏进程为"+playprocess);
sessionStorage.setItem("playProcess",JSON.stringify(playprocess));//将进程保存到浏览器。
var playnow=playday+playprocess;
console.log("此时游戏时刻为"+playnow);
sessionStorage.setItem("playNow",JSON.stringify(playnow));//将时刻保存到浏览器。