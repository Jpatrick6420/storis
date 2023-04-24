const main = document.getElementById('fieldOne');
const inquiry = document.getElementById('fieldTwo');
const minimize = document.getElementById('reset');
const training = document.getElementById('tutorial');
const hideVideo = document.getElementById('antiVideo');
const instruction = document.getElementById('manual');


// search button



//sales order var






const salesimages = ['./images/salesorder.jpeg', './images/customerScreen.jpeg', './images/fullfilment.jpeg', './images/payment.jpeg']


const salesOrderNotes = document.getElementById('salesOrderNotes');
const searchTips = document.getElementById('searchTips');
const modifyInstructions = document.getElementById('modifyInstructions');
const multipleFullfilments = document.getElementById('multipleFulfillments');
const search = document.getElementById('search');
const descriptionField = document.getElementById('DescriptionField');
const fulfilmentInstructions = document.getElementById('FulfilmentInstructions');

const salesPerson = document.getElementById('salesPerson');

const multSalesPeople = document.getElementById('multSalesPeople');

const salesorderExample = document.getElementById('salesOrderExample');


//other sections
const productivity = document.getElementById('ProductivityNotes');
const salesActivity = document.getElementById('viewSalesActivityNotes');
const delivery = document.getElementById('deliveryNotes');


//close button
const CloseButton = document.getElementById('closeInstructions');



function enlargeMain() {
    main.style.width === "10vw" ? main.style.width = '50vw' : main.style.width = '10vw';
};
function enlargeInquiry() {
    inquiry.style.width === "10vw" ? inquiry.style.width = '50vw' : inquiry.style.width = '10vw';
};


//Sales functions


function Tutorial() {

    salesOrderNotes.style.display === 'none' ? salesOrderNotes.style.display = 'block' : salesOrderNotes.style.display = "none";
}



function cierreVideo() {
    training.style.display === 'none';
    hideVideo.style.display = 'none';
    salesOrderNotes.style.display = 'none';
}

function displaySearchTips() {
    search.style.display === 'none' ? search.style.display = 'block' :
        search.style.display = 'none';


}
function openModifyInstructions() {
    if (descriptionField.style.display === 'none') { descriptionField.style.display = 'block'; }
    else { descriptionField.style.display = 'none' }
}

function openFulfilmentInstructions() {
    fulfilmentInstructions.style.display === 'none' ?
        fulfilmentInstructions.style.display = 'block' : fulfilmentInstructions.style.display = 'none';
}



function multipleSalesPerson() {
    salesPerson.style.display === "none" ? salesPerson.style.display = "block" : salesPerson.style.display = "none"
}

function openSalesOrder() {
    salesOrderExample.style.width === "25px" ? salesOrderExample.style.width = "800px" : salesOrderExample.style.width = "25px";
}

function openMerchandiseScreen() { document.getElementById('merchandiseImage').style.width === "25px" ? document.getElementById('merchandiseImage').style.width = "800px" : document.getElementById('merchandiseImage').style.width = "25px" };


function openSearchScreen() { document.getElementById('searchImage').style.width === "25px" ? document.getElementById('SearchImage').style.width = "800px" : document.getElementById('searchImage').style.width = "25px" };

function openFullfilmentScreen() { document.getElementById('fullfilmentImage').style.width === "25px" ? document.getElementById('fullfilmentImage').style.width = "800px" : document.getElementById('fullfilmentImage').style.width = "25px" };

function openPaymentImage() { document.getElementById('paymentImage').style.width === "25px" ? document.getElementById('paymentImage').style.width = "800px" : document.getElementById('paymentImage').style.width = "25px" };

//Productivity Information


function PlayProductActivity() {

    productivity.style.display === "none" ? productivity.style.display = "block" : productivity.style.display = "none";
}



//sales activity functions



function PlaySalesActivity() {
    salesActivity.style.display === "none" ? salesActivity.style.display = "block" : salesActivity.style.display = "none";
}

function DeliverySchedule() {

    delivery.style.display === 'none' ? delivery.style.display = 'block' : delivery.style.display = 'none';
}


//closes all tutorial windows


function closeInstructions() {
    salesOrderNotes.style.display = "none";
    modifyInstructions.style.display = "none";
    salesActivity.style.display = "none";
    productivity.style.display = "none";
    delivery.style.display = "none";

}