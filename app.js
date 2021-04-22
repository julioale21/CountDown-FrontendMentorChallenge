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
  let days = 0;
  let hours = 1;
  let minutes = 1;
  let seconds = 2;

  let time =
    days * 86400000 +
    hours * 3600000 +
    minutes * 60000 +
    seconds * 1000

  let spans = document.querySelectorAll(".card-bottom-text  span");
  let textDays = spans[0];
  let textHours = spans[1]
  let textMinutes = spans[2]
  let textSeconds = spans[3]

  const countDown = setInterval(() => {
    const result = getRemainingTime(time);
    time = result.endTime;

    const { days, hours, minutes, seconds } = result;

    textSeconds.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textHours.innerHTML = hours < 10 ? `0${hours}` : hours;
    textDays.innerHTML = days < 10 ? `0${days}` : days;
    console.log(result);

    if (time < 0) {
      clearInterval(countDown);
    }
  }, 1000)
});