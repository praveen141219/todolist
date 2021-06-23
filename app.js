const itemInput = document.querySelector("#item_input");
const addBtn = document.querySelector("#add_btn");
const itemContainer = document.querySelector("#item_container");

window.onload = () => {
  itemInput.focus();
};
let idx = 1;
const addItem = () => {
  if (itemInput.value === "") {
  } else {
    const li = document.createElement("li");
    const text = document.createElement("p");
    const btnDiv = document.createElement("div");
    const delBtn = document.createElement("i");
    delBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
    delBtn.addEventListener("click", () => {
      li.remove();
    });
    btnDiv.append(delBtn);
    text.innerText = `${idx++} :   ${itemInput.value}`;
    li.append(text.innerText, btnDiv);
    itemContainer.append(li);
    itemInput.value = "";
  }
};
const enter = (e) => {
  if (e.key === "Enter") {
    addItem();
    itemInput.value = "";
  }
};
window.addEventListener("keypress", enter);

addBtn.addEventListener("click", addItem);
