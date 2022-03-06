const list = document.querySelectorAll(".item");

list.forEach((item) => item.addEventListener("click", addActive));
function addActive() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
