(function(){

 //为表单的必填文本框添加提示信息（选择form中的所有后代input元素）
//  $("form :input.frpanduan").each(function () {
//  //创建元素
//  var $required = $("<strong class='high'>*</strong>");
//  //将它追加到文档中
//  $(this).parent().append($required);
//  });
//  //为表单元素添加失去焦点事件
//  $("form :input").blur(function(){
   
// var $parent = $(this).parent();
//     $parent.find(".msg").remove();
//  //验证名称
//  var errorMsg = "";
//     if($(this).is("#name")){
//         if($.trim(this.val()) == ""){
//             errorMsg = "不能为空用户名";
//         }else if($.trim(this.val()).length < 4){
//             errorMsg = "用户名不能少于四位数"
//         }


   
//       //class='msg onError' 中间的空格是层叠样式的格式
//             $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
//     }
//     var password=$("#mima").val();
//     var password1=/^[0-9]{6,10}/;
//     if($(this).is("#mima")){
//         if($.trim(this.val()) == ""){
//             errorMsg = "密码不能为空";
//         }else if($.trim(this.length) > 6){
//             errorMsg = "请输入6-10位的数字密码";
//         }else{
//             errorMsg = "√";
//         }
//         $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
//     }
//     if($(this).is("#qrmima")){
//         if(($(this).val().trim()) == $("#mima").val().trim()){
//             errorMsg = "√";
//         }else{
//             errorMsg = "两次密码不相同"
//         }
//         $parent.append("<span class='msg onError'>" + errorMsg + "</span>");
//     }
    
    
 // });
    // $(".frpanduan span");
    // var tishi = $(".frpanduan span");

    
    // $("#name").blur(function(){
    //     if($(this).val() == ""){
    //     tishi.text();    
    //     tishi.text("用户名不能为空"); 
    //     }
    //     if($(this).val().length < 4){
    //     tishi.text();
    //     tishi.text("用户名不能少于四位数");
    //     }else{
    //         // 验证用户名是否存在
    //     //     var isok = false;
    //     //     let _username = $("#name").val();
    //     //     let xhr = new XMLHttpRequest();
    //     //     xhr.onload = ()=>{
    //     //         if(status.indexOf(xhr.status) >= 0){
    //     //             if(xhr.responseText === 'yes'){
    //     //                 isok = true;
    //     //                 tishi.text("可以使用该用户名");
    //     //             }else if(xhr.responseText === 'no'){
    //     //                 isok = false;
    //     //                 tishi.text("用户名以存在");
    //     //             }
    //     //         }
    //     //     }
    //     //     xhr.open('get','../src/php/check_username.php?username='+_username,true);
    //     //     xhr.send();    
    //     // };
        
    // });
    // $("#mima").blur(function(){
    //     if($(this).val().length < 6){
    //     tishi.text();
    //     tishi.text("密码不能少于六位数");
    //     }else{
    //         tishi.empty();
    //     }

    // });
    // $("#qrmima").blur(function(){
    //     if($(this).val() != $("#mima").val()){
    //     tishi.text();
    //     tishi.text("两次密码不相同");
    //     }else{
    //         tishi.empty();
    //     }
    // });
    // var aaaa = true;
    // $('#zcxyh').click(function(e){
    //         e.preventDefault()
    //     let username = $("#name").val();
    //     let password = $("#mima").val();
    //     let qrpassword = $("#qrmima").val();
    //     if(!username && username.length < 4){
    //         aaaa = false;
    //         console.log(1)
    //     }
    //     if(!password && password.length < 6){
    //         aaaa = false;
    //         console.log(2)
    //     }
    //     if(qrpassword != password){
    //         aaaa = false;
    //         console.log(3)
    //     }
    //     console.log(aaaa)
    //     if(aaaa == true){
    //         console.log(1111111111)
    //         $.ajax({
    //             type: 'post',
    //             url: '../src/php/zhuce.php',
    //             contentType: "application/x-www-form-urlencoded; charset=utf-8",
    //             data:{
    //             username:$('#name').val(),
    //             password:$('#mima').val() 
    //             },
    //             success:function(data){
    //                 // var data = window.eval('(' + data + ')');
    //                 if(data.status){
    //                     alert('注册成功, 请登录');
    //                 }else{
    //                     alert('注册失败，请重新登录');
    //                 }
    //             }
    //         });
    //     };    
    // }); 
    // let status = [200,304];
    // let isok = false;
    // $("#zcxyh").click = function(){
    //             // if(!isok){
    //             //     return false;
    //             // }
    //             console.log(1234)
    //             // 获取用户名/密码
    //             let _username = $("#name").val();
    //             let _password = $("#mima").val();

    //             let xhr = new XMLHttpRequest();
    //             xhr.onload = ()=>{
    //                 if(status.indexOf(xhr.status) >= 0){
    //                     console.log(xhr.responseText);
    //                 }
    //             }
    //             xhr.open('post','../src/php/zhuce.php',true);

    //             // 设置请求头，以便后端接收post数据
    //             xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


    //             xhr.send(`username=${_username}&password=${_password}`);
    //         }
        let username = document.querySelector('#name');
        let password = document.querySelector('#mima');
        let btnReg = document.querySelector('#zcxyh');

        let status = [200,304];

        let isok = false;

        // 注册
        btnReg.onclick = ()=>{
            console.log(666);
            if(!isok){
                return false;
            }

            // 获取用户名/密码
            let _username = username.value;
            var _password = password.value;

            let xhr = new XMLHttpRequest();
            xhr.onload = ()=>{
                if(status.indexOf(xhr.status) >= 0){
                    console.log(xhr.responseText);
                }
            }
            xhr.open('post','../src/php/zhuce.php',true);

            // 设置请求头，以便后端接收post数据
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


            xhr.send(`username=${_username}&password=${_password}`);
        }


        // 验证用户名是否存在
        username.onblur = ()=>{
            let _username = username.value;

            let xhr = new XMLHttpRequest();
            
            xhr.onload = ()=>{
                if(status.indexOf(xhr.status) >= 0){
                    var tishi = $(".frpanduan span");
                if(xhr.responseText === 'yes'){
                        isok = true;

                        // 成功：添加has-success类
                        tishi.text('用户名可以使用');
                    }else if(xhr.responseText === 'no'){
                        isok = false;
                        tishi.text('用户名已存在');
                    }
                }
            }
            xhr.open('get','../src/php/check_username.php?username='+_username,true);
            xhr.send();

        }


    
})();
