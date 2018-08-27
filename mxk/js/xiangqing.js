jQuery(function($){
    // $("#xiaotu img").click(function(){

    //    $("#zhutu img").css('display','block');
    // });
    var xiaotu = $("#xiaotu img");

    var zhutu = $("#zhutu img");

    for(var i=0;i<xiaotu.length;i++){
        xiaotu[i].onclick = (function(i){

            return function(){
                for(var j=0;j<xiaotu.length;j++){
                    xiaotu[j].className = "";

                    zhutu[j].style.display = 'none';
                }
                xiaotu[i].className = 'active';
                zhutu[i].style.display = 'block';
            }
        })(i);
    }
    $("#mashu .xq_sp").click(function(){
        $("#mashu .xq_sp").children('a').css('background','');
        $(this).children('a').css('background','#58bd58');
        
    })
    
    let src_img = $.cookie('img_src');

    let price = $.cookie('price')*1;
    console.log(price);


    // $("#zhutu1").attr("img/"+src_img+"");
    // ../src/shangping/naike_10.jpg
   
    $("#zhutu1").attr('src',src_img).css({'width':'100%'});

    $("#xiaotu1").attr('src',src_img).css({'width':'45px'},{'height':'35px'});
    $("#xianjia").html(price);

    // 点击加减触发购买数量增加或减少 价格随之变动

         //获得文本框对象
    var t = $("#shul");
    //数量增加操作
    $("#jia").click(function(){
        t.val(parseInt(t.val())+1)
        if (parseInt(t.val())!=1){
            $("#shul").attr('disabled',false); 
        }
        setTotal();
    });

    //数量减少操作
    $("#jian").click(function(){
    t.val(parseInt(t.val())-1);
    if (parseInt(t.val())<1){
        $("#shul").val("1");
        // $('#shul').attr('disabled',true);
        alert('商品数量最少为1');
        }
        setTotal();
    });

    //判断是否为数值
    $("#shul").blur(function(){
        var b = Number(this.value);
        if(!b){
            alert('请输入正确的数量');
        }
        setTotal();
    });

    setTotal();
    function setTotal(){
        var sum = 0;
        var num = parseInt($('#shul').val());
        console.log(num);
        var xianjia = price;

        sum += num*price;
        console.log(sum);
        $("#xianjia").html(sum);

    }


});
