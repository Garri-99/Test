const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor(seconds / 60) % 60;
    let s = seconds % 60;
    timerEl.textContent = `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
      s > 9 ? s : "0" + s
    }`;
    const timerId = setInterval(() => {
      seconds--;
      h = Math.floor(seconds / 3600);
      m = Math.floor(seconds / 60) % 60;
      s = seconds % 60;
      timerEl.textContent = `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
        s > 9 ? s : "0" + s
      }`;
      if (seconds === 0) {
        clearInterval(timerId);
      }
    }, 1000);
    return timerId
  };
};

let prevTimerId = null;

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.match(/\d/g)?.join("") || "";
});

buttonEl.addEventListener("click", () => {
  if (prevTimerId) {
    clearInterval(prevTimerId)
  }
  const seconds = Number(inputEl.value);

  prevTimerId = animateTimer(seconds);

  inputEl.value = "";
});
