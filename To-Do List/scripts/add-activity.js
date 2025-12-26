const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const activitiesList = document.querySelector(".activities-list");

const addEvent = (event) => {
  event.stopPropagation();
  const inputVal = input.value;
  if (!inputVal) return;
  const listItem = document.createElement("li");
  listItem.classList.add("activities-list-item");
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-info");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const taskTitle = document.createElement("span");
  taskTitle.innerText = inputVal;
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  activitiesList.appendChild(listItem);
  listItem.appendChild(taskDiv);
  taskDiv.appendChild(checkBox);
  taskDiv.appendChild(taskTitle);
  listItem.appendChild(deleteButton);

  input.value = "";
};

addButton.addEventListener("click", addEvent);
