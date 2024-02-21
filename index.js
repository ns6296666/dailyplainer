const date = dayjs(new Date());
const day = date.format("dddd, MMMM D");

/// file icon
const iconElement = document.getElementsByClassName("save-file");

// logic for creating business hour
const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const result = timeArray.map((t) => {
  const ampm = t % 12;

  return {
    time: `${ampm === 0 ? 12 : ampm}${t >= 12 ? "pm" : "am"}`,
    inputText: iconElement,
    fileIcon: "file.png",
  };
});

const currentDayElement = document.getElementById("currentDay");
currentDayElement.textContent = day;

// business hour element
const parentElement = document.getElementById("hours-list");

let liElement = document.createElement("li");
liElement = result.map((hour) => {
  return (liElement.textContent = hour);
});
parentElement.append(liElement);
console.log("ampm", liElement);
