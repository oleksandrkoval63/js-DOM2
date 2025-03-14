import { swiper } from "./swiperConfig.js";
import { loadInitialGallery } from "./gallery.js";
import {
   addImages,
   clearGallery,
   deleteLastImage,
   reverseGallery,
} from "./uiHandlers.js";

(async function initializeGallery() {
   try {
      const { json, startIndex } = await loadInitialGallery();
      let currentIndex = startIndex;

      document.getElementById("add").addEventListener("click", () => {
         addImages(json, currentIndex, swiper);
         currentIndex += 4;
      });

      document.getElementById("clear").addEventListener("click", () => {
         clearGallery();
         currentIndex = 0;
      });

      document.getElementById("delete").addEventListener("click", () => {
         deleteLastImage(swiper);
      });

      document.getElementById("reverse").addEventListener("click", () => {
         reverseGallery();
      });
   } catch (error) {
      alert("Помилка завантаження галереї: " + error);
   }
})();
