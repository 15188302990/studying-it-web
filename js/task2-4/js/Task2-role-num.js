//总人数输入脚本
function sliderNum(sliderValue) {//滑块移动发生的脚本
    document.getElementById("writeNum").value= sliderValue ;//滑块总人数与键盘输入总人数数值同步
    minPlayerNum(sliderValue);//判断杀手和平民人数
}
function writeNum(writenValue) {//书写发生的脚本
    document.getElementById("sliderNum").value= writenValue ;//键盘输入总人数与滑块总人数数值同步
    minPlayerNum(writenValue);//判断杀手和平民人数
}
//判断杀手和平民人数 var killerNum,civilianNum;
function minPlayerNum(playerNum) {
    killerNum = Math.ceil(playerNum/5);
    civilianNum = playerNum-killerNum;
    document.getElementById("killerNum").innerHTML=killerNum;
    document.getElementById("civilianNum").innerHTML= civilianNum ;
    return killerNum;
}
//滑块input点击改变数值
function reduceNum() {
    document.getElementById("sliderNum").value = document.getElementById("sliderNum").value - 1;//形式1
    sliderNum(document.getElementById("sliderNum").value);
}
function addNum() {
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
//打乱数组
function getNumArray() {
    var arr = document.getElementById("writeNum").value;//获取总人数值
    var numArray = new Array(parseFloat(arr)).fill("平民");//创建长度为总人数值，全部为平民的数组
    var killerArray = numArray.slice(0),count=parseFloat(killerNum);//开始得到有杀手的数组，count为杀人数
    for (i=0;i < count;i++) {//将杀手换进数组，得到杀人数组
        killerArray[i] = "杀手";
    }
    var shuffle = killerArray.slice(0), l = killerArray.length, temp,index;//开始打乱数组
    for (l>=0;l--;) {//打乱l次后输出结果
        index = Math.floor((l+1) * Math.random());
        temp = shuffle[index];
        shuffle[index] = shuffle[l];
        shuffle[l] = temp;
    }
    console.log(shuffle);
    return shuffle;
}
//开始发牌
function begin() {
    // getNumArray(); //开始打乱数组
    if (civilianPhrase.value == '' || killerPhrase.value == '' ) {
        alert("请输入词组")
    }
    else {
    sessionStorage.setItem("civilianPhrase",JSON.stringify(civilianPhrase.value));
    sessionStorage.setItem("killerPhrase",JSON.stringify(killerPhrase.value));
    sessionStorage.setItem("shuffleArr",JSON.stringify(getNumArray()));
    window.location.href = "Task2-allot-role.html";}
}
//返回版本选择
function backLink() {
    window.location.href = "Task2-page.html";
}
//初始默认人数
window.onload = onload();
function onload() {
    document.getElementById("sliderNum").value=8;
    sliderNum(8);
}
//网页字体跟随页面自动变化
function setRem(){
    var width = document.body.offsetWidth; //获取当前页面的宽度
    var nowFont=width/320*16; //设置页面的字体大小
    var htmlFont=document.getElementsByTagName('html')[0]; //通过标签名称来获取元素
    htmlFont.style.fontSize =nowFont+"px"; // 给获取到的元素的字体大小赋值
}
setRem(); //运行脚本setRem
window.onresize=setRem;  //监听屏幕变化





