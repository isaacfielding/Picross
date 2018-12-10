<?php



$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "Picross";

function connect() {
  global $dbServername, $dbUsername, $dbPassword, $dbName;
  $conn = mysqli_connect ($dbServername, $dbUsername, $dbPassword, $dbName);

  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error ."<br>");

  }
  return $conn;
}

/*

session_start();

$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.". ".<br>";
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".". ".<br>";
$_SESSION["favcolor"] = "yellow";
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";

*/ 


?>