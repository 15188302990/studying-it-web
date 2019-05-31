/**
 *
 @Author: MiniHui
 @Date: Mon Apr 29 2019 08:24:05 GMT+0800 (CST)
 *
 */
$(function () {

    var bgmusic = bgMusic('#music');
    // touch拖拽点击事件
    var oBox = $('#box');
    var oBoxItem = $('#box .item');
    var y = 65;
    var x = 7;
    var rotexy = {
        active: false
    };
    oBox.on("touchstart", function (ev) {
        //获取触摸位置
        oBox.removeClass('boxAnim');
        var oEvent = ev || event;
        var disX = ev.changedTouches[0].clientX - y;
        var disY = ev.changedTouches[0].clientY - x;
        rotexy.x = ev.changedTouches[0].pageX;
        rotexy.y = ev.changedTouches[0].pageY;
        $('.mask').removeClass('active');
        $('.maskitem').removeClass('active');

        oBox.on("touchmove", function (ev) {
            //3d旋转立方体
            var oEvent = ev || event;
            x = (disY - ev.touches[0].clientY) % 360;
            y = (ev.touches[0].clientX - disX) % 360;
            oBox.attr('style', 'transform:perspective(800px) rotateX(' + x + 'deg) rotateY(' + y + 'deg)');
        });

        oBox.on("touchend", function (ev) {

            ev.stopPropagation();
            ev.preventDefault();
            // 获取当前位置
            var currentX = ev.changedTouches[0].pageX;
            var currentY = ev.changedTouches[0].pageY;

            // 判断是否点击了每个面，执行程序
            if (Math.abs(currentX - rotexy.x) < 6 && Math.abs(currentY - rotexy.y) < 6) {

                end(ev);
            }
        });

        return false;
    });

    function end(ev) {

        var elem = ev.srcElement.dataset.thisindex;
        var newUrl = $.trim($('.maskitem').eq(elem).text());
        // console.log($.trim($('.maskitem').eq(elem).text()))
        if(newUrl){
            location.href = newUrl;
        }
    }

    // 返回按钮
    $('.backbtn').bind('click', function () {

        // bgmusic.play();

        $('.mask').removeClass('active');
        $('.maskitem').removeClass('active');
        $('.nexpagecon').removeClass('active');
    });


    //背景音乐播放 bgmusic

    function bgMusic(id) {
        var music = $(id);
        var audios = $(id + '-audio')['0'];

        autoPlayMusic(audios);
        music.bind('tap', function () {
            if (music.hasClass('stopped')) {
                $(this).removeClass('stopped');

                audios.play();
            } else {
                $(this).addClass('stopped');
                audios.pause();
            };
        });

        return audios;
    }

    //播放多个音频

    function autoPlayMusic(audios) {
        // audios.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            audios.play();
        }, false);
    }

});
//# sourceMappingURL=maps/index.js.map
