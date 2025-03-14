import { fetchImages } from "./api.js";

export async function loadInitialGallery() {
   const json = await fetchImages();
   const galleryItems = document.querySelectorAll(".swiper-slide");

   json.slice(0, 4).forEach((photo, index) => {
      if (index < galleryItems.length) {
         const slide = galleryItems[index];
         const img = document.createElement("img");
         img.src = photo.download_url;
         img.alt = photo.author;
         slide.append(img);
      }
   });

   return { json, startIndex: 4 };
}
