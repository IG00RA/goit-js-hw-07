import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElem = document.querySelector(".gallery");
const previewImg = galleryItems.reduce((acc, item) => {
  return (acc += `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`);
}, "");

galleryElem.insertAdjacentHTML("beforeend", previewImg);
galleryElem.addEventListener("click", openOriginalImage);

function openOriginalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
        document.addEventListener("keydown", escapeFunction);
      },

      onClose: () => {
        document.removeEventListener("keydown", escapeFunction);
      },
    }
  );

  const escapeFunction = (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  };

  instance.show();
}
