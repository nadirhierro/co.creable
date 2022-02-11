const modal = document.querySelector("body");
const elements = document.querySelectorAll(".animacion");
const options = {
  attributes: true,
};

let count = 0;

function isEven(n) {
  n = Number(n);
  return n === 0 || !!(n && !(n % 2));
}

function callback(mutationList, observer) {
  count++;
  mutationList.forEach(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      if (isEven(count)) {
        elements.forEach((element) => {
          element.classList.remove("animate__fadeOut");
          element.classList.add("animate__fadeIn");
        });
      } else {
        elements.forEach((element) => {
          element.classList.add("animate__fadeOut");
          element.classList.remove("animate__fadeIn");
        });
      }
    }
  });
}

const observer = new MutationObserver(callback);
observer.observe(modal, options);
