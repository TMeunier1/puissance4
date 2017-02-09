var rowsNumber = 6;
var columnNumber = 7;
var boardElement = document.getElementById("board");
var joueurUn = 1;
for (var i = 0; i < columnNumber; i++) {
    for (var j = 0; j < rowsNumber; j++) {
        var grid = document.createElement("div");
        grid.className = "tableau";
        boardElement.appendChild(grid);
        grid.addEventListener ("click", function() {
            if (joueurUn == 1) {
                this.className = "tableau";
                this.className = "playerone";
                joueurUn = 0;
            }
            else {
                this.className = "playertwo";
                joueurUn = 1;
            }
        });
    }
}

var boardElements = [["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""]
                    ];
