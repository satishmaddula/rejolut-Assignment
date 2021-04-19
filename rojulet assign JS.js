dropUpEl = document.getElementById("dropUp");
dropDownEl = document.getElementById("dropDown");
buyCoinsEl = document.getElementById("buyCoins");

sellDropUpEl = document.getElementById("sellDropUp");
sellDropDownEl = document.getElementById("sellDropDown");
sellCoinsEl = document.getElementById("sellCoins");

photoEl = document.getElementById("photo");
mobileProfileEl = document.getElementById("mobileProfile");
profileCloseEl = document.getElementById("profileClose");

dashboardCloseEl = document.getElementById("dashboardClose");
mobiledashboardEl = document.getElementById("mobiledashboard");
menuEl = document.getElementById("menu");

dropUpEl.addEventListener("click", () => {
    buyCoinsEl.textContent = "10000";
});

dropDownEl.addEventListener("click", () => {
    buyCoinsEl.textContent = "0";
});

sellDropUpEl.addEventListener("click", () => {
    sellCoinsEl.textContent = "10000";
});

sellDropDownEl.addEventListener("click", () => {
    sellCoinsEl.textContent = "0";
});

photoEl.addEventListener("click", () => {
    mobileProfileEl.classList.remove("d-none");
});

profileCloseEl.addEventListener("click", () => {
    mobileProfileEl.classList.add("d-none");
});

menuEl.addEventListener("click", () => {
    mobiledashboardEl.classList.remove("d-none");
});

dashboardCloseEl.addEventListener("click", () => {
    mobiledashboardEl.classList.add("d-none");
});