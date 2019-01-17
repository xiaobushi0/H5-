$(function() {

    mui.init( {
        swipeBack: true 
    });
    var info=document.getElementById("info"); 
   
    $('.g_call').on('tap',function(){
 
        $('.mui-popup-backdrop.mui-active').show();
       
        var btnArray = ['否', '是'];
            mui.confirm('13037190020', '', btnArray, function(e) {
                // if (e.index == 1) {
                    $('.mui-popup-backdrop.mui-active').hide();
                   
                // }
                 //else {
                //     info.innerText = 'MUI没有得到你的认可，继续加油'
                // }
     });
    
     $('.mui-popup-title').remove();
     $('.mui-popup-text').addClass('cc');
     $('.mui-popup.mui-popup-in').addClass('dd');
     
    
});


   $('.promptBtn').on('tap', function(e) {
        // e.detail.gesture.preventDefault();
        var name = $("#uid").val();
        var nameReg = /[\u4e00-\u9fa5]/;
        if (!nameReg.test(name) || !$.trim(name)) {
            $('.g_font1').show();
            setTimeout(function(){
                $('.g_font1').hide();
            },1000);
            return false;
        }
        var ipone = $("#ipone").val();
            // console.log(ipone);
             var nameReg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
             if (!nameReg.test(ipone)) {
                 $('.g_font2').show();
                 setTimeout(function(){
                     $('.g_font2').hide();
                 },1000);
                 return false;
             }
        var btnArray=['提交'];
       
        
        mui.prompt('验证码已发送到'+ipone+',30分钟内输入有效,请勿泄漏', '短信验证码', '验证手机', btnArray, function(e) {
           
            if (e.value !="") {
                mui.alert('', '', function(e) {
                    console.log(e);
                });
                
                $('.mui-popup.mui-popup-in').empty();
               
                var html="<button id='g_cols1'></button>";
                $('.mui-popup.mui-popup-in').append(html);
                $('.mui-popup.mui-popup-in').addClass('bb');
                $('#g_cols1').on('tap', function(e) {
                  
                    // $(this).parent().remove();
                    // $('.mui-popup-backdrop.mui-active').remove();
                    window.location.reload();
                   
                }
                )}
                // if(){

                // }
            // else {
            //     info.innerText='你点了取消按钮';
            // }
        })
        var span='获取验证码';
        var html="<button id='g_btn'>"+span+"</button>";
        $('.mui-popup-input').append(html);
        $('#g_btn').on('tap',function(){
            var time=5;
        //    
           var timeOut= setInterval(function(){
                time--;
                if(time <= 0){
                    clearInterval(timeOut);
                    document.getElementById('g_btn').innerText='重新获取验证码';
                }
                document.getElementById('g_btn').innerText='倒计时'+time+'s';
            },1000);
           
           
            
            
           
        })
       
        $('.mui-popup-input > input').addClass('aa');
        var div=$('<div class="g_move iconfont icon-ziyuanldpi"></div>')
        $('.mui-popup-title').append(div);
        $('.mui-popup-title').on('tap','.g_move',function(){
            $('.mui-popup.mui-popup-in').remove();
            $('.mui-popup-backdrop.mui-active').toggle();
            
            
        });
        $('.mui-popup-backdrop.mui-active').show();
    });
   

});