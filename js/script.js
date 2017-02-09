var rowsNumber = 6;
var columnNumber = 7;
var boardElement = document.getElementById("board");
for (var i = 0; i < columnNumber; i++) {
    for (var j = 0; j < rowsNumber; j++) {
        var grid = document.createElement("div");
        grid.className = "tableau";
        boardElement.appendChild(grid);
    }
}

var boardElements = [["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""]
                    ];
var red = "";
var yellow = "";
