const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let numCookie = Number(cookie.textContent);

function clicker() {
  cookie.onclick = () => {
    if (cookie.width === 200) {
      cookie.width += 50;
    } else if (cookie.width === 250) {
      cookie.width -= 50;
    }
    numCookie += 1;
    counter.textContent = numCookie;
  };
}

clicker();
