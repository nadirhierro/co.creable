const height = document.querySelector(".servicios").offsetHeight;
console.log(height);

const toMove = document.querySelectorAll(".toMove");

toMove.forEach((element) => {
  element.style.setProperty.top = `${height}`;
});
