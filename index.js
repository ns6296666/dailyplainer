const date = dayjs(new Date());
const day = date.format("dddd, MMMM D");

const currentDayElement = document.getElementById("currentDay");
currentDayElement.textContent = day;
const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const result = timeArray.map((t) => {
  const ampm = t % 12;
  console.log("ampm", ampm);
  return `${ampm === 0 ? 12 : ampm}${t >= 12 ? "pm" : "am"}`;
});
console.log(result);
