<?php
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
  <h1>Picross</h1>
</header>
<body>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>


  <div class="login">
  <form action="login.php" method="post" enctype="multipart/form-data">
          Login:
          <br>
          <input type="text" name="login" placeholder="My name is jeff"><br><br>
          Password:
          <br>
          <input type="password" name="password" placeholder="My password is jeff"><br><br>

        <div class="button">
          <input type="submit" name= "submit" value="Login"/>
          <br>
          <button id="b2" type="button" onclick="location.href='newuser.php'">New User</button>
        </div>
  </form>
        

        
  </div>
</body>
<script src="../js/canvas.js" charset="utf-8"></script> 
<script src="../js/form.js" charset="utf-8"></script>
</html>