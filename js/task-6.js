function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("#controls input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
function createBoxes(amount) {
  const elements = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";
    box.style.borderRadius = "8px";
    elements.push(box);
    boxSize += 10;
  }
  boxesContainer.innerHTML = "";
  boxesContainer.append(...elements);
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
createButton.addEventListener("click", () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100");
  }
});
destroyButton.addEventListener("click", destroyBoxes);
