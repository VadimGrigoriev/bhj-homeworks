const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (let i = 1; i <= 9; i++) {
  let hole = index => document.getElementById(`hole${index}`);
  hole(i).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
    game();
  }
}

function game() {
  if (dead.textContent == 10) {
    alert("Вы победили!");
    reset();
  } else if (lost.textContent == 5) {
    alert("Вы проиграли!");
    reset();
  }
}

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}