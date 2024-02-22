const date = dayjs(new Date());
const time = date.format("h:mm A");
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

let liElement = result.forEach((hour, i) => {
  const divElement = document.createElement("div");
  divElement.classList.add("custom-row");

  // input element
  const key = `savedData${i}`;
  const inputText = document.createElement("input");
  inputText.classList = `event-plan${i}`;
  inputText.type = "text";
  inputText.value = localStorage.getItem(key);

  // file icon
  const iconElement = document.createElement("i");
  iconElement.classList = "fa-solid fa-file";
  iconElement.style.color = "white";
  iconElement.style.fontSize = "18px";
  inputText.style.backgroundColor =
    time < hour.time ? "#D3D3D2" : time > hour.time ? "#75DC77" : "#FE685F";
  console.log("============", time, hour.time, time < hour.time);
  divElement.innerHTML = `
 
  <p class="hour">${hour.time}</p>

  <p class="detail"></p>
 <div class="icons"></div>
 
`;
  divElement.querySelector(".detail").appendChild(inputText);
  divElement.querySelector(".icons").appendChild(iconElement);
  parentElement.append(divElement);

  inputText.addEventListener("change", inputHandler);
  function inputHandler() {
    localStorage.setItem(key, inputText.value);
    inputText.value = localStorage.getItem(key);
    // check icon
    const checkIcon = document.createElement("i");
    checkIcon.classList = "fa-solid fa-check";
    checkIcon.style.color = "white";
    checkIcon.style.fontSize = "18px";

    const newDiv = document.getElementById("data");
    const saved = document.getElementById("saved-data");
    saved.textContent = `data saved to localstorage `;

    return newDiv.append(checkIcon);
  }

  const savedBtns = document.querySelectorAll("icons");
  savedBtns.forEach((savedBtn) =>
    savedBtn.addEventListener("onclick", inputHandler)
  );
});
