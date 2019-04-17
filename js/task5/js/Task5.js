//jq写法
$('#button').click(function () {
    $('.tips').text('');
    var getName=$('.account').val();
    var getPwd=$('.password').val();
    console.log(typeof name);
    console.log(typeof pwd);
    if ((getName === null || getName === '') || (getPwd === null || getPwd === '')){
        $('.tips').text('请输入账号和密码');
    }else {
        $.ajax({//默认情况下，Ajax 请求使用 GET 方法。如果要使用 POST 方法，可以设定 type 参数值。这个选项也会影响 data 选项中的内容如何发送到服务器。
            type:"Post",//请求方式（post或get，默认为get）；注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            url:"carrots-admin-ajax/a/login",//默认值: 当前页地址。发送请求的地址。(请求地址：Post /a/login)；carrots-admin-ajax这里代表着http://dev.admin.carrots.ptteng.com，因为在nginx里配置过。
            contentType: 'application/x-www-form-urlencoded',//默认值: "application/x-www-form-urlencoded"。发送信息至服务器时内容编码类型。
            data:{//发送到服务器的数据。将自动转换为请求字符串格式。GET 请求中将附加在 URL 后。
                name: getName,//参数name和pwd是根据任务要求上后台借口参数。一致才能真确传输。
                pwd: getPwd,
            },
            //
            success:function (data) {//请求成功后的回调函数。参数data：由服务器返回，并根据 dataType 参数进行处理后的数据；
                console.log(data.message);
                var json=JSON.parse(data);
                console.log(json);
                console.log(json.code);
                if (json.code === -5003){
                    $('.tips').text(json.message)
                }else if (json.code === -5004){
                    $('.tips').text(json.message)
                } else {
                    console.log(json.code)
                }
            }
        })
    }
});

