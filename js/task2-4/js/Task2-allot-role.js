//获取储存值
let arr  = JSON.parse(sessionStorage.getItem("shuffleArr"));
console.log(arr);

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

//点击返回
function backLink() {
    window.location.href = "Task2-role-num.html";
}
function endLink() {
    var a=confirm("是否结束本轮游戏");
    if (a===true){
        window.location='Task2-page.html';
        localStorage.removeItem('key');
        sessionStorage.clear();
    }
}
// //
var i=0;
var changeImg = document.getElementById('role-img');
var changeButtonText = document.getElementById("checkButton");
var changeRoleText = document.getElementById("role-text");
var changeRoleNum = document.getElementById("role-num");


var civilianPhrase = JSON.parse(sessionStorage.getItem("civilianPhrase"));
console.log(civilianPhrase);
var killerPhrase = JSON.parse(sessionStorage.getItem("killerPhrase"));
console.log(killerPhrase);





function seeRole() {

    if(i<(2*arr.length - 1)) {

        l = parseInt(i / 2) + 2;//下一个玩家的序号，因为是从0开始算，所以是+2。
        // console.log(l);
        if (l <= arr.length) {//l代表下一个玩家的序号
            changeButtonText.innerHTML = "隐藏并传递给" + l + "号";//再没有到最后一个玩家之前，显示传递给下一个玩家
        }
        else {
        changeButtonText.innerHTML = "查看法官页面";//当下一个玩家是最后一个玩家时，出现查看法官页面
        }


        if (i % 2 === 0) {//当余数为0时，进行显示角色
            changeImg.src = "../images/check-role/img-1.png";
            if (arr[i / 2] === "杀手") {// “i/2”代表数组的第几个值。
                changeRoleText.innerHTML = "你是杀手，词组" + killerPhrase+ "。保护自己身份，并猜出他人的词";
            }
            else {
                changeRoleText.innerHTML = "你是平民，词组" +civilianPhrase +"。保护自己身份，并猜出他人的词";
            }
        }
        else {//当余数为1时，进行重置
            changeImg.src = "../images/check-role/img-0.png";
            changeRoleText.innerHTML = "";
            changeButtonText.innerHTML = "查看" + l + "号身份";
            changeRoleNum.innerHTML = l;
        }
        i = i + 1;
        return i;

    }
    else {
        window.location.href = "Task2-judge-check.html";
    }
}