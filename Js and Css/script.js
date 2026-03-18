const formSubmit = (e) => {
  e.preventDefault();
  const itemInput = document.getElementById("todolist");
  const item = itemInput.value;
  const grocery = document.createElement("article");
  grocery.classList.add("groceryItem");
  const section = document.getElementById("saveditems");
  section.innerHTML += `
  <article class="groceryItem">
  <p>${item}</p>
  <button onclick="deleteGroceryItem(event)">Delete 🗑️</button>
  <button onclick="slashItem(event)"> Marks as complete ✅</button>
  </article>
  `;
  form.reset();
};

const deleteGroceryItem = (e) => {
  const button = e.target;
  const article = button.parentElement;
  article.remove();
};
const form = document.getElementById("formtodolist");
form.addEventListener("submit", formSubmit);

const slashItem = (e) => {
  const button = e.target;
  const article = button.parentElement;
  const p = article.querySelector("p");
  p.style.textDecoration = "line-through";
};
