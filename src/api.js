export async function fetchImages() {
   const response = await fetch("https://picsum.photos/v2/list");
   return await response.json();
}
