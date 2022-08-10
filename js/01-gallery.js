import { galleryItems } from "./gallery-items.js";
// Change code below this line
// const galleryList = ()

const renderList = (galleryItems) => {
  const result = galleryItems.map(
    (item) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>`
  );
  return result;
};
console.log(renderList(galleryItems));
console.log(galleryItems);
