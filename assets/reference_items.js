const mobileNavMenu = document.querySelector(".nav-mobile__links");

class ReferenceItems {
  constructor(label, instructions) {
    this.label = label;
    this.instructions = instructions;
  }
}

const referenceTopics = [];

const frames = new ReferenceItems(
  "frames",
  "View Product Activity => Magnifying Glass => Product Group => Frames"
);

const fab = new ReferenceItems(
  "Fabric Protection",
  "View Product Activity => Magnifying Glass => Product Group => action button => Fab"
);
const mattressProtectors = new ReferenceItems(
  "Mattress Protectors",
  "View Product Activity => Magnifying Glass => Collection => Mattpro"
);

referenceTopics.push(mattressProtectors, fab, frames);

// console.log(referenceTopics);

const referenceSection = document.querySelector(".main-reference__items");

referenceTopics.map((topic) => {
  const topicMarkup = `
  <div class='main-reference__topic'>
        <h3 id="${topic.label.toLowerCase()}">${topic.label}</h3>
         <p>${topic.instructions}</p>
    </div>
    `;

  referenceSection.insertAdjacentHTML("afterbegin", topicMarkup);
});
// console.log(referenceTopics);
