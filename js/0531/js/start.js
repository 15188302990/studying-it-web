function rand(m,n){return m+parseInt((n-m)*Math.random());}
var says=['<img src="../img/levy.png">','<img src="../img/set.png">','<img src="../img/condition.png">','<img src="../img/reward.png">','<img src="../img/down.png">','<img src="../img/group.png">','<img src="../img/pink-ball.png">'];
var saysLength=says.length;
var oC=document.getElementById('container');
var mxwidth=oC.offsetWidth;
var mxheight=oC.offsetHeight;


var oB=new CollBox('container');
oB.ballRun();
for(var i=0;i<6;i++){
    var b=rand(40,45);
    var x=rand(b,mxwidth-b);
    var y=rand(b,mxheight-b);
    var ball=new Ball({
        'b':b,
        'x':x,
        'y':y,
        'sx':rand(0.7,1),
        'sy':rand(0.7,1),
        // 'c':'url(../img/paopao'+rand(1,6)+'.png)',
        'c':'url(../img/paopao1.png)',
        // 'opa':rand(90,100)/100,
        'opa':1,
        'html':says[i],
        'callBack':function(n){
            this.setOpa(rand(60,100)/100);
        }
    });
    oB.addBall(ball);
}