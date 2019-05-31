var i=0;
function expand(){
    if(i==0){
        document.getElementById("menu").style.transform="scale(2.3)";
        document.getElementById("menu1").style.transform="scale(2.3)";
        document.getElementById("menu1").style.zIndex="99";
        // document.getElementById("plus").style.transform="rotate(45deg)";
        document.getElementById("plus").style.animation = "roateplus 3s infinite linear";
        document.getElementById("tip").style.display="none";//5.28,点击后，“小手”消失
        i=1;
    }
    else{
        document.getElementById("menu").style.transform="scale(0)";
        document.getElementById("menu1").style.transform="scale(0)";
        document.getElementById("menu1").style.zIndex="-15";
        // document.getElementById("plus").style.transform="rotate(0deg)";
        document.getElementById("plus").style.animation = "roateplus 1s linear";
        document.getElementById("tip").style.display="block";//5.28,点击后，“小手”出现
        i=0;
    }
}

