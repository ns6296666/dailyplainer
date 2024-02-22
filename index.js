const date = dayjs(new Date());
const day = date.format("dddd, MMMM D");

// input element
const inputText = document.createElement("input");
inputText.type = "text";
inputText.placeholder = "Enter your text";
console.log(inputText);

// file icon
const iconElement = document.createElement("i");
iconElement.classList = "fa-solid fa-file";
iconElement.style.color = "blue";
iconElement.style.fontSize = "24px";
console.log("iconElement", iconElement);

// logic for creating business hour
const timeArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
const result = timeArray.map((t) => {
  const ampm = t % 12;

  return {
    time: `${ampm === 0 ? 12 : ampm}${t >= 12 ? "pm" : "am"}`,
  };
});

const currentDayElement = document.getElementById("currentDay");
currentDayElement.textContent = day;

// business hour element
const parentElement = document.getElementById("container");

let liElement = result.forEach((hour) => {
  const divElement = document.createElement("div");
  divElement.classList.add("available-hours");
  divElement.innerHTML = `
 
  <p class="hour">${hour.time}</p>
  <div class="event-section">
    <p class="detail">${inputText.value}</p>
  </div>
  <div class="icons">${iconElement.outerHTML}</div>
`;
  parentElement.append(divElement);
});
// parentElement.append(liElement);
console.log("ampm", parentElement);
