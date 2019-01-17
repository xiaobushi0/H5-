$(function(){
    $(window).on("resize",function(){
        /* 1、获取屏幕的宽度 */
       width=$("html").width();
    //    console.log(width);
       if(width >= 750){
           width=750;
       }
       if(width <= 360){
           width=360;
       }
       /* 2、计算font-size */
       fontSize=width/750*100;
       
       $("html").css("font-size",fontSize)
       // $("html").css({"font-size":fontSize})
    }).trigger("resize");
});