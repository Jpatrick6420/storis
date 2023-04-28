const productSearch = document.querySelector(".product-search");
const opps = document.querySelector("button.options");
const sortOptions = document.querySelector(".sort-options")
const customer = document.querySelector("button.customer");
const customerSearch = document.querySelector(".customer-search")
const finance = document.querySelector("button.finance");
const financetab = document.querySelector("div.financing-tab");


opps.addEventListener("click", () => {
    sortOptions.style.display === "none" ? sortOptions.style.display = "block" : sortOptions.style.display = "none";
})

document.querySelector("button.search-product").addEventListener("click", () => {
    productSearch.style.display === "none" ? productSearch.style.display = "block" : productSearch.style.display = "none";
});

customer.addEventListener("click", () => {
    customerSearch.style.display === "none" ? customerSearch.style.display = "block" : customerSearch.style.display = "none";

})
finance.addEventListener("click", () => {
    financetab.style.display === "none" ? financetab.style.display = "block" : financetab.style.display = "none";
})
