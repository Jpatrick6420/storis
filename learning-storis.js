const multipleSalesPersonButton = document.querySelector("#multSalesPeople");
const salesimages = [
  "./images/salesorder.jpeg",
  "./images/customerScreen.jpeg",
  "./images/fullfilment.jpeg",
  "./images/payment.jpeg",
];

// const salesOrderNotes = document.getElementById("salesOrderNotes");
const searchTips = document.getElementById("searchTips");
const modifyInstructions = document.getElementById("modifyInstructions");
const multipleFullfilments = document.getElementById("multipleFulfillments");
const search = document.getElementById("search");
const descriptionField = document.getElementById("DescriptionField");
const fulfilmentInstructions = document.getElementById(
  "FulfilmentInstructions"
);
const merchandiseImage = document.querySelector("#merchandiseImage");

const salesPerson = document.getElementById("salesPerson");

const multSalesPeople = document.getElementById("multSalesPeople");

const salesorderExample = document.getElementById("salesOrderExample");

salesorderExample.addEventListener("click", function () {
  enlargePicture(salesorderExample);
});

//other sections
// const productivity = document.getElementById("ProductivityNotes");
// const salesActivity = document.getElementById("viewSalesActivityNotes");

// //close button
// const CloseButton = document.getElementById("closeInstructions");

// function enlargeMain() {
//   main.style.width === "10vw"
//     ? (main.style.width = "50vw")
//     : (main.style.width = "10vw");
// }
// function enlargeInquiry() {
//   inquiry.style.width === "10vw"
//     ? (inquiry.style.width = "50vw")
//     : (inquiry.style.width = "10vw");
// }

//Sales functions

// function Tutorial() {
//   salesOrderNotes.style.display === "none"
//     ? (salesOrderNotes.style.display = "block")
//     : (salesOrderNotes.style.display = "none");
// }
const openMenu = (screen) =>
  (screen.style.display = screen.style.display === "none" ? "block" : "none");

function displaySearchTips() {
  openMenu(search);
}
function openModifyInstructions() {
  openMenu(descriptionField);
}

function openFulfilmentInstructions() {
  openMenu(fulfilmentInstructions);
}
multipleSalesPersonButton.addEventListener("click", function (e) {
  openMenu(salesPerson);
});

const enlargePicture = (picture) =>
  (picture.style.width = picture.style.width === "25px" ? "400px" : "25px");

function openMerchandiseScreen() {
  enlargePicture(merchandiseImage);
}

function openSearchScreen() {
  document.getElementById("searchImage").style.width === "25px"
    ? (document.getElementById("SearchImage").style.width = "800px")
    : (document.getElementById("searchImage").style.width = "25px");
}

function openFullfilmentScreen() {
  enlargePicture(document.getElementById("fullfilmentImage"));
}
merchandiseImage.addEventListener("click", function () {
  enlargePicture(merchandiseImage);
});

function openPaymentImage() {
  // document.getElementById("paymentImage").style.width === "25px"
  //   ? (document.getElementById("paymentImage").style.width = "800px")
  //   : (document.getElementById("paymentImage").style.width = "25px");
  enlargePicture(document.getElementById("paymentImage"));
}

//Productivity Information

function PlayProductActivity() {
  openMenu(productivity);
}

//sales activity functions

function PlaySalesActivity() {
  openMenu(salesActivity);
}

function DeliverySchedule() {
  openMenu(delivery);
}

//closes all tutorial windows

function closeInstructions() {
  salesOrderNotes.style.display = "none";
  modifyInstructions.style.display = "none";
  salesActivity.style.display = "none";
  productivity.style.display = "none";
  delivery.style.display = "none";
}

// manage open orders section

const manageOpenOrders = document.querySelector(".manage-open-orders");
// const showManageOpenOrders= document.querySelector(".show-manage-open-orders");
// showManageOpenOrders.addEventListener("click", () => {

//     manageOpenOrders.style.display === "none" ? manageOpenOrders.style.display = "block" : manageOpenOrders.style.display = "none";
// })

const showAddNotes = document.querySelector(".show-add-notes");
const addNotes = document.querySelector(".add-notes");
const showAuditComments = document.querySelector(".show-audit-comments");
const auditComments = document.querySelector(".audit-comments");
const showDeliveryInstructions = document.querySelector(
  ".show-delivery-instructions"
);
const deliveryInstructions = document.querySelector(".delivery-instructions");

showAddNotes.addEventListener("click", () => {
  openMenu(addNotes);
});
showAuditComments.addEventListener("click", () => {
  openMenu(auditComments);
});

showDeliveryInstructions.addEventListener("click", () => {
  openMenu(deliveryInstructions);
});
