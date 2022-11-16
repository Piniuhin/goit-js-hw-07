import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallaryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallaryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
gallaryContainer.addEventListener("click", onImgClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
}
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
//console.log(galleryItems);
