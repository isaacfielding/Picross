<?php

include_once("connections.php");

  $newlogin = $_POST['login']; 
  $newpassword = $_POST['password'];
  $newnfirstame = $_POST['firstname'];
  $newlastname = $_POST['lastname']; 
  $newage = $_POST['age'];
  $newgender = $_POST['gender'];
  $newlocation = $_POST['location'];

  $password = password_hash($newpassword, PASSWORD_DEFAULT);

  $sql = "INSERT INTO Players (login, password , firstname, lastname, age, gender, location)
  VALUES ('$newlogin', '$password', '$newnfirstame', '$newlastname', '$newage' , '$newgender' ,'$newlocation')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
     echo "Error: " . $sql . "<br>" . $conn->error;
  }

  header("Location: index.php?error=".$error);
  exit();

?>