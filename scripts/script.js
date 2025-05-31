// Reviews

const scrollContainer = document.getElementById("scroll-container");
const btnLeft = document.getElementById("scroll-left");
const btnRight = document.getElementById("scroll-right");

// Получает ширину одного блока включая отступ
function getScrollStep() {
  const item = scrollContainer.querySelector(".item");
  const style = getComputedStyle(item);
  const gap = parseInt(style.marginRight || 0) || 10; // fallback
  return item.offsetWidth + gap;
}

btnLeft.addEventListener("click", () => {
  scrollContainer.scrollLeft -= getScrollStep();
});

btnRight.addEventListener("click", () => {
  scrollContainer.scrollLeft += getScrollStep();
});
