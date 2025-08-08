const form = document.getElementById("todo-form");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInput = document.getElementById("task-input");
  const taskDate = document.getElementById("task-date");

  if (taskInput.value.trim() === "") return;

  const li = document.createElement("li");
  li.className = "task";
  li.innerHTML = `
    <span><strong>${taskInput.value}</strong> ${taskDate.value ? "📅 " + new Date(taskDate.value).toLocaleString() : ""}</span>
    <div>
      <button class="edit">Edit</button>
      <button class="complete">✓</button>
      <button class="delete">✕</button>
    </div>
  `;
  taskList.appendChild(li);

  taskInput.value = "";
  taskDate.value = "";

  li.querySelector(".delete").onclick = () => li.remove();

  li.querySelector(".complete").onclick = () => {
    li.classList.toggle("completed");
  };

  li.querySelector(".edit").onclick = () => {
    const newTask = prompt("Edit task:", taskInput.value);
    if (newTask) {
      li.querySelector("span").innerHTML = `<strong>${newTask}</strong> ${taskDate.value ? "📅 " + new Date(taskDate.value).toLocaleString() : ""}`;
    }
  };
});
