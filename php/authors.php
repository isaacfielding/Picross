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
      <p style="width:30%">
        Fieldings stuff
      </p>
    </article>
  </section>
  <section>
    <h2>Matthew Mello</h2>
    <article>
      <p style="width:30%">
        A student at fresno state, majoring in computer science. Matthew is new to the field of webdevelopment. This project
        is his second project utilizing Java Script and HTML, however its his first where he worked with server side
        programming.
      </p>
      <p style="width:30%">
          Matthew is going to be graduating from Fresno State in the Spring of 2019 with his bachelors in computer science and 
        will be commissioned into the United States Army as a 2nd Lieutenant in the branch of aviation. He aspires to fly 
        the UH-60, commonly known as the "Black Hawk".
      </p>
      <p style="width:30%">
          After his time in the army is served, he hopes to continue helping others, working for public service in either fire 
        departments or in search and rescue outfits. He does plan on still utilizing his degree in computer science, mainly as 
        a web developer in his free time.
      </p>
    </article>
  </section>
</body>
<script src="../js/canvas.js" charset="utf-8"></script>
</html>
