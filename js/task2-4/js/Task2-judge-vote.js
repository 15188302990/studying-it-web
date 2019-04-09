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

//右上角按钮提示
function endLink() {
    var a=confirm("是否结束本轮游戏");
    if (a===true){
        window.location='Task2-page.html';
        localStorage.removeItem('key');
        sessionStorage.clear();
    }
}

//生成与数组对象相等的盒子
for (var n = 0;n < arr.length;n++) {//<div class="player-box ${arr[n].live}" >中的${arr[n].live}是为了方便寻找已经死的玩家。
    $('main').append(`
<div class="player-box ${arr[n].live}"  >
<p class="role">${arr[n].role}</p>
<p class="player-num"><span >${arr[n].num}</span>号</p>
<img src="../images/judge-vote/icon-killing.png">
</div>
`);
}

//不同的游戏进程，header内容不同。
function getTips() {
    if (playProcess === 0.5) {//当再杀手杀人时运行
        $(".h-title").children("p").append(`杀手杀人`);
        $("#headerTips").append(`<p>杀手请瞪大眼珠子，选择要杀的对象</p>`);
        $(".h-tips-click").append(`点击下方玩家头像，对被杀死的玩家进行标记`);
    }
    else {//当再全民投票时运行
        $(".h-title").children("p").append(`全民投票`);
         $("#headerTips").append(`<p>发言讨论结束，大家请投票</p>`);
        $(".h-tips-click").append(`点击得票数最多的人的头像`);
    }
}
getTips();//加载完就运行此功能

//加载完，就对死亡玩家变色
$(".dead").css("opacity", "0.5");//使选中的盒子变色。0对应了${arr[n].live},即死了的玩家



//点击盒子变色，使用jqurey实现(但是如何用原生实现jq的遍历效果，还不懂)
$('.survival').click(function () {//1对应了${arr[n].live},即或者的玩家
    $(this).css("opacity", "0.5");//使选中的盒子变色
    $(this).children("img").css("display", "block");//使选中的盒子的“小刀”图片出现
    $(this).siblings(".survival").css("opacity", "1");//使其他的盒子颜色恢复正常
    $(this).siblings(".survival").children("img").css("display", "none");//使其他的盒子的图片恢复正常
    chooseBox=this;
    return chooseBox;
});


//
//
//投票
$(".voteButton").click(function () {
        var q = $(".player-box").index(chooseBox);//.index是返回一个数值，这个数值是“.player-box”盒子（html里有很多这个盒子，但是默认第一个）与刚点击的盒子之间的距离。
        console.log(q);
        console.log(arr[q].role);
        if (arr[q].live === "survival") {//判断是否是活人

            if (playProcess === 0.5) {//当再杀手杀人时运行
                if (arr[q].role === "杀手") {//判断这个盒子所对应的数组中的对象的角色属性是否是杀人，如果杀手则提示不能杀自己。
                    alert("不要杀自己啊");
                }
                else {//如果不是杀手，即是平民，则使它的生存状态改变。
                    arr[q].live = "dead";//则使它的生存状态改变。即死人
                    arr[q].day = playNow;//改变天数属性，以便于标记什么时刻杀死，即标记为杀手杀死
                    console.log(arr);
                    sessionStorage.setItem("playerArray", JSON.stringify(arr));//储存新数组;//将改变的数组的保存到浏览器。
                    result();
                    // window.location.href = "Task2-game-process.html";//跳转到游戏进程控制页面。
                }
            }
            else {//当再全民投票时运行
                arr[q].live = "dead";//如果不是杀人，即是平民，则使它的生存状态改变。
                arr[q].day = playNow;//改变天数属性，以便于标记什么时刻杀死，即标记为全民投票杀死
                sessionStorage.setItem("playerArray", JSON.stringify(arr));//储存新数组;//将改变的数组的保存到浏览器。
                console.log(arr);
                // 重置游戏进程，生成新的游戏天数，新的时刻
                playProcess = 0;// 重置游戏进程
                console.log("此时游戏进程为" + playProcess);
                sessionStorage.setItem("playProcess", JSON.stringify(playProcess));
                playDay = playDay + 1;// 生成新的游戏天数
                console.log("此时游戏天数为" + playDay);
                sessionStorage.setItem("playDay", JSON.stringify(playDay));
                playNow = playDay + playProcess;// 生成新的时刻
                console.log("此时游戏时刻为" + playNow);
                sessionStorage.setItem("playNow", JSON.stringify(playNow));


                result();
                // window.location.href = "Task2-game-process.html";//跳转到游戏进程控制页面。
            }
        }
        else {
            alert("不要鞭尸啊，换一个人吧");
        }
    }
);

//判断游戏结果的人
function result() {
    var livingKillerNum=0;
    var livingCivilianNum=0;
    for (n = 0;n < arr.length;n++) {//判断活着的人
        if (arr[n].live === "survival" && arr[n].role === "杀手") {//活着为杀手，则杀手数目+1
            livingKillerNum++;
        }
        if (arr[n].live === "survival" && arr[n].role === "平民") {//活着为杀手，则杀手数目+1
            livingCivilianNum++;
        }
    }
    console.log(livingKillerNum);
    console.log(livingCivilianNum);
    sessionStorage.setItem("livingKillerNum", JSON.stringify(livingKillerNum));
    sessionStorage.setItem("livingCivilianNum", JSON.stringify(livingCivilianNum));
    switch (true) {
        case livingKillerNum===1 && livingCivilianNum===1 ://判断与杀手杀人后，如果平民=杀手=1，则为平局
            alert("平局");
            location.href = "Task2-result.html";//跳转到游戏结果日志页面。
            break;
        case livingKillerNum>1 && livingCivilianNum===1 ://判断与杀手杀人后，但平民=1，若杀手＞1，则为杀手必胜利
            alert("杀手胜利");
            location.href = "Task2-result.html";//跳转到游戏结果日志页面。
            break;
        case livingKillerNum===0 ://判断与投票后，若杀手死亡则，平民胜利
            alert("平民胜利");
            location.href = "Task2-result.html";//跳转到游戏结果日志页面。
            break;
        case livingKillerNum===livingCivilianNum && livingKillerNum===1 ://判断与投票后，若杀手=平民，则杀手赢，为了排除第一个判断的影响，加上livingKillerNum===1。
            alert("杀手胜利");
            location.href = "Task2-result.html";//跳转到游戏结果日志页面。
        default:

            location.href = "Task2-game-process.html";//跳转到游戏进程控制页面。
    }
}
