var age=25
console.log('lets learn how to debug and behind the sceen the a js code');
var fn=function(){
    var age=30;
    var  num=22;
    console.log('this is a fun in global context');
    function fn(num)
    {
        console.log('this is funtion within a fn funtion')
    }
}