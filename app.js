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
  const spansBottom = document.querySelectorAll(".card-bottom  span");
  const spansTop = document.querySelectorAll(".card-top span");

  const spansBottomBackground = document.querySelectorAll(".card-bottom-bg  span");
  const spansTopBackground = document.querySelectorAll(".card-top-bg span");

  let textDaysTop = spansTop[0];
  let textDaysBottom = spansBottom[0];
  let textHoursTop = spansTop[1];
  let textHoursBottom = spansBottom[1];
  let textMinutesTop = spansTop[2];
  let textMinutesBottom = spansBottom[2];
  let textSecondsTop = spansTop[3];
  let textSecondsBottom = spansBottom[3];

  let textDaysTopBg = spansTopBackground[0];
  let textDaysBottomBg = spansBottomBackground[0];
  let textHoursTopBg = spansTopBackground[1];
  let textHoursBottomBg = spansBottomBackground[1];
  let textMinutesTopBg = spansTopBackground[2];
  let textMinutesBottomBg = spansBottomBackground[2];
  let textSecondsTopBg = spansTopBackground[3];
  let textSecondsBottomBg = spansBottomBackground[3];

  let cardTopSeconds = document.getElementById("card-top-seconds");
  let cardBottomSeconds = document.getElementById("card-bottom-seconds");

  let cardTopMinutes = document.getElementById("card-top-minutes");
  let cardBottomMinutes = document.getElementById("card-bottom-minutes");

  let cardTopHours = document.getElementById("card-top-hours");
  let cardBottomHours = document.getElementById("card-bottom-hours");

  let cardTopDays = document.getElementById("card-top-days");
  let cardBottomDays = document.getElementById("card-bottom-days");

  const startCountDown = (time) => {
    const countDown = setInterval(() => {
      const result = getRemainingTime(time);
      time = result.endTime;

      const { days, hours, minutes, seconds } = result;

      if (Number(textSecondsTop.innerHTML) !== seconds) {
        cardTopSeconds.style.animation = "top-to-bottom 0.5s linear";
        cardBottomSeconds.style.animation = "bottom-to-top 0.5s linear";
      }

      if (Number(textMinutesTop.innerHTML) !== minutes) {
        cardTopMinutes.style.animation = "top-to-bottom 0.5s linear";
        cardBottomMinutes.style.animation = "bottom-to-top 0.5s linear";
      }

      if (Number(textHoursTop.innerHTML) !== hours) {
        cardTopHours.style.animation = "top-to-bottom 0.5s linear";
        cardBottomHours.style.animation = "bottom-to-top 0.5s linear";
      }

      textSecondsTop.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsBottom.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsTopBg.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
      textSecondsBottomBg.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

      textMinutesTop.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      textMinutesBottom.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      textMinutesTopBg.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
      textMinutesBottomBg.innerHTML = minutes < 10 ? `0${minutes}` : minutes;

      textHoursTop.innerHTML = hours < 10 ? `0${hours}` : hours;
      textHoursBottom.innerHTML = hours < 10 ? `0${hours}` : hours;
      textHoursTopBg.innerHTML = hours < 10 ? `0${hours}` : hours;
      textHoursBottomBg.innerHTML = hours < 10 ? `0${hours}` : hours;

      textDaysTop.innerHTML = days < 10 ? `0${days}` : days;
      textDaysBottom.innerHTML = days < 10 ? `0${days}` : days;
      textDaysTopBg.innerHTML = days < 10 ? `0${days}` : days;
      textDaysBottomBg.innerHTML = days < 10 ? `0${days}` : days;

      cardTopSeconds.addEventListener("animationend", () => {
        cardTopSeconds.style.animation = "";
      });

      cardBottomSeconds.addEventListener("animationend", () => {
        cardBottomSeconds.style.animation = "";
      });

      cardTopMinutes.addEventListener("animationend", () => {
        cardTopMinutes.style.animation = "";
      });

      cardBottomMinutes.addEventListener("animationend", () => {
        cardBottomMinutes.style.animation = "";
      });

      cardTopHours.addEventListener("animationend", () => {
        cardTopHours.style.animation = "";
      });

      cardBottomHours.addEventListener("animationend", () => {
        cardBottomHours.style.animation = "";
      });

      cardTopDays.addEventListener("animationend", () => {
        cardTopDays.style.animation = "";
      });

      cardBottomDays.addEventListener("animationend", () => {
        cardBottomDays.style.animation = "";
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
