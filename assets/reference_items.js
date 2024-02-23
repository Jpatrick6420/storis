const mobileNavMenu = document.querySelector(".nav-mobile__links");
const furnitureReferenceSection = document.querySelector(
  ".main-reference__items"
);

class FurntitureReferenceItems {
  constructor(label, instructions) {
    this.label = label;
    this.instructions = instructions;
  }
}

const furnitureReferenceTopics = [
   {label: "Protectors", instructions: "product category => MATT-PRO"},
{label: "Frames", instructions : "product group => FRAMES"},
{label: "Blue Rewards", instructions: "sku: BLUE-REWARDS"},
{label: "Bunkettes", instructions: "product group => BUNKIE"},
{label: "Bed Brackets", instructions : "product group => CVNBED"},
{label: "Swivel", instructions : "product group => MOTACC"},
{label: "Battery Packs", instructions : "product group => MOTBAT"},
{label: "Adjustable Base Acc", instructions: "product group => ADJACC"},
{label: "Split Queen Boxspring", instructions: "collection => SQ-FND"},
{label: "Rug Pads", instructions: "product group => RUGPAD"},
{label:"Special Order", instructions:"collection: SO; vender: Code"}
];


const furnitureReferenceTopicsSorted = furnitureReferenceTopics.sort((a, b) => {
  return a.label.toLowerCase().localeCompare(b.label.toLocaleLowerCase());
});
console.log(furnitureReferenceTopicsSorted);
// console.log(referenceTopics);

furnitureReferenceTopicsSorted.map((topic) => {
  const topicMarkup = `
  <div class='main-reference__topic'>
        <h3 class='title' id="${topic.label.toLowerCase()}">${topic.label}</h3>
         <p class='instructions'>${topic.instructions}</p>
    </div>
    `;

  furnitureReferenceSection.insertAdjacentHTML("beforeend", topicMarkup);
});
// console.log(referenceTopics);

/// Electronics references
