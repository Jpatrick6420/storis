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
  { label: "Sleepers", instructions: "Product Group => SLEEPR" },
  { label: "Adjustable Bases", instructions: "Product Group => MATADJ" },
  { label: "Rug Pad", instructions: "Product Group => RUGPAD" },
  {
    label: "Line Comments",
    instructions:
      "Enter Ticket=> go to Merchandise Screen => Click Item=> Click Action Button => Select Line Comments",
  },
];

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
