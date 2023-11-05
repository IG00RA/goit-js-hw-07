import { Gallery, galleryItems } from "./gallery-items";
declare const basicLightbox: any;

const galleryElem: HTMLDivElement | null = document.querySelector(".gallery");
const previewImg: string = galleryItems.reduce(
  (acc: string, item: Gallery): string => {
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
  },
  ""
);

galleryElem?.insertAdjacentHTML("beforeend", previewImg);
galleryElem?.addEventListener("click", openOriginalImage);

function openOriginalImage(event: MouseEvent): void {
  event.preventDefault();
  if (event.target instanceof HTMLElement) {
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

    const escapeFunction = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        instance.close();
      }
    };

    instance.show();
  }
}
