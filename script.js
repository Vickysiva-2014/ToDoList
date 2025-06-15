const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "task-item";
  
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-checkbox";

  const span = document.createElement("span");
  span.textContent = text;

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    span.style.textDecoration = "line-through red";
    span.style.color = "#000";
  } else {
    span.style.textDecoration = "none";
    span.style.color = "#000";
  }
});

  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.onclick = () => li.remove();

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);

  input.value = "";
});
