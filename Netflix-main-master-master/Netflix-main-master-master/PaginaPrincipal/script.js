const controls1 = document.querySelectorAll(".control1");
let currentItem1 = 0;
const items1 = document.querySelectorAll(".item1");
const maxItems1 = items1.length;

let nome = document.querySelector('.gallery1');

controls1.forEach((control1) => {
  control1.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left1");

    if (isLeft) {
      currentItem1 -= 1;
    } else {
      currentItem1 += 1;
    }

    if (currentItem1 + 1 >= maxItems1) {
      currentItem1 = 0;
    }

    if (currentItem1 < 0) {
      currentItem1 = maxItems1 - 1;
    }

    items1.forEach((item) => item.classList.remove("current-item1"));

    items1[currentItem1].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items1[currentItem1].classList.add("current-item1");
  });
});





const controls2 = document.querySelectorAll(".control2");
let currentItem2 = 0;
const items2 = document.querySelectorAll(".item2");
const maxItems2 = items2.length;

controls2.forEach((control2) => {
  control2.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem2 -= 1;
    } else {
      currentItem2 += 1;
    }

    if (currentItem2 >= maxItems2) {
      currentItem2 = 0;
    }

    if (currentItem2 < 0) {
      currentItem2 = maxItems2 - 1;
    }

    items2.forEach((item) => item.classList.remove("current-item2"));

    items2[currentItem2].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items2[currentItem2].classList.add("current-item2");
  });
});





const controls3 = document.querySelectorAll(".control3");
let currentItem3 = 0;
const items3 = document.querySelectorAll(".item3");
const maxItems3 = items3.length;

controls3.forEach((control3) => {
  control3.addEventListener("click", (e) => {
    isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem3 -= 1;
    } else {
      currentItem3 += 1;
    }

    if (currentItem3 >= maxItems3) {
      currentItem3 = 0;
    }

    if (currentItem3 < 0) {
      currentItem3 = maxItems3 - 1;
    }

    items3.forEach((item) => item.classList.remove("current-item3"));

    items3[currentItem3].scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: 'nearest'
    });

    items3[currentItem3].classList.add("current-item3");
  });
});


