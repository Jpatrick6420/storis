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
// const merchandiseImage = document.querySelector("#merchandiseImage");

const multSalesPeople = document.getElementById("multSalesPeople");

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

const enlargePicture = (picture) =>
  (picture.style.width = picture.style.width === "25px" ? "400px" : "25px");

// function openMerchandiseScreen() {
//   enlargePicture(merchandiseImage);
// }

function openSearchScreen() {
  enlargePicture(document.getElementById("searchImage"));
}

function openFullfilmentScreen() {
  enlargePicture(document.getElementById("fullfilmentImage"));
}

function openPaymentImage() {
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

// function closeInstructions() {
//   salesOrderNotes.style.display = "none";
//   modifyInstructions.style.display = "none";
//   salesActivity.style.display = "none";
//   productivity.style.display = "none";
//   delivery.style.display = "none";
// }

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
