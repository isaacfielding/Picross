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
  <h1>How to Play</h1>
</header>
<body>

  <!-- our canvas element for which we will use to draw animations in the background of our webpage -->
  <canvas></canvas>

  <div class="button">
    <button type="button" onclick="location.href='menu.php'">Menu</button>
  </div>

  <!-- Explaination starts here -->
  <section>
    <h2>The Board</h2>
    <article>
      <p>
        The board of picross is made up of squares, each square is selectable. Selecting a square will <br>
        fill it in with a different color. On the top and side of the board are a series of hints. These <br>
        tell you how many spaces are to be filled in within each column and row they are placed by. <br>
        When there are a series of numbers like 1 1 2 this means that three series of squares are to be <br>
        filled in with any number of empty squares inbetween each series. 
      </p>
    </article>
    <h2>The Goal</h2>
    <article>
      <p>
        The goal is to solve the puzzle using the hints provided for each puzzle to fill in the grid and<br>
        produce the picture hidden. Each square that is incorrect counts against you so choose wisely!
      </p>
    </article>
  </section>
  <section>
    <h2>The Game Modes</h2>
    <article>
      <h3>Arcade Mode</h3>
      <p>
        Finish a series of predefined levels.
      </p>
      <h3>Time Attack Mode</h3>
      <p>
        Finish a series of levels as fast as possible.
      </p>
    </article>
  </section>
</body>
<script src="../js/canvas.js" charset="utf-8"></script>
</html>
