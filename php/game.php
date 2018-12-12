<?php

include "connections.php";

session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Picross Game</title>
  <link rel="stylesheet" type="text/css" href="../css/style.css">
</head>
<body>
<header>
  <!-- needs a timer value display element: left side -->
  <h1>Picross</h1>
  <!-- turn counter on the right -->
</header>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>
<div class="sbs">
  <div class="left">
    <?php
    ////////////////////////// Table Generation ///////////////////////////

    $conn=connect();

    $sql = "SELECT player, duration, errorcount FROM Games ORDER BY duration LIMIT 5";
    // $sql = "SELECT player, duration, errorcount FROM Games ORDER BY errorcount LIMIT 5";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table id=\"leaderboard\"><tr><th>Rank</th><th>Player</th><th>Time</th><th>Errors</th></tr>";
          // output data of each row
          $counter = 1;
          while($row = $result->fetch_assoc()) {
              echo "<tr><td>" . $counter. "</td><td>" . $row["player"]. "</td><td>" . $row["duration"]. "</td><td>" . $row["errorcount"]. "</td></tr>";
              $counter += 1;
          }
        echo "</table>";
    } else {
        echo "0 results";
    }

    /////////////////////////////////////////////////////////////////////

    ?>

    <form class="radios" action="">
          <input type="radio" name="selection" value="errors"> By Errors
          <input type="radio" name="selection" value="time"> By Time
    </form>
  </div>
  <div class="middle">
    <form class="button">
      <button type="button" onclick="location.href='menu.php'" style="font-size: 14pt">Menu</button>

      <!-- game size selector -->
      <select id="size" style="font-size: 14pt">
        <option value="7">7 x 7</option>
        <option value="13">13 x 13</option>
      </select>

      <select id="mode" style="font-size: 14pt">
        <option value="0" >Regular Mode</option>
        <option value="1">Arcade Mode</option>
        <option value="2">Time Attack Mode</option>
      </select>

      <!-- starts game with specified size when clicked -->
      <button type="button" id="generate" onclick="start()" style="font-size: 14pt">Generate</button>

      <br>

      <h3 class="button">Grid</h3>
      <select id="gridColorSetting" style="font-size: 14pt">
        <option value="White">Default</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>

      <h3 class="button">Hit</h3>
      <select id="hitColorSetting" style="font-size: 14pt">
        <option value="Black">Default</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>
    
      <!-- Updates the colors of the grid and hits when clicked -->
      <button type="button" id="colorButton" onclick="updateColors()" style="font-size: 14pt">Change Color</button>
    </form>
  </div>
  <div class="right">
    <!-- Display elements for game progress -->
    <div id="gui">
      <ul id="elements">
        <h2>Elements</h2>
        <h2 id="elemCount">0</h2>
      </ul>
      <ul id="turns">
        <h2>Turns</h2>
        <h2 id="turnCount">0</h2>
      </ul>
      <ul id="timer">
        <h2>Time</h2>
        <h2 id="time">0:00</h2>
      </ul>
    </div>
  </div>
</div>
<div class="sbs">
  <div class="left2" id="sideBar" style="padding-top: 10%;">
    <button type="button" onclick="getGoodHint()" style="font-size: 16pt">Good Move Hint</button>
    <button type="button" onclick="getBadHint()" style="font-size: 16pt">Bad Move Hint</button>
    <button type="button" onclick="solve()" style="font-size: 16pt">Solve</button>
  </div>
  <div class="right2">
    <!-- when table is generated, it will populate the picross div -->
    <div id="picross"></div>
  </div>
</div>



</body>
<script src="../js/game.js" charset="utf-8" onload="centerGUI()"></script>
<script src="../js/canvas.js" charset="utf-8"></script>
</html>
