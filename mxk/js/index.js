(function(){
    var c = 0;
    var timer = setInterval(run,3000);
    // 封装一个轮播图淡隐淡出
    function run(){
        c++;
        c= c==4?0:c;
        $("#lunbotu img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
        $("#lunbotu ul li").eq(c).css('background','#C80002').siblings('li').css('background','#ddd');
    };
    // 鼠标移入清除定时器;移出重新执行定时器
    $("#lunbotu").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(run,3000);
    });
    // 设置鼠标移入li(小圆点)悬停200毫秒才执行切换到对应li图片
    $("#lunbotu ul li").mouseenter(function(){
        timer = setTimeout(()=>{
            c= $(this).index();
        $("#lunbotu img").eq(c).fadeIn(500).siblings('img').fadeOut(500);
        
        $("#lunbotu ul li").eq(c).css('background','#C80002').siblings('li').css('background','#ddd');
    },200);
    // 鼠标移出li事清除li上的定时器效果
    $("#lunbotu ul li").mouseleave(function(){
        clearTimeout(timer);
    });    
    });
    // 鼠标移入所有商品分类时出现二级导航栏
    $("#spfenleidh").mouseenter(function(){
        $("#spfenleidh").siblings('.daohangfl_2').css('display','block');

    });
    $("#dhfl").mouseleave(function(){
        this.style = "display:none";
    });

    $("#fzxl .li_1").mouseenter(function(){
        $("#fzxl").siblings('.xielei').css({
            'display':'block'
        });
        
        $(this).siblings().css('background-position','');
        $(this).css('background-position','0 0');
        $("#fzxl").siblings('.fuzhuang').css('display','none');
    });
    $("#fzxl .li_2").mouseenter(function(){
        $("#fzxl").siblings('.fuzhuang').css('display','block');
         $(this).siblings().css('background-position','');
        $("#fzxl").siblings('.xielei').css('display','none');
        $(this).css('background-position','0 0');
    });
   
    
   let username = window.localStorage.getItem("username")
    if(username){
        
        $(".sp1").remove()
         $("#username").empty()
        $("#username").text(username)
        $("#username").parent('a').attr('href','javascript:;')
    }
})();
