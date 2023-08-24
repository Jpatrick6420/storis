const salesimages = [
  "./images/salesorder.jpeg",
  "./images/customerScreen.jpeg",
  "./images/fullfilment.jpeg",
  "./images/payment.jpeg",
];

const searchTips = document.getElementById("searchTips");
const modifyInstructions = document.getElementById("modifyInstructions");
const multipleFullfilments = document.getElementById("multipleFulfillments");
const search = document.getElementById("search");
const descriptionField = document.getElementById("DescriptionField");
const fulfilmentInstructions = document.getElementById(
  "FulfilmentInstructions"
);

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

// function PlaySalesActivity() {
//   openMenu(salesActivity);
// }

function DeliverySchedule() {
  openMenu(delivery);
}

const manageOpenOrders = document.querySelector(".manage-open-orders");

const showAddNotes = document.querySelector(".show-add-notes");
const addNotes = document.querySelector(".add-notes");
const showAuditComments = document.querySelector(".show-audit-comments");
const auditComments = document.querySelector(".audit-comments");
const showDeliveryInstructions = document.querySelector(
  ".show-delivery-instructions"
);
