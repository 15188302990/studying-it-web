//jq写法
$('#button').click(function () {
    $('#tips').text('');
    var getName=$('#account').val();
    var getPwd=$('#password').val();
    console.log(typeof getName);
    console.log(typeof getPwd);
    if ((getName === null || getName === '') || (getPwd === null || getPwd === '')){
        $('#tips').text('请输入账号和密码');
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
                console.log(data.message);//打印传输回来的数据（对象）内容。可以发现有（属性）code：-5003对应用户不存在；code：-5004对应密码错误
                var json=JSON.parse(data);
                console.log(json);
                console.log(json.code);
                if (json.code === -5003){//当code：-5003对应用户不存在
                    $('#tips').text(json.message)
                }else if (json.code === -5004){//当code：-5004对应密码错误
                    $('#tips').text(json.message)
                } else {
                    console.log(json.code)
                }
            }
        })
    }
});


//原生js写法
// function login() {
//     document.getElementById("tips").innerHTML='';// $('#tips').text('');
//     var getName=document.getElementById('account').value;// var getName=$('#account').val();
//     var getPwd=document.getElementById('password').value; //var getPwd=$('#password').val()
//     console.log(getName);
//     console.log(getPwd);
//     var xhr=new XMLHttpRequest();
//     xhr.open('POST','/carrots-admin-ajax/a/login',true);//向服务器发送请求open(method请求的类型,url文件在服务器上的位置,asynctrue（异步）或 false（同步）) $.ajax({type:"Post",url:"carrots-admin-ajax/a/login",}
//     xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//请求头;contentType: 'application/x-www-form-urlencoded'
//     xhr.send('name='+ getName +'&'+'&pwd='+ getPwd );//将请求发送到服务器。仅用于 POST 请求;data:{name: getName,pwd: getPwd,}
//     if ((getName === null || getName ==='')||(getPwd === null || getPwd === '')){
//         document.getElementById("tips").innerText='请输入用户名或密码';// $('#tips').text('请输入账号和密码');
//     }else {
//         xhr.onreadystatechange=function (){//当请求被发送到服务器时，我们需要执行一些基于响应的任务。每当 readyState 改变时，就会触发 onreadystatechange 事件。
//             if (xhr.readyState == 4){//存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。0: 请求未初始化1: 服务器连接已建立;2: 请求已接收;3: 请求处理中;4: 请求已完成，且响应已就绪
//                 if ((xhr.status >= 200 && xhr.status<300) || xhr.status == 304){
//                     var data=JSON.parse(xhr.responseText);
//                     console.log(data);
//                     if (data.code === -5003){//json.code === -5003
//                         document.getElementById("tips").innerHTML=data.message;//$('#tips').text(json.message)
//                     } else if (data.code === -5004){//json.code === -5004
//                         document.getElementById("tips").innerHTML=data.message;//$('#tips').text(json.message)
//                     } else {
//                         console.log(data.code)
//                     }
//                 }
//             }
//         };
//     }
// }


