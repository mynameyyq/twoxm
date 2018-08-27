jQuery(function($){
        $.ajax({
            type: 'post',
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: null,
            url: '../src/php/liebiao.php',
            success: function(res){
                var resData 
                res = JSON.parse(res)

                   showPage(res);
                   $('.goods').on('click','li',function(){
                        let $src = $(this).find('img').attr('src');
                        let $price =  $(this).find('.price').text();
                        console.log($src,$price)
                        $.cookie('img_src',$src)
                        $.cookie('price',$price)

                   })
                    // resData = res.slice(0,28);
                    // showData(resData)
             
                // resData = res.slice(0,28);
                // showData(resData)


              
               
                // if(numberRes == 1){
                //       resData = res.slice(0,28);
                //        showData(resData)
                // }else{
                //    let pagesN = numberRes*28 > res.length  ?  numberRes*28 : res.length+1
                //    console.log(pagesN)
                //     resData =res.slice((numberRes-1)*28,pagesN)
                //      showData(resData)
                //  }
                // let resData = res.slice(0,28);
                // console.log(resData)
                   
               

            }    
                    
            
            
            
        })

    function showData(res){
        // var data = JSON.parse(res);
        let data = res;
        var ul = document.querySelector('.goods');
        show();
        function show(){
            ul.innerHTML = data.map((item,idx)=>{
                return `<li data-id="${data[idx].id}">
                    <a href="../html/xiangqing.html">
                    <img src="${item.images}" alt="">
                    </a>
                    <p class="p1"><span>￥</span><span class="price" style="padding-left:0">${item.price}</span><span>￥${item.yuanjia}</span></p>
                    <p class="p2">${item.title}</p>
                    <p class="p3">售出${item.sc}件</p>
                    <p class="p4">码数：${item.cm}</p>
                </li>`
            }).join(''); 
        }
        var shouhcu = 0;
        $("#xlpx").click(function(){
            shouhcu++
            show1();
            $("#xlpx").text("销量↓");
            show()
            jianbian();
            if(shouhcu%2 === 0){
            show2();
            $("#xlpx").text("销量↑");
            show()
            jianbian();
            }
        });
        function show2(){
            var arry = data.sort(function(a,b){
                        return  b.sc-a.sc;
            });
        }
        function show1(){
            var arry = data.sort(function(a,b){
                return  a.sc-b.sc;
            });
        }
        var jiage = 0;
        $("#jgpx").click(function(){
            jiage++
            jgpaixun1();
            $("#jgpx").text("价格↑");
            show()
            jianbian();
            if(jiage%2 === 0){
            jgpaixun2();
            $("#jgpx").text("价格↓");
            show()
            jianbian();
            }
        });
        function jgpaixun1(){
            var arry = data.sort(function(a,b){
                        return  b.price-a.price;
            });
        }
        function jgpaixun2(){
            var arry = data.sort(function(a,b){
                return  a.price-b.price;
            });
        }
        jianbian();
        function jianbian(){
        $(".goods li").hover(function(){
            $(this).children('.p3').stop().fadeTo(2000,1);
            $(this).children('.p4').stop().fadeTo(2000,1);
        },function(){
            $(this).children('.p3').stop().fadeTo(2000,0);
            $(this).children('.p4').stop().fadeTo(2000,0);
        });
        var paixu = 1;    
        }
        
    }




    // 页码函数
    function showPage(res){
        let page = Math.ceil(res.length/28)
        let $div = $('<div class="pages"/>')
        for (let i = 1;i<= page; i++){
            let $span =$('<span/>').text(i)
            $span.appendTo($div)
        }
        $div.appendTo('#splb_shuju')
        // 鼠标移入换颜色
        $div.find('span').hover(function(){
            $(this).css({color:'red',backgroundColor:"#ccc",cursor:"pointer"})
        },function(){
             $(this).css({color:"#000",backgroundColor:"#fff"})
        })
        // 点击换页
        
        $div.find('span').on('click',function(){
            // number = 28
            let number = $(this).text()*1
            let pagesN = number*28 > res.length  ?  number*28 : res.length+1
            if( number-1 == 0){
                resData = res.slice(0,28);
                showData(resData)
                return false;
            }
            resData =res.slice((number-1)*28,pagesN)
            $('.goods').children('li').remove();

            showData(resData)
          return false
         })
        resData = res.slice(0,28);
        showData(resData);
      
    }
    
})

    
