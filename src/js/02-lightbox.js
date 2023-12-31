import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector(".gallery");

const createImgMarkup = (array) => {
  const markup = array
    .map((el) => {
      return `<li class="gallery__item">
<a class="gallery__link"
  href="${el.original}">
  <img class="gallery__image"
    src="${el.preview}"
    alt="${el.description}"/></a></li>`;
    })
    .join("");

  galleryListEl.innerHTML = markup;
};
createImgMarkup(galleryItems);

const lightbox = new SimpleLightbox(".gallery__link", {
  captionDelay: 250,
  captionsData: "alt",
});
