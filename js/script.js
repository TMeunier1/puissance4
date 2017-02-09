var corps = document.getElementById("board");
var board = document.createElement("table");
board.className = "tableau";
corps.appendChild(board);

var boardElements = [["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""],
                     ["","","","","","",""]
                    ];
var Jaune;
var Rouge;
