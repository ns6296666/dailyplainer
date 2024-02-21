const date = dayjs(new Date());
const day = date.format("dddd, MMMM D");

const currentDayElement = document.getElementById("currentDay");
currentDayElement.textContent = day;
