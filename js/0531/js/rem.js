function adapt(designWidth, rem2px) {
    var d = window.document.createElement('div');
    d.style.width = '1rem';
    d.style.display = "none";
    var head = window.document.getElementsByTagName('head')[0];
    head.appendChild(d);
    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
    d.remove();
    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
    var st = document.createElement('style');
    var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
    var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
    st.innerHTML = portrait + landscape;
    head.appendChild(st);
    return defaultFontSize
}
adapt(750, 100);


//微信按钮返回不刷新
function isIos() {//判断是IOS还是Android
    var userAgent = navigator.userAgent;
    var isAndroid = userAgent.indexOf('Android') > -1 || userAgent.indexOf('Adr') > -1; //android终端
    var isiOS = !!userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
        return false;
    } else if (isiOS) {
        return true;
    }
}

if (isIos()) {
      var isPageHide = false;
      window.addEventListener('pageshow', function () {
          if (isPageHide) {
              window.location.reload();
          }
      });
      window.addEventListener('pagehide', function () {
          isPageHide = true;
      });
} else {
      var needRefresh = sessionStorage.getItem("need-refresh");
      if (needRefresh) {
          sessionStorage.removeItem("need-refresh");
        window.location.reload();
    }
}
