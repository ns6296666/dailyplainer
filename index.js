const date = dayjs(new Date());
const day = date.format("dddd, MMMM D");

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
  divElement.classList.add("custom-row");

  // input element
  const inputText = document.createElement("input");
  inputText.type = "text";

  console.log(inputText);

  // file icon
  const iconElement = document.createElement("i");
  iconElement.classList = "fa-solid fa-file";
  iconElement.style.color = "blue";
  iconElement.style.fontSize = "24px";
  console.log("iconElement", iconElement);

  divElement.innerHTML = `
 
  <p class="hour">${hour.time}</p>

  <p class="detail"></p>
 <div class="icons"></div>
 
`;
  divElement.querySelector(".detail").appendChild(inputText);
  divElement.querySelector(".icons").appendChild(iconElement);
  parentElement.append(divElement);
});
console.log("ampm", parentElement);
