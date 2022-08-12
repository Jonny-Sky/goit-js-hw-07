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

let gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  captionsData = alt;
});
// function chendgAtreb =
// var lightbox = new SimpleLightbox(".gallery a", {});
console.log(galleryItems);
console.log(markupRender);
