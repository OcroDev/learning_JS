const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h4>${clockHour}</h4>`;
      }, 1000);
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = "";

      d.querySelector(btnPlay).disabled = false;
      e.target.disabled = true;
    }
  });
}

export function alarm(btnPlay, btnStop) {
  const alarm = new Audio("../assets/alarma.mp3");
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarm.play();
      alarm.loop = true;
      e.target.disabled = true;
      d.querySelector(btnStop).disabled = false;
    }
    if (e.target.matches(btnStop)) {
      alarm.pause();
      alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
      e.target.disabled = true;
    }
  });
}
