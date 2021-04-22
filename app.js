const endTime = 60;

const getRemainingTime = (endTime) => {
  const seconds = Math.floor((endTime / 1000) % 60);
  const minutes = Math.floor((endTime / 1000 / 60) % 60);
  const hours = Math.floor((endTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor((endTime / (1000 * 60 * 60 * 24)));
  return {
    endTime: endTime - 1000,
    seconds,
    minutes,
    hours,
    days
  }
}

document.addEventListener("DOMContentLoaded", () => {
  let days = 1;
  let hours = 1;
  let minutes = 1;
  let seconds = 2;

  let time =
    days * 86400000 +
    hours * 3600000 +
    minutes * 60000 +
    seconds * 1000

  let spansBottom = document.querySelectorAll(".card-bottom-text  span");
  let spansTop = document.querySelectorAll(".card-top-text span");

  let textDaysTop = spansTop[0]
  let textDaysBottom = spansBottom[0];
  let textHoursTop = spansTop[1];
  let textHoursBottom = spansBottom[1];
  let textMinutesTop = spansTop[2];
  let textMinutesBottom = spansBottom[2]
  let textSecondsTop = spansTop[3];
  let textSecondsBottom = spansBottom[3];

  const countDown = setInterval(() => {
    const result = getRemainingTime(time);
    time = result.endTime;

    const { days, hours, minutes, seconds } = result;

    textSecondsTop.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textSecondsBottom.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    textMinutesTop.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textMinutesBottom.innerHTML = minutes < 10 ? `0${minutes}` : minutes;

    textHoursTop.innerHTML = hours < 10 ? `0${hours}` : hours;
    textHoursBottom.innerHTML = hours < 10 ? `0${hours}` : hours;

    textDaysTop.innerHTML = days < 10 ? `0${days}` : days;
    textDaysBottom.innerHTML = days < 10 ? `0${days}` : days;


    if (time < 0) {
      clearInterval(countDown);
    }
  }, 1000)
});