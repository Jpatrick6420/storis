const showNotes = document.querySelector(".show-add-notes");
showNotes.addEventListener("click", function () {
  removeHiddenClass(document.querySelector(".add-notes"));
});
