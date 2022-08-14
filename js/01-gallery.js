import { galleryItems } from "./gallery-items.js";
// Change code below this line

const containerEl = document.querySelector(".gallery");
containerEl.insertAdjacentHTML("beforeend", renderList(galleryItems));
containerEl.addEventListener("click", selectPicture);

function renderList(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
}
function selectPicture(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const swatchEl = event.target.dataset.source;
  const instance = basicLightbox.create(`<img src=${swatchEl}>`);

  instance.show();
}
