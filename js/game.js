// initializes the page to a new game
function start() {
  // deletes a table if there is already one
  if (document.getElementById("ptable") != null){
    delete_table();
  }

  // builds a new table based on the value of the selector field
  generate_table();

}

// generate a new puzzle
function generate_table() {
  var height = document.getElementById("size").value;
  var width = height;

  // generate key for puzzle
  var puzzle = creatRandomPuzzle(height);
  console.log(puzzle);

  var topHints = makeTopHints(puzzle);
  console.log(topHints);
  var sideHints = makeSideHints(puzzle);
  console.log(sideHints);

  var area = document.getElementById("picross");
  if(width == 7) area.setAttribute("style", "width: 50%");
  if (width == 13) area.setAttribute("style", "width: 50%");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tbody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < height; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < width; j++) {
      // create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("button");
      cell.setAttribute("id", String(i)+String(j));
      cell.setAttribute("class","off");
      cell.setAttribute("type", "button")
      cell.setAttribute("onclick","colorChange(\""+String(i)+String(j)+"\")")
      cell.setAttribute("background-color","white");
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tbl.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tbody);
  // appends <table> into <body>
  area.appendChild(tbl);
  // sets the border attribute of tbl to 2 and gives the table an id 'ptable'
  tbl.setAttribute("border", "2");
  tbl.setAttribute("id", "ptable");
}

// removes a previous puzzle
function delete_table() {
  var table = document.getElementById("ptable");
  table.parentNode.removeChild(table);
}

// creates a random 2d array of puzzle
function creatRandomPuzzle(size){

  var puzzle = [];

  // creates a 2d array
  for (var i = 0; i < size; i++) {
    puzzle[i] = [];
  }

  // initializes the array with booleans as a key for the puzzle
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if (Math.random() >= 0.4) {
				puzzle[i][j] = true;
			} else {
				puzzle[i][j] = false;
			}
		}
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
  
  for (var j = 0; j < puzzle.length; j++) {
		for (var i = 0; i < puzzle.length; i++) {
			if (puzzle[i][j] == true) {
        counter++;
      }
      if (puzzle[i][j] == false){
        if (counter !== 0) topHints[j].push(counter);
        counter = 0;
      }
    }
    if (counter !== 0) topHints[j].push(counter);
    counter = 0;
  }

  // printTopArrays(topHints);
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
        if (counter !== 0) sideHints[i].push(counter);
        counter = 0;
      }
    }
    if (counter !== 0) sideHints[i].push(counter);
    counter = 0;
  }

  // printSideArrays(sideHints);
  // returns a 2d array (side hints)
  return sideHints;
}

// check the values of the entire table against the answer key
function checkPuzzle(table) {
  for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			if (table[i][j] !== puzzle[i][j]) {
        // return false
        return false;
			}
		}
  }
  return false;
}

// button color change for selection
function colorChange(id) {
  var table = document.getElementById(picross);
  var button = document.getElementById(id);
 
  var state = button.getAttribute("class");
  
  if (state == "off") {
    button.style.backgroundColor = "green";
    button.setAttribute("class","on");
  }
  if (state == "on") {
    button.style.backgroundColor = "white";
    button.setAttribute("class","off");
  }
  
  // var won = checkPuzzle(table);
  // console.log(won);
}

// starts the game with a given game type
function proceed() {
  var gameType = document.getElementById("mode").value;

  
}

// testing hint creation
function printTopArrays(array){
  for (var j = 0; j < array.length; j++){
    console.log("column " + j + " hints = ");
    for (var i = 0; i < array[j].length; i++){
      console.log(array[i]);
    }
  }
}

// testing hint creation
function printSideArrays(array){
  for (var i = 0; i < array.length; i++){
    console.log("row " + i + " hints = ");
    for (var j = 0; j < array[i].length; j++){
      console.log(array[j]);
    }
  }
}