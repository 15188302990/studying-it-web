let arr  = JSON.parse(sessionStorage.getItem("playerArray"));
console.log(arr);

//得到天数，进程、时刻数值
var playDay = JSON.parse(sessionStorage.getItem("playDay"));
console.log("此时游戏天数为"+playDay);
var playProcess = JSON.parse(sessionStorage.getItem("playProcess"));
console.log("此时游戏进程为"+playProcess);
var playNow = JSON.parse(sessionStorage.getItem("playNow"));
console.log("此时游戏时刻为"+playNow);


function backLink() {
    window.location.href = "Task2-judge-check.html";
}


function endLink() {
    var a=confirm("是否结束本轮游戏");
    if (a===true){
        window.location='Task2-page.html';
        localStorage.removeItem('key');
        sessionStorage.clear();
    }
}

function checkLink() {
    window.location.href = "Task2-judge-diary.html";
}


//插入新一页
for (i=0;i<=playDay;i++){
    console.log(playDay);
    newDay="day-"+i;
    $('.'+ newDay).append(`
<div class="grid-title grid-row">
        <p></p>
        <span class="date">第${i}天</span>
        <img class="icon" src="../images/game-process/gird-title-r.png" >
    </div>
        <div class="count">
    <div class="grid-count grid-row">
        <div class="time-icon">
            <p></p>
            <img src="../images/game-process/gird-icon-night.png"/>
            <p></p>
        </div>
        <span class="arrow"></span>
        <p class="acting killer" type="button" >杀手杀人</p>
    </div>
    <div id="grid-deader-killer"></div>
    <div class="grid-count grid-row">
        <div class="time-icon">
            <p></p>
            <img src="../images/game-process/gird-icon-day.png"/>
            <p></p>
        </div>
        <span class="arrow"></span>
        <p class="acting deader" >亡灵发表遗言</p>
    </div>
    <div class="grid-count grid-row">
        <div class="time-icon">
            <p></p>
            <p></p>
        </div>
        <span class="arrow"></span>
        <p class="acting liver" >玩家依次发言</p>
    </div>
    <div class="grid-count grid-row">
        <div class="time-icon">
            <p></p>
            <p></p>
        </div>
        <span class="arrow"></span>
        <p class="acting vote" >投票</p>
    </div>
      <div id="grid-deader-player"></div>
    </div>
`)
}

//插入亡灵
for (i=0;i<arr.length;i++) {
    if (arr[i].live==="dead") {//找出死亡的玩家
        console.log(i);
        console.log(arr[i].day);
        console.log(1.5%1);
        console.log(arr[i].day % 1);
        if (arr[i].day % 1===0.5) {//判断为杀手杀死的
            pastDay=parseInt(arr[i].day);//判断是哪天杀死的
            console.log(pastDay);
            pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
            $("."+pastDayBoxClass).children(".count").children('#grid-deader-killer').append(`<div class="grid-count grid-row">
    <div class="time-icon">
    <p></p>
    <p></p>
    </div>
    <p class="deader-tip" ><span class="deader-num">${arr[i].num}</span>号被杀手杀人，真是身份是<span class="deader-role">${arr[i].role}</span></p>
   </div>`)
        }
        else {
            console.log(arr[i].day );
            console.log(arr[i].day % 1);
            console.log((arr[i].day % 1).toFixed(1));
            if ((arr[i].day % 1).toFixed(1)==="0.8") {//判断为全民投票杀死的//知识点四js浮点型计算
                pastDay=parseInt(arr[i].day);//判断是哪天杀死的
                console.log(pastDay);
                pastDayBoxClass="day-"+pastDay;//放入到对应的天数页面下
                $("."+pastDayBoxClass).children(".count").children('#grid-deader-player').append(`<div class="grid-count grid-row">
    <div class="time-icon">
    <p></p>
    <p></p>
    </div>
    <p class="deader-tip" ><span class="deader-num">${arr[i].num}</span>号被投票杀死，真是身份是<span class="deader-role">${arr[i].role}</span></p>
   </div>`)
            }
        }
    }
}


//顺序点击

//防止点击刷新后失效。(自动生效)
if ( playNow > playDay){
    console.log("此时游戏时刻为"+playNow);
    $(".killer").css("opacity", "0.5");
    $(".killer").siblings("span").css("opacity", "0.5");
}
if ( playNow > playDay+0.5){
    $(".deader").css("opacity", "0.5");
    $(".deader").siblings("span").css("opacity", "0.5");
}
if ( playNow > playDay+0.6){
    $(".liver").css("opacity", "0.5");
    $(".liver").siblings("span").css("opacity", "0.5");
}

//点击跳转杀人
$('.killer').click(function () {
    if (playNow === playDay) {
        window.location.href = "Task2-judge-vote.html";
        playProcess=0.5;
        console.log("此时游戏进程为"+playProcess);
        sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
        playNow=playDay+playProcess;
        console.log("此时游戏时刻为"+playNow);
        sessionStorage.setItem("playNow", JSON.stringify(playNow));
    }
    else {
        alert("请按顺序点击");
    }
});
//点击提示死者发言，并变色，再点击出现提示
$(".deader").click(function () {
    if (playNow === playDay+0.5){
        alert("请死者亮明身份并且发表遗言");
        $(this).css("opacity", "0.5");
        $(this).siblings("span").css("opacity", "0.5");
        playProcess=0.6;
        console.log("此时游戏进程为"+playProcess);
        sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
        playNow=playDay+playProcess;
        console.log("此时游戏时刻为"+playNow);
        sessionStorage.setItem("playNow", JSON.stringify(playNow));
    }
    else {
        alert("请按顺序点击");
    }
});
//点击提示玩家发言，并变色，再点击出现提示
$(".liver").click(function () {
    if (playNow ===playDay+0.6){
    alert("玩家依次发言讨论");
        $(this).css("opacity", "0.5");
        $(this).siblings("span").css("opacity", "0.5");
        playProcess=0.7;
        console.log("此时游戏进程为"+playProcess);
        sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
        playNow=playDay+playProcess;
        console.log("此时游戏时刻为"+playNow);
        sessionStorage.setItem("playNow", JSON.stringify(playNow));
    }
    else {
        alert("请按顺序点击");
    }
});
//点击跳转投票
$(".vote").click(function () {
    if (playNow ===playDay+0.7){
        window.location.href = "Task2-judge-vote.html";
        playProcess=0.8;
        console.log("此时游戏进程为"+playProcess);
        sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
        playNow=playDay+playProcess;
        console.log("此时游戏时刻为"+playNow);
        sessionStorage.setItem("playNow", JSON.stringify(playNow));
    }
    else {
        alert("请按顺序点击");
    }
});


//点击标题，内容隐藏
$(".grid-title").click(function (){
    if ($(this).siblings().css("display") == "block") {//3号知识1
        $(this).siblings().css("display", "none");}
    else {
        $(this).siblings().css("display", "block");}
    }
);
//过去的自动判断，不可点击
for (i=1;i<playDay;i++) {
    console.log(playDay);
    pastDay="day-"+i;
    console.log(pastDay);
    $("."+pastDay).children(".count").css({"opacity":"0.5","display":"none"}).off('click');//变色
    $("."+pastDay).children(".count").children().children().off('click');//禁点
}









