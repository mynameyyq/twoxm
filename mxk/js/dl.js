 // document.addEventListener('DOMContentLoaded',function(){
 //    var username = document.querySelector('#username');
 //    var password = document.querySelector('#password');
 //    var btndl = document.querySelector('#denglu');
(function(){
    var username = $("#username");
    var password = $("#password");
    var btndl = $("#denglu");
    
    let status = [200,304];
    btndl.click(function(){
        let _username = username.val()+'';
        let _password = password.val()+'';

        if(_username.length == ""){
            $(".tishi1_1").text('请输入用户名');
            
        }else if(_password.length == ""){
            $(".tishi1_2").text('请输入密码');
        }

        let xhr = new XMLHttpRequest();

        xhr.onload = function(){
            if(status.indexOf(xhr.status)>=0){
                console.log(xhr.responseText);

                  var data = window.eval('(' + xhr.responseText + ')');
                  console.log(data)
                    if(data.status){
                        window.location.href = "../index.html";
                     
                       
                       window.localStorage.setItem("username",data.message);
                    }else{
                          alert('用户名或密码错误');
                    }
                // if(xhr.responseText === 'yes'){
                //     window.location.href = "../index.html";

                // }else if(xhr.responseText === 'fail'){
                //     alert('用户名或密码错误');
                // }
            }
        }


        xhr.open('post','../src/php/dl.php',true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(`username=${_username}&password=${_password}`);
    });
})();
   


    

// });
