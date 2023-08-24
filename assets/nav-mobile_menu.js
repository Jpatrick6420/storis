class StorisInstructions {
  constructor(label, [...instructions]) {
    this.label = label;
    this.instructions = instructions;
  }
}

// const salesOrder = new StorisInstructions("Write a sales order", [
//   "Open'Enter a Sales Order'",
//   "Click the green Button",
//   "Select order type: sales order or sales quote",
//   "Input a Sales Persons Number",
//   "Search for a customer by Telephone number",
//   "Select Merchandise Tab on Left Side",
//   "Enter SKU under product and push tab or click the magnifying glass",
//   "Select the quanity of the item that the customer wants",
//   "Input all individual coupon codes",
//   "Select AS is button if it is as is. (You can search for it if needed)",
//   "Select save and add another to add another item to ticket and repeat previous steps or select Save to move on",
//   "Select Fulfilment on left side of screen (exit the fab screen)",
//   "Click the payment button on the left side of the screen",
//   "Push the 3 dots in the deposit section to Pay with card",
//   "Push Save",
// ]);

//const navMenuMarkup = `
//<li class="nav-mobile__link">${topic.label.toLowerCase()} <li>`;
