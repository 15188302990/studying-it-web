
var showApplyfor = document.querySelector("#advert .content span");
showApplyfor.addEventListener("click", function () {
    document.querySelectorAll("#advert .content")[0].style.background = "#FFFFFF";
    document.querySelector("#advert .content span").style.display = "none";
    document.querySelector("#advert .content img").style.display = "none";
    document.querySelectorAll("#advert .bg1")[0].className = "bg1 animation-five";
    document.querySelectorAll("#advert .bg2")[0].className = "bg2 animation-five";
    document.querySelectorAll("#advert .bg3")[0].className = "bg3 animation-five";
    document.querySelectorAll(".content")[0].className = "content animation-four";
    setTimeout(function () {
        document.querySelector("#advert").style.display = "none";
        document.querySelector("#applyfor").style.display = "block";
        document.querySelector("#applyfor i").className = "animation-one";
        document.querySelector("#applyfor form div").className = "animation-six";
        setTimeout(function () {
            document.querySelectorAll("#applyfor input")[0].className = "animation-one";
            setTimeout(function () {
                document.querySelectorAll("#applyfor input")[0].style.left = "16px";
            }, 600);
            setTimeout(function () {
                document.querySelectorAll("#applyfor input")[1].className = "animation-one";
                setTimeout(function () {
                    document.querySelectorAll("#applyfor input")[1].style.left = "16px";
                }, 600);
                setTimeout(function () {
                    document.querySelectorAll("#applyfor input")[2].className = "animation-one";
                    setTimeout(function () {
                        document.querySelectorAll("#applyfor input")[2].style.left = "16px";
                    }, 600);
                    setTimeout(function () {
                        document.querySelector("#applyfor button").className = "animation-two";
                        setTimeout(function () {
                            document.querySelector("#applyfor button").style.left = "70px";
                        }, 600);
                        setTimeout(function () {
                            document.querySelector("#applyfor #shadow").className = "animation-three";
                            setTimeout(function () {
                                document.querySelector("#applyfor #shadow").style.top = "8px";
                                document.querySelector("#applyfor #shadow").style.left = "8px";
                            }, 600);
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 300);
})