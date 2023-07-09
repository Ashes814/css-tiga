"use strict";

const container = document.querySelector(".container");
console.log(container.classList);
const btnNormal = document.querySelector(".btn-normal");
const btnFly = document.querySelector(".btn-fly");
const btnPower = document.querySelector(".btn-power");

btnNormal.addEventListener("click", function () {
  container.classList.remove("power");
  container.classList.remove("fly");
});

btnPower.addEventListener("click", function () {
  container.classList.toggle("power");
  container.classList.remove("fly");
});

btnFly.addEventListener("click", function () {
  container.classList.toggle("fly");
  container.classList.remove("power");
});
