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
  <h1>New User</h1>
</header>
<body>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>


  <div class="button">
  <form action="register.php" method="post" enctype="multipart/form-data">
          Login:___

          <input type="text" name="login" placeholder="My name is jeff"><br><br>
          Password:

          <input type="password" name="password" placeholder="My password is jeff"><br><br>
          Firstname:

          <input type="text" name="firstname" placeholder="My firstname is jeff"><br><br>
          Lastname:

          <input type="text" name="age" placeholder="My age is jeff"><br><br>
          Age:___

          <input type="text" name="lastname" placeholder="My lastname is jeff"><br><br>
          Gender:__

          <input type="text" name="gender" placeholder="My gender is jeff"><br><br>
          Location: 

          <input type="text" name="location" placeholder="My location is jeff"><br><br>

          <input type="submit" name= "submit" value="Register"/>

  </form>
        
  </div>
</body>
<!-- <script src="../js/canvas.js" charset="utf-8"></script> --> 
<script src="../js/form.js" charset="utf-8"></script>
</html>