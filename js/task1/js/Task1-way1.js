//对九宫格盒子建立变量，让其有关联。
var box = document.getElementsByClassName('box');
//以下建立一个数组
let Arr = [0,1,2,3,4,5,6,7,8];
//以下随机抽三个数，原理就是将数组元素互换位置，从而打乱数组原来的顺序，再利用slice提取。
function randomArray(arr, count) {//myFunction(var1,var2),调用函数时，参数可以在函数中使用。您可以发送任意多的参数，由逗号 (,) 分隔.//这一大段都是函数，（var1，var2）参数，A代表数组，B代表所需要随机数的个数。
    var shuffle = arr.slice(0), i = arr.length, min = i - count, temp,index;//shuffle：洗牌，代表表示新数组//slice(单值)是提取字符串中第几到字符串结束//.length字符串的长度//CD作用起转换数值。
    while (i-- > min) {//当i-1的值小于min的值，自我感觉这个条件没有，可以舍弃，除非B=1或0这个条件才不生效。
        index = Math.floor((i + 1) * Math.random());//获取整数//Math.floor(x)向下取整计算，它返回的是小于或等于函数参数//Math.random()返回介于 0 （包含） ~ 1（不包含） 之间的一个随机数。
        temp = shuffle[index];//获取数组中的数//C的值是S数组的第D个数（从0开始计数）
        shuffle[index] = shuffle[i];//S数组的第D个数的值替换成S的第i个数值。此时S数组发生第一次变化，这是有两个相同的值//S[i]数组中最后一个数
        shuffle[i] = temp;//将S数组的第i个数的值替换为C。
    }
    return shuffle.slice(min);//输入S数组的第min个开始到结束之间的数值。
}
//随机颜色
function randomColor(){//for循环
    var color="#";
    for(var i=0;i<6;i++){
        color += (Math.random()*16 | 0).toString(16);//+=:例子x+=y等同于x=x+y，即累加。
    }
    return color;//输出颜色的十六进制
}
//重置颜色
function resetColor() {
    for (var i= 0; i < box.length; i++) {
        box[i].style.background = "orange";
    }
}

//开始闪 随机三个数组并附上随机颜色
var time;//没有在函数里面，所以定义为全局变量

function start() {
    time = setInterval(function () {
        resetColor();
        // console.log(randomArray(a, 3));//console.log("normal")用于输出普通信息
        var indexArr = randomArray(Arr,3);
        for(var i = 0; i < indexArr.length; i++) {
            var color = randomColor();
            // var f = indexArr[i];
            box[indexArr[i]].style.background = color;
        }
    }, 1000);
    // console.log(interval);
    document.getElementById("start").disabled = true;//禁用开始按钮
}
//结束闪
function end() {
    resetColor();
    clearInterval(time);
    document.getElementById("start").disabled = false; //启用开始按钮
}
