$(function () {

  $box = $('.box');

  grid = [[$box[0],$box[1],$box[2]],[$box[3],$box[4],$box[5]],[$box[6],$box[7],$box[8]]]

  $(document).keydown(function (event) {
    if (event.keyCode == 40) {
      console.log("down");
      updownmid(1, 2);
      updown(0, 2);
    }

    if (event.keyCode == 38) {
      console.log("up");
      updownmid(1, 0);
      updown(2, 0);
    }

    if (event.keyCode == 39) {
      console.log("right");
      leftrightmid(1, 2);
      leftright(0, 2);
    }

    if (event.keyCode == 37) {
      console.log("left");
      leftrightmid(1, 0);
      leftright(2, 0);
    }
  });

});

function leftright (start, end) {
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

function leftrightmid(start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[i][end].innerHTML == 0) {
      grid[i][end].innerHTML = grid[i][start].innerHTML;
      grid[i][start].innerHTML = 0;
    }
  });
}

function updown (start, end) {
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

function updownmid(start, end) {
  grid[start].forEach(function (x, i) {
    if (grid[end][i].innerHTML == 0) {
      grid[end][i].innerHTML = grid[start][i].innerHTML;
      grid[start][i].innerHTML = 0;
    }
  });
}
