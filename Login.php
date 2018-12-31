<?php
 $id = $_POST['id'];
 $pass = $_POST['pass'];
 if($id == "2356" && $pass == "avalanche"){
    echo "true";
 }else{
    if($id != "2356"){
        echo "Такого користувача немає";
    }
    if($id == "2356" && $pass != "avalanche"){
        echo "Неправильний пароль";
    }
 }
 ?>