const showNotes = document.querySelector(".show-add-notes");
const setPickupOptions = document.querySelector(".set-pickup-options");

// showNotes.addEventListener("click", function () {
//   removeHiddenClass(document.querySelector(".add-notes"));
// });

const viewOptions = document.querySelector("#view-options");

viewOptions.addEventListener("click", function () {
  if (setPickupOptions.classList.contains("hidden")) {
    removeHiddenClass(setPickupOptions);
  } else {
    setPickupOptions.classList.add("hidden");
  }
});
