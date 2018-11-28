
// global variables
var turnCounter = 0;
var turns = document.getElementById("turnCount");
var elemCounter = 0;
var elems = document.getElementById("elemCount");
var startTime;
var currentTime;
var timeDiff;
var clock = document.getElementById("time");;
var minutes = 0;
var seconds = 0;
var puzzle = [];
var answer = [];
var topHints = [];
var sideHint = [];
var hitColor = "green";
var gridColor = "white";
var time;


// initializes the page to a new game
function start() {
  // deletes a table if there is already one
  if (document.getElementById("ptable") != null){
    delete_table();
  }

  if (document.getElementsByTagName("h1")[1] != null){
    delete_msg();
  }

  // builds a new table based on the value of the selector field
  generate_table();
}

// generate a new puzzle
function generate_table() {
  var height = Number(document.getElementById("size").value) + 1;
  var width = height;

  elemCounter = 0;
  // generate key for puzzle
  puzzle = creatRandomPuzzle(height);
  // console.log(puzzle);

  topHints = makeTopHints(puzzle);
  // console.log(topHints);
  sideHints = makeSideHints(puzzle);
  // console.log(sideHints);

  var area = document.getElementById("picross");
  if(width == 8) area.setAttribute("style", "width: 50%");
  if (width == 14) area.setAttribute("style", "width: 50%");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");


  // creating all cells
  for (var i = 0; i < height; i++) {
    
    // creates a table row
    var row = document.createElement("tr");
    for (var j = 0; j < width; j++) {
      // create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      if (i == 0 && j == 0){
        var cell = document.createElement("td");
        cell.setAttribute("id", "column " + String(j) + " hint");
        cell.setAttribute("style", "background-color: transparent; width: 40px; height: 40px;")
        // cell.innerText = "0";
        row.appendChild(cell);
      }
      else if (i == 0 && j !== 0) {
        var cell = document.createElement("td");
        cell.setAttribute("id", "column " + String(j) + " hint");
        cell.setAttribute("style", "background-color: transparent; width: 40px;")
        cell.innerText = "0";
        row.appendChild(cell);
      } 
      else if (i !== 0 && j == 0) {
        var cell = document.createElement("td");
        cell.setAttribute("id", "row " + String(i) + " hint");
        cell.setAttribute("style", "background-color: transparent; height: 40px;")
        cell.innerText = "0";
        row.appendChild(cell);
      } 
      else if (i !== 0 && j !== 0){
        var cell = document.createElement("td");
        cell.setAttribute("id", String(i)+String(j));
        cell.setAttribute("class","off");
        cell.setAttribute("onclick","buttonClick(\""+String(i)+String(j)+"\")")
        cell.setAttribute("style", "background-color: " + gridColor)
        row.appendChild(cell);
      }
    }

    // add the row to the end of the table body
    tbl.appendChild(row);
  }
  
  // appends <table> into <body>
  area.appendChild(tbl);
  
  tbl.setAttribute("id", "ptable");

  printTopArrays(topHints);
  printSideArrays(sideHints);
  
  startTime = new Date();

  time = setInterval(timer, 1000);
  turnCounter = 0;
}

function stopTime(){
  console.log("Im Stopping");
  clearInterval(time);
}

// creates a random 2d array of puzzle
function creatRandomPuzzle(size){

  // creates a 2d array
  for (var i = 0; i < size - 1; i++) {
    puzzle[i] = [];
  }

  // initializes the array with booleans as a key for the puzzle
	for (var i = 0; i < size - 1; i++) {
		for (var j = 0; j < size - 1; j++) {
			if (Math.random() >= 0.5) {
        puzzle[i][j] = true;
        elemCounter++;
			} else {
				puzzle[i][j] = false;
			}
    }
    updateElements();
  }

  // returns a 2d array (answer key)
  return puzzle;
}

// creates a 2d array of hints for the top of the puzzle
function makeTopHints(puzzle) {

  var topHints = [];

  // creates a 2d array
  for (var i = 0; i < puzzle.length; i++) {
    topHints[i] = [];
  }
  
  // counter for keeping track of the number of trues in a row.
  var counter = 0;
  var hints = "";
  for (var j = 0; j < puzzle.length; j++) {
		for (var i = 0; i < puzzle.length; i++) {
			if (puzzle[i][j] == true) {
        counter++;
      }
      if (puzzle[i][j] == false){
        if (counter !== 0) topHints[j] = topHints[j] + (String(counter) + "\n");
        counter = 0;
      }
    }
    if (counter !== 0) topHints[j] = topHints[j] + (String(counter) + "\n")
    counter = 0;
  }

  // returns a 2d array (top hints)
  return topHints;
}

// creates a 2d array of hints for the side of the puzzle
function makeSideHints(puzzle) {

  var sideHints = [];

  // creates a 2d array
  for (var i = 0; i < puzzle.length; i++) {
    sideHints[i] = [];
  }

  // counter for keeping track of the number of trues in a row.
  var counter = 0;

  // traverse the puzzle and initialize a counter each time a true is found and stop the counter when a false is found
  for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle.length; j++) {
			if (puzzle[i][j] == true) {
        counter++;
      }
      else {
        if (counter !== 0) sideHints[i] = sideHints[i] + (" " + String(counter));
        counter = 0;
      }
    }
    if (counter !== 0) sideHints[i] = sideHints[i] + (" " + String(counter));
    counter = 0;
  }

  // returns a 2d array (side hints)
  return sideHints;
}

// check the values of the entire table against the answer key
function checkPuzzle() {

  // creates a 2d array
  for (var i = 0; i < puzzle.length; i++) {
    answer[i] = [];
  }

  // var grid = document.getElementById("ptable");
  
  // for loop for getting all turned on buttons 
  for (var i = 0; i < puzzle.length; i++) {
    for (var j = 0; j < puzzle.length; j++) {
      var block = document.getElementById(String(i+1) + String(j+1));
      if (block.getAttribute("class") == "off") answer[i][j] = false;
      if (block.getAttribute("class") == "on" && puzzle[i][j] == true) {
        answer[i][j] = true;
      }
    }
  }
  if (JSON.stringify(answer) === JSON.stringify(puzzle)) return true;
  else return false;
}

// button color change for selection
function buttonClick(id) {
  var button = document.getElementById(id);
  var state = button.getAttribute("class");
  
  // TODO: parse id so that we can run a check to see if the 
  // button clicked really is a true in the answer key
  // this will allow us to determine which color to make the
  // button and whether or not to decrement the elements left
  // on the field
  if (state == "off" /*&& puzzle[i][j] == true*/) {
    // elemCounter--;
    turnCounter++;
    button.style.backgroundColor = hitColor;
    button.setAttribute("class","on");
  }
  // ***** uncomment once the ability to check puzzle is available here *****
  // else if (state == "off" && puzzle[i][j] == false) {
  //   turnCounter++;
  //   button.style.color = "red";
  //   button.innerText = "X";
  //   button.setAttribute("class", "on");
  // }
  
  updateElements();
  updateTurns();
  
  var won = checkPuzzle();
  if (won == true) {
    stopTime();
    var congrats = document.createElement("h1");
    congrats.innerText = "Congratulations! You Won!"
    document.getElementById("picross").appendChild(congrats);
  }
}

function delete_table() {
  var table = document.getElementById("ptable");
  table.parentNode.removeChild(table);
}

function delete_msg() {
  var msg = document.getElementsByTagName("h1")[1];
  msg.parentNode.removeChild(msg);
}

function updateTurns() {
  turns.innerText = turnCounter;
}

function updateElements() {
  elems.innerText = elemCounter;
}

function timer() {
  currentTime = new Date();
  timeDiff = currentTime - startTime;
  clock = document.getElementById("time");
  minutes = Math.trunc(timeDiff/(1000*60))%60;
  seconds = Math.round(timeDiff/1000)%60;
  if (seconds < 10) clock.innerHTML = String(minutes) + ":0" + String(seconds);
  else if (seconds >= 10) clock.innerHTML = String(minutes) + ":" + String(seconds);
}

// Print top hints
function printTopArrays(array){
  for (var j = 0; j < array.length; j++){
    var column = document.getElementById("column " + String(j + 1) + " hint");
    for (var i = 0; i <= array[j].length; i++){
      column.innerText = array[j];
    }
  }
}

// Print side hints
function printSideArrays(array){
  for (var j = 0; j < array.length; j++) {
    var row = document.getElementById("row " + String(j + 1) + " hint");
    for (var i = 0; i <= array[j].length; i++) {
      row.innerText = array[j];
    }
  }
}



function updateColors(){
  var cells = new Array(Number(document.getElementById("size").value) + 1)

  console.log(cells);
  
  var gridColorButton = document.getElementById("gridColorSetting").value;
  gridColor = gridColorButton;
  var hitColorButton = document.getElementById("hitColorSetting").value;
  hitColor = hitColorButton;

  for (var i = 0; i < cells.length; i++){
    for (var j = 0; j < cells.length; j++){
      if (i !== 0 && j !== 0) {
        cell = document.getElementById(String(i) + String(j));
        if (cell.className === "on"){
          cell.setAttribute("style", "background-color: " + hitColor);
        }
        if (cell.className === "off")
          cell.setAttribute("style", "background-color: " + gridColor);
      }
    }
  }
}