document.querySelector("#show").addEventListener("click", () => {
  document
    .querySelectorAll(".hidden")
    .forEach(e => e.classList.replace("hidden", "show"));
});
document.querySelector("#reset").addEventListener("click", () => {
  document
    .querySelectorAll(".show")
    .forEach(e => e.classList.replace("show", "hidden"));
});
document
  .querySelectorAll("li")
  .forEach(node =>
    node.addEventListener("click", () =>
      node.querySelector("span").classList.replace("hidden", "show")
    )
  );
