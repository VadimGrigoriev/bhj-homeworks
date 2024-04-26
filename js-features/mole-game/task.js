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
    reset(alert("Вы победили!"));
  } else if (lost.textContent == 5) {
    reset(alert("Вы проиграли!"));
  }
}

function reset() {
  dead.textContent = 0;
  lost.textContent = 0;
}