//对九宫格盒子建立变量，让其有关联。
var z = document.getElementsByClassName('box');

function colors() { //选取的rgb颜色
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + r + "," + g + "," + b + ")";
    return rgb;
}

var time;
function start() {
    time = setInterval(function () {
        for (var i = 0; i < z.length; i++) {
            z[i].style.backgroundColor = "orange"; //每次获取随机颜色后恢复默认颜色
        }
        for (; a == b || b == c || c == a;) {//当abc有任意两个相等，就开始运行，直到没有相等。选择三个不相同的随机数
            var a = Math.floor(Math.random() * 9);
            var b = Math.floor(Math.random() * 9);
            var c = Math.floor(Math.random() * 9);
        }
        for (; one == two || two == three || three == one;) {//判断三个盒子背景颜色是否重复，并给随机的三个盒子赋值上随机背景颜色
            var one = z[a].style.backgroundColor = colors();
            var two = z[b].style.backgroundColor = colors();
            var three = z[c].style.backgroundColor = colors();
        }
    }, 1000)
    document.getElementById("start").disabled = true; //禁用开始按钮
}
//设置重置
function end() {
    for (var l = 0; l < z.length; l++) {
        z[l].style.backgroundColor = "orange"; //恢复默认颜色
    }
    clearInterval(time); //去除延时
    document.getElementById("start").disabled = false; //启用开始按钮
}
