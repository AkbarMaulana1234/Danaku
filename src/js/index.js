const navBtn = document.getElementById("nav-button");
// top up star
const btnTopUp = document.getElementById("btn-topUp");
const popUpTopup = document.getElementById("top-up-popUP");
const closeTopUp = document.getElementById("closePoup");
const popupAnimasi = document.querySelector("section#top-up-popUP > div");
console.log(popupAnimasi);
btnTopUp.addEventListener("click", function () {
  popUpTopup.classList.toggle("hidden");
  popUpTopup.classList.toggle("flex");
  popupAnimasi.classList.toggle("scale-in");
  navBtn.classList.toggle("z-[100]");
});
closeTopUp.addEventListener("click", function () {
  popUpTopup.classList.toggle("hidden");
  popUpTopup.classList.toggle("flex");
  popupAnimasi.classList.toggle("scale-in");
  navBtn.classList.toggle("z-[100]");
});
// top up end
// transfer star
const btnTransfer = document.getElementById("btn-tranfer");
const popUpTransfer = document.getElementById("Transfer-popUp");
const closePoupTransfer = document.getElementById("closePoup-transfer");
btnTransfer.addEventListener("click", () => {
  popUpTransfer.classList.toggle("hidden");
  popUpTransfer.classList.toggle("flex");
  popUpTransfer.classList.toggle("scale-in");
  navBtn.classList.toggle("z-[100]");
});
closePoupTransfer.addEventListener("click", () => {
  popUpTransfer.classList.toggle("hidden");
  popUpTransfer.classList.toggle("flex");
  popUpTransfer.classList.toggle("scale-in");
  navBtn.classList.toggle("z-[100]");
});
//tranfer end
// eye button efek star
const eye = document.getElementById("eye-button");
const saldo = document.getElementById("saldo");
const saldoAsli = saldo;
eye.addEventListener("click", () => {
  saldo.classList.toggle("fa-eye");
  eye.querySelector(":last-of-type").classList.toggle("hidden");
});
// eye button efek end

//buka detail
const bukaDetail = document.getElementById("buka-detail");
const detail = document.getElementById("detail");
const backDetail = document.getElementById("back-detail");
console.log(bukaDetail);
bukaDetail.addEventListener("click", (e) => {
  detail.classList.toggle("hidden");
});
backDetail.addEventListener("click", (e) => {
  detail.classList.toggle("hidden");
});
