var grid =  [[0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]];
var rowsNumber = 6;
var columnNumber = 7;
var buttonNumber = 7;
var boardElement = document.getElementById("board");
var bodyElement = document.getElementById("body")
var joueurUn = 1;

    for (var i = 0; i < rowsNumber; i++) {

        for (var j = 0; j < columnNumber; j++) {
            var divElement = document.createElement("div");
            divElement.className = "tableau";
            boardElement.appendChild(divElement);
            divElement.id = "case"+i+"-"+j;
        }
    }
    for (var k = 0; k < buttonNumber; k++) {
        var button = document.createElement("button");
        bodyElement.appendChild(button);
        button.className = "button";
        button.id = k;

        button.addEventListener ("click", function() {
           var col = this.id;
           var i = 0;
           while(i < 6 && grid[i][col] == 0) {
               i++;
           }
           var lig = i-1;
             if (joueurUn == 1) {
                joueurUn = 0;
                grid[lig][col] = 1;
              }

             else {
                joueurUn = 1;
                grid[lig][col] = 2;
             }
             actualiserGrille();
         });
    }

function afficherGrille (){
    for (var i = 0; i < grid.length; i++){
        console.log(grid[i]);
    }
}

function actualiserGrille(){
    for(var lig = 0; lig <  grid.length; lig++){
        for(col = 0; col < grid[lig].length; col++) {
            if (grid[lig][col] == 1) {
                document.getElementById("case"+lig+"-"+col).className = "playerone";
            }
            else if (grid[lig][col] == 2) {
                document.getElementById("case"+lig+"-"+col).className = "playertwo";
            }
        }
    }

}
