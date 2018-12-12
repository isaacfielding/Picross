<?php

session_start();
include "connections.php";
$conn=connect();


$newlogin = $_POST['login']; 
$newpassword = $_POST['password'];
 

if(empty($newlogin) || empty($newpassword)) {
    $error = " No username or password ";
    header("Location: index.php?error=".$error);
    exit();
}

else{

    $sql = "SELECT * FROM Players WHERE login = '$newlogin';"; // Get the queary of the login and password
    $result = $conn->query($sql); 

    if ($row = mysqli_fetch_assoc($result)) {
        $check = password_verify($newpassword, $row['password']);
        if ($check == false) {
            $error = " Wrong Password ";
        }
        else if ($check == true){
            session_start();
            $_SESSION['login'] = $row['login'];
            header("Location: menu.php");
        
            exit();
        }
    }
}

$conn -> close();
?>

