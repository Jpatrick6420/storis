const mobileNavMenu = document.querySelector(".nav-mobile__links");

class FurntitureReferenceItems {
  constructor(label, instructions) {
    this.label = label;
    this.instructions = instructions;
  }
}

const furnitureReferenceTopics = [{"Sleepers", "Product group => SLEEPR", {"Adjustable Bases", "product group => MATADJ"},{"Rug Pad", "Product Group => RUGPAD"}];

const frames = new FurntitureReferenceItems(
  "Frames",
  " Product Group => FRAMES"
);

const fab = new FurntitureReferenceItems(
  "Fabric Protection",
  " Product Group => FAB-3Y, FAB-5Y, FAB-7Y"
);
const mattressProtectors = new FurntitureReferenceItems(
  "Mattress Protectors",
  "Collection => MATT-PRO"
);
const woodProtection = new FurntitureReferenceItems(
  "Wood Protection",
  "Product group => WD-PRO"
);

furnitureReferenceTopics.push(mattressProtectors, fab, frames, woodProtection);

// console.log(referenceTopics);

const furnitureReferenceSection = document.querySelector(
  ".main-reference__items"
);

furnitureReferenceTopics.map((topic) => {
  const topicMarkup = `
  <div class='main-reference__topic'>
        <h3 id="${topic.label.toLowerCase()}">${topic.label}</h3>
         <p>${topic.instructions}</p>
    </div>
    `;

  furnitureReferenceSection.insertAdjacentHTML("afterbegin", topicMarkup);
});
// console.log(referenceTopics);

/// Electronics references
