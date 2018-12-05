<?php

// $dbServername = "localhost";
// $dbUsername = "root";
// $dbPassword = "";
// $dbName = "Picross";
// $conn = mysqli_connect ($dbServername, $dbUsername, $dbPassword, $dbName);

// if ($conn->connect_error) {
//   die("Connection failed: " . $conn->connect_error ."<br>");
// }
// echo "Connected successfully <br>";

session_start();

$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "cat";
echo "Session variables are set.". ".<br>";
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";
echo "Favorite animal is " . $_SESSION["favanimal"] . ".". ".<br>";
$_SESSION["favcolor"] = "yellow";
echo "Favorite color is " . $_SESSION["favcolor"] . ".<br>";

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





  <div class="button">
      <form id="myform" method = "post" action = "">
          Login:

          <input type="text" name="login" placeholder="My name is jeff"><br><br>
          Password:

          <input type="text" name="password" placeholder="My password is jeff"><br><br>

        </form>
        <input type="submit" name= "submit" value="Login" id="b1"/>
        <button id="b1" type="submit" onclick="attemptLogin()">Title Page</button> 
        <button id="b2" type="button" onclick="newUser()">New User</button>

        
  </div>
  
<?php

function newuserfun() {

  $newlogin = $_POST['login']; 
  $newpassword = $_POST['password'];
  $newnfirstame = $_POST['firstname'];
  $newlastname = $_POST['lastname']; 
  $newage = $_POST['age'];
  $newgender = $_POST['gender'];
  $newlocation = $_POST['location'];

  $sql = "INSERT INTO Players (login, password , firstname, lastname, age, gender, location)
  VALUES ('$newlogin', '$newpassword', '$newnfirstame', '$newlastname', '$newage' , '$newgender' ,'$newlocation')";

  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
     echo "Error: " . $sql . "<br>" . $conn->error;
  }

}




$sql; // Get the queary of the login and password
$result ;// $result = $conn->query($sql); 



/*
if ($result === TRUE){
echo "it worked";
} else {
echo "it did not work";
}

*/

//////////// Getting Player Table Info //////////////////////////////////
/*

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
      echo "<br> id: ". $row["id"]. " - Name: ". $row["firstname"]. " " . $row["lastname"] ." " . $row["login"] . "<br>". "<br>";
  }
} else {
  echo "0 results"; 
}

*/


/////////// Inserting New User ///////////////



////////////////////////////////////////////////////////

?>


</body>
<!-- <script src="../js/canvas.js" charset="utf-8"></script> --> 
<script src="../js/form.js" charset="utf-8"></script>
</html>