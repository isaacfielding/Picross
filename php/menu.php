<?php

$dbServername = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "Picross";
$conn = mysqli_connect ($dbServername, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error ."<br>");
}
echo "Connected successfully <br>";

session_start();

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Picross Game</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<header>
  <h1>Menu</h1>
</header>
<body>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>

  <div class="button">
    <button type="button" onclick="location.href='index.php'">Title</button>
  </div>
  <div class="button">
    <button type="button" onclick="location.href='game.php'">Start Game</button>
  </div>
  <div class="button">
    <button type="button" onclick="location.href='howtoplay.php'">How To Play</button>
  </div>
  <div class="button">
    <button type="button" onclick="location.href='authors.php'">Authors</button>
  </div>
</body>
<script src="../js/game.js" charset="utf-8"></script>
<script src="../js/canvas.js" charset="utf-8"></script>
</html>
