const toTopButton = document.querySelector(".circle");

window.onscroll = () => {
  let scrollRadius =
    document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollRadius > 30) {
    toTopButton.style.display = "flex";
  } else {
    toTopButton.style.display = "none";
  }
};

toTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
