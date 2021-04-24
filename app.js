const endTime = 60;

const getRemainingTime = (endTime) => {
  const seconds = Math.floor((endTime / 1000) % 60);
  const minutes = Math.floor((endTime / 1000 / 60) % 60);
  const hours = Math.floor((endTime / (1000 * 60 * 60)) % 24);
  const days = Math.floor(endTime / (1000 * 60 * 60 * 24));
  return {
    endTime: endTime - 1000,
    seconds,
    minutes,
    hours,
    days,
  };
};

document.addEventListener("DOMContentLoaded", () => {
  const spansBottom = document.querySelectorAll(".card-bottom-text  span");
  const spansTop = document.querySelectorAll(".card-top-text span");

  const spansBottomBackground = document.querySelectorAll(".card-bottom-text-bg  span");
  const spansTopBackground = document.querySelectorAll(".card-top-text-bg span");

  let textDaysTop = spansTop[0];
  let textDaysBottom = spansBottom[0];
  let textHoursTop = spansTop[1];
  let textHoursBottom = spansBottom[1];
  let textMinutesTop = spansTop[2];
  let textMinutesBottom = spansBottom[2];
  let textSecondsTop = spansTop[3];
  let textSecondsBottom = spansBottom[3];

  let textDaysTopBackground = spansTopBackground[0];
  let textDaysBottomBackground = spansBottomBackground[0];
  let textHoursTopBackground = spansTopBackground[1];
  let textHoursBottomBackground = spansBottomBackground[1];
  let textMinutesTopBackground = spansTopBackground[2];
  let textMinutesBottomBackground = spansBottomBackground[2];
  let textSecondsTopBackground = spansTopBackground[0];
  let textSecondsBottomBackground = spansBottomBackground[0];

  let cardTopSeconds = document.getElementById("card-top-seconds");
  let cardBottomSeconds = document.getElementById("card-bottom-seconds");

  const startCountDown = (time) => {
    const countDown = setInterval(() => {
      const result = getRemainingTime(time);
      time = result.endTime;

      const { days, hours, minutes, seconds } = result;

      cardTopSeconds.style.animation = "top-to-bottom 0.5s linear";
      cardBottomSeconds.style.animation = "bottom-to-top 0.5s linear";

      textSecondsTop.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsBottom.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsTopBackground.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsBottomBackground.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

      textMinutesTop.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      textMinutesBottom.innerHTML = minutes < 10 ? `0${minutes}` : minutes;

      textHoursTop.innerHTML = hours < 10 ? `0${hours}` : hours;
      textHoursBottom.innerHTML = hours < 10 ? `0${hours}` : hours;

      textDaysTop.innerHTML = days < 10 ? `0${days}` : days;
      textDaysBottom.innerHTML = days < 10 ? `0${days}` : days;

      cardTopSeconds.addEventListener("animationend", () => {
        cardTopSeconds.style.animation = "";
      });

      cardBottomSeconds.addEventListener("animationend", () => {
        cardBottomSeconds.style.animation = "";
      });

      if (time < 0) {
        clearInterval(countDown);
      }
    }, 1000);
  };

  const modal = document.getElementById("modal");

  const form = document.querySelector(".modal-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let days = Number(document.getElementById("days").value) || 0;
    let hours = Number(document.getElementById("hours").value) || 0;
    let minutes = Number(document.getElementById("minutes").value) || 0;
    let seconds = Number(document.getElementById("seconds").value) || 0;

    let time = days * 86400000 + hours * 3600000 + minutes * 60000 + seconds * 1000;

    startCountDown(time);
    modal.style.display = "none";
  });

  const closeButton = document.getElementById("close-button");

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();

    modal.style.display = "none";
  });
});
