// initializes the page to a new game
function start() {
  // deletes a table if there is already one
  if (document.getElementById("ptable") != null){
    delete_table();
  }

  //  builds a new table based on the value of the selector field
  generate_table();
}

// Generate a new puzzle
function generate_table() {
  var height = document.getElementById("size").value;
  var width = height;

  var area = document.getElementById("picross");
  if(width == 7) area.setAttribute("style", "width: 15%");
  if (width == 13) area.setAttribute("style", "width: 27%");

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tbody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < height; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < width; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.setAttribute("id", String(i)+String(j));
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

// Removes a previous puzzle
function delete_table() {
  var table = document.getElementById("ptable");
  table.parentNode.removeChild(table);
}