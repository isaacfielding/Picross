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
      
</header>
<body>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>

  <div class="button">
  <button type="button" onclick="location.href='menu.php'">Menu</button>
  </div>
      <h1>Authors of the Project</h1>
  <section>
    <h2>Isaac Fielding</h2>
    <article>
      <p>
        Some shit about Fielding.
      </p>
    </article>
  </section>
  <section>
    <h2>Matthew Mello</h2>
    <article>
      <p>
        Some shit about Mello.
      </p>
    </article>
  </section>
</body>
<script src="../js/canvas.js" charset="utf-8"></script>
</html>
