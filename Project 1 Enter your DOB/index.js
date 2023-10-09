let isDOBOpen = false;
let dateOfBirth;
const settingCogEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingcontent");
const initialTextEl = document.getElementById("initialText");
const afterDOBBTNTextEL = document.getElementById("afterDOBBTNText");
const dobButtonEL = document.getElementById("dobButton");
const dobInputEL = document.getElementById("dobInput");

const yearEL = document.getElementById("year");
const monthEL = document.getElementById("month");
const dayEL = document.getElementById("day");
const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondEL = document.getElementById("second");

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};
const toggleDateOfBirthSelector = () => {
  if (isDOBOpen) {
    settingContentEl.classList.add("hide");
  } else {
    settingContentEl.classList.remove("hide");
  }
  isDOBOpen = !isDOBOpen;
};
const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12;
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(dateDiff / (1000 * 60)) % 60;
  const second = Math.floor(dateDiff / 1000) % 60;
  yearEL.innerHTML = makeTwoDigitNumber(year);
  monthEL.innerHTML = makeTwoDigitNumber(month);
  dayEL.innerHTML = makeTwoDigitNumber(day);
  hourEL.innerHTML = makeTwoDigitNumber(hour);
  minutesEL.innerHTML = makeTwoDigitNumber(minutes);
  secondEL.innerHTML = makeTwoDigitNumber(second);
};

const setDOBHandler = () => {
  const dateString = dobInputEL.value;
  dateOfBirth = dateString ? new Date(dateString) : null;

  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterDOBBTNTextEL.classList.remove("hide");
    setInterval(() => updateAge(), 1000);
  } else {
    initialTextEl.classList.remove("hide");
    afterDOBBTNTextEL.classList.add("hide");
  }
};
setDOBHandler();

settingCogEl.addEventListener("click", toggleDateOfBirthSelector);
dobButtonEL.addEventListener("click", setDOBHandler);
