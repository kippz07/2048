$(function () {

  $box = $('.box');
  $area = $('.area');
  $lose = $('h2');
  $lose.css("visibility", "hidden");

  grid = [[$box[0],$box[1],$box[2]],[$box[3],$box[4],$box[5]],[$box[6],$box[7],$box[8]]]

  $(document).keydown(function (event) {
    if (event.keyCode == 40) {
      console.log("down");
      upDownMid(1, 2);
      upDown(0, 2);
      addNewNumber(grid);
    }

    if (event.keyCode == 38) {
      console.log("up");
      upDownMid(1, 0);
      upDown(2, 0);
      addNewNumber(grid);
    }

    if (event.keyCode == 39) {
      console.log("right");
      leftRightMid(1, 2);
      leftRight(0, 2);
      addNewNumber(grid);
    }

    if (event.keyCode == 37) {
      console.log("left");
      leftRightMid(1, 0);
      leftRight(2, 0);
      addNewNumber(grid);
    }
  });

});

function lose () {
  $(document).off("keydown");
  $lose.css("visibility", "visible");
}

function addNewNumber (grid) {
  empty = [];
  grid.forEach(function (x, i) {
    x.forEach(function (y, j) {
      if (y.innerHTML == 0) {
        empty.push(y);
      }
    });
  });
  number = randomNumber(empty.length);
  if (empty.length != 0) {
    empty[number].innerHTML = 2;
  } else {
    console.log("You lose!");
    lose();
  }

}

function randomNumber (number) {
	var min = 0;
	var max = number;
	var num = Math.floor(Math.random() * (max - min)) + min;
	return num;
}

function leftRight (start, end) {
  grid[start].forEach(function (x, i) {
    if ((grid[i][1].innerHTML == 0) && (grid[i][end].innerHTML == 0)) {
      grid[i][end].innerHTML = grid[i][start].innerHTML;
      grid[i][start].innerHTML = 0;
    } else if (grid[i][1].innerHTML == 0) {
      grid[i][1].innerHTML = grid[i][start].innerHTML;
      grid[i][start].innerHTML = 0;
    } else if (grid[i][1].innerHTML == grid[i][start].innerHTML) {
      grid[i][1].innerHTML = parseInt(grid[i][1].innerText) + parseInt(grid[i][start].innerText);
      grid[i][start].innerHTML = 0;
    }
  });
}

function leftRightMid (start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[i][end].innerHTML == 0) {
      grid[i][end].innerHTML = grid[i][start].innerHTML;
      grid[i][start].innerHTML = 0;
    } else if (grid[i][end].innerHTML == grid[i][start].innerHTML) {
      grid[i][end].innerHTML = parseInt(grid[i][end].innerText) + parseInt(grid[i][start].innerText);
      grid[i][start].innerHTML = 0;
    }
  });
}

function upDown (start, end) {
  grid[start].forEach(function (x, i) {
    if ((grid[1][i].innerHTML == 0) && (grid[end][i].innerHTML == 0)) {
      grid[end][i].innerHTML = grid[start][i].innerHTML;
      grid[start][i].innerHTML = 0;
    } else if (grid[1][i].innerHTML == 0) {
      grid[1][i].innerHTML = grid[start][i].innerHTML;
      grid[start][i].innerHTML = 0;
    } else if (grid[1][i].innerHTML == grid[start][i].innerHTML) {
      grid[1][i].innerHTML = parseInt(grid[1][i].innerText) + parseInt(grid[start][i].innerText);
      grid[start][i].innerHTML = 0;
    }
  });
}

function upDownMid (start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[end][i].innerHTML == 0) {
      grid[end][i].innerHTML = grid[start][i].innerHTML;
      grid[start][i].innerHTML = 0;
    } else if (grid[end][i].innerHTML == grid[start][i].innerHTML) {
      grid[end][i].innerHTML = parseInt(grid[end][i].innerText) + parseInt(grid[start][i].innerText);
      grid[start][i].innerHTML = 0;
    }
  });
}
// function getGridLocation (number) {
//   row = 0;
//   column = 0;
//   switch (number){
//     case 1: column = 1;
//       break;
//     case 2: column = 2;
//       break;
//     case 3: row = 1;
//       break;
//     case 4: row= 1;
//       column = 1;
//       break;
//     case 5: row = 1;
//       column = 2;
//       break;
//     case 6: row =2 ;
//       break;
//     case 7: row = 2;
//       column = 1;
//       break;
//     case 8: row = 2;
//       column = 2;
//       break;
//   }
//   console.log(row + "," + column);
//   return [row, column];
// }
