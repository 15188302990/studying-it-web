let arr  = JSON.parse(sessionStorage.getItem("playerArray"));
console.log(arr);

//得到天数，进程、时刻数值
var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);

var livingKillerNum = JSON.parse(sessionStorage.getItem("livingKillerNum"));
var livingCivilianNum = JSON.parse(sessionStorage.getItem("livingCivilianNum"));

var civilianPhrase = JSON.parse(sessionStorage.getItem("civilianPhrase"));
var killerPhrase = JSON.parse(sessionStorage.getItem("killerPhrase"));

//font-size的控制
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度
    if(width>440){
        width=440;
    }
    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化



//根据天数，生成内容盒子
for (var n = 1;n <playDay;n++) {
    $(".gameProcess").append(`
<div class="process day-${n}">
    <p class="process-date">第<span >${n}</span>天</p>
    <p class="process-night"></p>
<p class="process-day"></p>
</div>
`);
}

$(".surplus-player").append(`
<p>杀&emsp;手&ensp;${livingKillerNum}&ensp;人</p>
<p>平&emsp;民&ensp;${livingCivilianNum}&ensp;人</p>
`);
$(".phrase").append(`
<p>杀手词汇：${killerPhrase}</p>
<p>平民词汇：${civilianPhrase}</p>
`);

//插入游戏日志，把每天死人放到相应的位置
for (i=0;i<arr.length;i++) {
    if (arr[i].live==="dead") {//找出死亡的玩家
        if (arr[i].day % 1===0.5) {//判断为杀手杀死的
            pastDay=parseInt(arr[i].day);//判断是哪天杀死的
            console.log(pastDay);
            pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
            $("."+pastDayBoxClass).children(".process-night").append(`
晚上：<span class="deader-num">${arr[i].num}</span>号被杀手临幸，真是身份是<span class="deader-role">${arr[i].role}</span>`)
        }
        else {
            console.log((arr[i].day % 1).toFixed(1));
            if ((arr[i].day % 1).toFixed(1)==="0.8") {//判断为全民投票杀死的//知识点四js浮点型计算
                pastDay=parseInt(arr[i].day);//判断是哪天杀死的
                console.log(pastDay);
                pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
                $("."+pastDayBoxClass).children(".process-day").append(`
白天：<span class="deader-num">${arr[i].num}</span>号被投票杀死，真是身份是<span class="deader-role">${arr[i].role}</span>`)
            }
        }
    }
}