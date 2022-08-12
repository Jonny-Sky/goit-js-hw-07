import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerEl = document.querySelector(".gallery");

function markupRender(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}
containerEl.insertAdjacentHTML("beforeend", markupRender(galleryItems));
// containerEl.addEventListener("click", selectPicture);
new SimpleLightbox(".some-element a", {
  /* options */
});
console.log(galleryItems);
console.log(markupRender);
