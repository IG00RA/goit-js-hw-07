import { Gallery, galleryItems } from "./gallery-items.js";
declare const SimpleLightbox: any;

const galleryElem: HTMLUListElement | null = document.querySelector(".gallery");
const previewImg: string = galleryItems.reduce(
  (acc: string, item: Gallery): string => {
    return (acc += `<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" title="${item.description}" />
</a>`);
  },
  ""
);

galleryElem?.insertAdjacentHTML("beforeend", previewImg);

new SimpleLightbox(".gallery a", { captionDelay: 250 });
