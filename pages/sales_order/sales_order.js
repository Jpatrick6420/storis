const salesOrderExample = document.querySelector("#salesOrderExample");
const multSalesPersonButton = document.querySelector("#multSalesPeople");
const salesPerson = document.querySelector("#salesPerson");
const merchandiseImage = document.querySelector("#merchandiseImage");
const expandImage = (pic) => {
  pic.style.width = pic.style.width === "25px" ? "400px" : "25px";
};

merchandiseImage.addEventListener("click", function () {
  expandImage(merchandiseImage);
});
const removeHidden = (screen) => {
  if (screen.classList.contains("hidden")) {
    screen.classList.remove("hidden");
  } else {
    screen.classList.add("hidden");
  }
};
multSalesPersonButton.addEventListener("click", function () {
  removeHidden(salesPerson);
});
salesOrderExample.addEventListener("click", function () {
  expandImage(salesOrderExample);
});
