const time = document.getElementById("timer");

function timer() {
  const counting = setInterval(() => {
    time.textContent -= 1;
    if (time.textContent == 0) {
      clearInterval(counting);
      alert("Вы победили в конкурсе!")
    }
  }, 1000);
}

timer();