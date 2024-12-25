document.addEventListener("DOMContentLoaded", function () {
  console.log("Custom script geladen!");
  const badge = document.createElement("div");
  badge.innerText = "Special Sale!";
  badge.style.backgroundColor = "red";
  badge.style.color = "white";
  badge.style.padding = "5px";
  badge.style.position = "fixed";
  badge.style.bottom = "10px";
  badge.style.right = "10px";
  document.body.appendChild(badge);
});
