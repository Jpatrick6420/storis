const navMobileToggle = document.querySelector(".nav-mobile__menu--toggle");
const navMenu = document.querySelector(".nav-mobile__container");
const mainReference = document.querySelector(".main-reference__items");
const navMobileLinks = document.querySelector(".nav-mobile__links");
const salesOrderNotes = document.querySelector("#salesOrderNotes");
const productivityNotes = document.querySelector("#ProductivityNotes");

///buttons
const order = document.querySelector(".order");
const product = document.querySelector(".product");
const manage = document.querySelector(".manage");
const salesActivity = document.querySelector(".salesActivity");
const delivery = document.querySelector(".delivery");

const deliveryNotes = document.querySelector("#deliveryNotes");
const manageOpenOrdersNotes = document.querySelector(".manage-open-orders");

const addHiddenClass = (screen) => {
  screen.classList.add("hidden");
};

navMobileToggle.addEventListener("click", function () {
  navMenu.style.display = navMenu.style.display === "block" ? "none" : "block";
});

const removeHiddenClass = (id) => {
  id.classList.remove("hidden");
};

const init = () => {
  mainReference.classList.remove("hidden");
  addHiddenClass(productivityNotes);
  addHiddenClass(viewSalesActivityNotes);
  addHiddenClass(deliveryNotes);
  addHiddenClass(manageOpenOrdersNotes);
};

const closeAll = () => {
  addHiddenClass(mainReference);
  addHiddenClass(productivityNotes);
  addHiddenClass(viewSalesActivityNotes);
  addHiddenClass(deliveryNotes);
  addHiddenClass(manageOpenOrdersNotes);
  navMenu.style.display = "none";
};

const instructionTopics = [
  "salesOrderNotes",
  "ProductivityNotes",
  "manage-open-orders",
  "viewSalesActivityNotes",
  "deliveryNotes",
];

// instructionTopics.map((item) => {
//   const html = `
//   <li class='nav-mobile__link' data-id='${item}' >${item}</li>`;

//   navMobileLinks.insertAdjacentHTML("afterbegin", html);
// });

order.addEventListener("click", function (e) {
  closeAll();
  salesOrderNotes.classList.remove("hidden");
});

product.addEventListener("click", function (e) {
  closeAll();
  productivityNotes.classList.remove("hidden");
});

manage.addEventListener("click", function (e) {
  closeAll();
  manageOpenOrdersNotes.classList.remove("hidden");
});

salesActivity.addEventListener("click", function (e) {
  closeAll();
  removeHiddenClass(viewSalesActivityNotes);
});
delivery.addEventListener("click", function (e) {
  closeAll();
  removeHiddenClass(deliveryNotes);
});
