import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerEl = document.querySelector(".gallery");
containerEl.insertAdjacentHTML("beforeend", markupRender(galleryItems));

function markupRender(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
