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

  let cardTopSeconds = document.getElementById("card-top-seconds");

  function startCountDown(time) {
    const countDown = setInterval(() => {
      const result = getRemainingTime(time);
      time = result.endTime;
  
      console.log("fsa")
      const { days, hours, minutes, seconds } = result;
  
      cardTopSeconds.style.animation = "top-to-bottom 0.5s linear";
      cardTopSeconds.style.transition = "all 1s ease"
  
      textSecondsTop.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsBottom.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
      textMinutesTop.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      textMinutesBottom.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  
      textHoursTop.innerHTML = hours < 10 ? `0${hours}` : hours;
      textHoursBottom.innerHTML = hours < 10 ? `0${hours}` : hours;
  
      textDaysTop.innerHTML = days < 10 ? `0${days}` : days;
      textDaysBottom.innerHTML = days < 10 ? `0${days}` : days;
  
      //cardTopSeconds.addEventListener("animationend", animationTop);
  
      if (time < 0) {
        clearInterval(countDown);
      }
    }, 1000)
  }

  const modal = document.getElementById("modal");
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "none";
    let days = Number(document.getElementById("days").value) || 0;
    let hours = Number(document.getElementById("hours").value) || 0;;
    let minutes = Number(document.getElementById("minutes").value) || 0;;
    let seconds = Number(document.getElementById("seconds").value) || 0;;
    
    let time =
      days * 86400000 +
      hours * 3600000 +
      minutes * 60000 +
      seconds * 1000

    startCountDown(time);
  });

  const closeButton = document.getElementById("close-button");
  closeButton.addEventListener("click", (e) => {
    e.preventDefault()
    
    modal.style.display = "none";
    startCountDown(time);
  });
  
});