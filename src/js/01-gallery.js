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
    data-source="${el.original}"
    alt="${el.description}"/></a></li>`;
    })
    .join("");

  galleryListEl.innerHTML = markup;
};
createImgMarkup(galleryItems);
const handleGaleryClick = (event) => {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const onEscClose = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };
  const imgSrc = event.target.getAttribute("data-source");
  const instance = basicLightbox.create(
    `
  <div><img src="${imgSrc}" width = "800" height="600"></div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", onEscClose);
      },
      onClose: () => {
        document.removeEventListener("keydown", onEscClose);
      },
    }
  );

  instance.show();
};

galleryListEl.addEventListener("click", handleGaleryClick);
