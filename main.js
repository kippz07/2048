$(function () {

  $box = $('.box');

  grid = [[$box[0],$box[1],$box[2]],[$box[3],$box[4],$box[5]],[$box[6],$box[7],$box[8]]]

  $(document).keydown(function (event) {
    if (event.keyCode == 40) {
      console.log("down");
      upDownMid(1, 2);
      upDown(0, 2);
    }

    if (event.keyCode == 38) {
      console.log("up");
      upDownMid(1, 0);
      upDown(2, 0);
    }

    if (event.keyCode == 39) {
      console.log("right");
      leftRightMid(1, 2);
      leftRight(0, 2);
    }

    if (event.keyCode == 37) {
      console.log("left");
      leftRightMid(1, 0);
      leftRight(2, 0);
    }
  });

});

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
    }
  });
}

function leftRightMid(start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[i][end].innerHTML == 0) {
      grid[i][end].innerHTML = grid[i][start].innerHTML;
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
    }
  });
}

function upDownMid(start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[end][i].innerHTML == 0) {
      grid[end][i].innerHTML = grid[start][i].innerHTML;
      grid[start][i].innerHTML = 0;
    }
  });
}
