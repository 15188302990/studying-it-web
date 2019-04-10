let arr  = JSON.parse(sessionStorage.getItem("playerArray"));
console.log(arr);

var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);


//font-size的控制
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度
    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化

















//生成与数组对象相等的盒子
for (var n = 0;n < arr.length;n++) {
    $('main').append(`
<div class="player-box ${arr[n].live}"  >
<p class="role">${arr[n].role}</p>
<p class="player-num"><span >${arr[n].num}</span>号</p>
</div>
`);
}

//死亡玩家变色
$(".dead").css("opacity", "0.5");//使选中的盒子变色








//
// //点击盒子变色，使用jqurey实现(但是如何用原生实现jq的遍历效果，还不懂)
// $('.player-box').click(function () {
//     $(this).css("opacity", "0.5");//使选中的盒子变色
//     $(this).children("img").css("display", "block");//使选中的盒子的“小刀”图片出现
//     $(this).siblings(".1").css("opacity", "1");//使其他的盒子颜色恢复正常
//     $(this).siblings(".1").children("img").css("display", "none");//使其他的盒子的图片恢复正常
//     chooseBox=this;
//     return chooseBox;
// });