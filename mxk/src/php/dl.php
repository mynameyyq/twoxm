

<?php 
    
    $username = isset($_POST['username']) ? $_POST['username']*1 : null;
    $password = isset($_POST['password']) ? $_POST['password']*1 : null;

    $servername = "localhost";
    $serverusername = "root";
    $serverpassword = "";
    $dbname = "mysql";

    $conn = new mysqli($servername,$serverusername,$serverpassword,$dbname);

    if($conn->connect_error){
        die("error:" . $conn->connect_error);
    }

    $conn->set_charset('utf8');
   
    $sql = "select * from yonghu where username=$username and password=$password";

    $result = $conn->query($sql);
 
    if($result->num_rows > 0){
        echo "{status: true,message:$username}";
        
    }else{
        echo  "{status: false}";
    }

 ?>

