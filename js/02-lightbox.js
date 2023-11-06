import { galleryItems } from "./gallery-items.js";
const galleryElem = document.querySelector(".gallery");
const previewImg = galleryItems.reduce((acc, item) => {
    return (acc += `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`);
}, "");
galleryElem === null || galleryElem === void 0 ? void 0 : galleryElem.insertAdjacentHTML("beforeend", previewImg);
new SimpleLightbox(".gallery a", { captionDelay: 250 });
