<?php

    // 链接数据库
    $servername = 'localhost';
    $serverusername = 'root';
    $serverpassword = '';
    $serverdb = 'mysql';

    $conn = new mysqli($servername, $serverusername, $serverpassword, $serverdb);


     // 检测连接
    if ($conn->connect_error) {
        // 输出信息并结束连接
        die("连接失败: " . $conn->connect_error);
    }
?>