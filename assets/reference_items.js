const mobileNavMenu = document.querySelector(".nav-mobile__links");

class FurntitureReferenceItems {
  constructor(label, instructions) {
    this.label = label;
    this.instructions = instructions;
  }
}

const furnitureReferenceTopics = [];

const frames = new FurntitureReferenceItems(
  "frames",
  "View Product Activity => Magnifying Glass => Product Group => Frames"
);

const fab = new FurntitureReferenceItems(
  "Fabric Protection",
  "View Product Activity => Magnifying Glass => Product Group => action button => Fab"
);
const mattressProtectors = new FurntitureReferenceItems(
  "Mattress Protectors",
  "View Product Activity => Magnifying Glass => Collection => Mattpro"
);

furnitureReferenceTopics.push(mattressProtectors, fab, frames);

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
