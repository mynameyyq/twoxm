document.addEventListener('DOMContentLoaded',()=>{
            let username = document.querySelector('#name');
            let password = document.querySelector('#mima');
            let qrpassword = document.querySelector('#qrmima');
            let btnReg = document.querySelector('#zcxyh');

            var tishi = $(".frpanduan span");
            let status = [200,304];

            let isok = false;
            password.onblur = function(){
                if(password.value === ''){
                    tishi.empty();
                    tishi.text("密码不能为空");
                }
                if(password.length < 6){
                    tishi.empty();
                    tishi.text("密码最少为六位数");
                }
            }
            qrpassword.onblur = function(){
                if(qrpassword.value != password.value){
                    tishi.empty();
                    tishi.text('两次的密码不一致');
                }
            }
            // 注册
            


            // 验证用户名是否存在
            username.onblur = ()=>{
                let _username = username.value;
                if(_username == ""){
                    tishi.text("用户名不能为空");
                }
                if(_username.length < 4){
                    tishi.text("用户名不能小于四位数");
                }
                if(_username != "" && _username.length > 4){
                let xhr = new XMLHttpRequest();
                
                xhr.onload = ()=>{
                    tishi.empty();
                    if(status.indexOf(xhr.status) >= 0){
                        if(xhr.responseText === 'yes'){
                            isok = true;
                            tishi.text("用户名可以使用");
                            
                        }else if(xhr.responseText === 'no'){
                            isok = false;
                            tishi.text("用户名已存在");
                        }
                    }
                } 
                xhr.open('get','../src/php/check_username.php?username='+_username,true);
                xhr.send();   
            }
            }
            btnReg.onclick = (e)=>{
                // if(!isok){
                //     return false;
                // }
                e.preventDefault()

                // 获取用户名/密码
                    let _username = username.value;
                    var _password = password.value;

                    let xhr = new XMLHttpRequest();
                    xhr.onload = ()=>{
                        if(status.indexOf(xhr.status) >= 0){
                            console.log(xhr.responseText);
                             if(xhr.responseText === "success"){
                            window.location.href = "../html/dennglu.html";
                            }
                        }
                    }
                    xhr.open('post','../src/php/zhuce.php',true);

                    // 设置请求头，以便后端接收post数据
                    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');


                    xhr.send(`username=${_username}&password=${_password}`);    
                
                
            }
        });