export function addImages(json, startIndex, swiper) {
   const galleryContainer = document.querySelector(".swiper-wrapper");
   const slice = json.slice(startIndex, startIndex + 4);

   slice.forEach((photo) => {
      const slide = document.createElement("div");
      const img = document.createElement("img");
      slide.classList.add("swiper-slide");
      img.src = photo.download_url;
      img.alt = photo.author;
      slide.appendChild(img);
      galleryContainer.appendChild(slide);
   });

   swiper.update();
   swiper.pagination.render();
   swiper.pagination.update();
}

export function clearGallery() {
   document.querySelector(".swiper-wrapper").innerHTML = "";
}

export function deleteLastImage(swiper) {
   const galleryList = document.querySelectorAll(".swiper-slide");
   if (galleryList.length > 0) {
      const lastSlide = galleryList[galleryList.length - 1];
      lastSlide.parentNode.removeChild(lastSlide);
      swiper.update();
   }
}

export function reverseGallery() {
   const galleryList = document.querySelectorAll(".swiper-slide");
   const arrayOfImg = Array.from(galleryList).reverse();
   const galleryContainer = document.querySelector(".swiper-wrapper");

   galleryContainer.innerHTML = "";
   arrayOfImg.forEach((slide) => galleryContainer.appendChild(slide));
}
