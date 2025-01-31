import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

// Sayfanın yüklenmesini dinle
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchMenu();

  // Menü kartlarını başlangıçta render et
  renderCards(data.menu);

  // Input elemanlarını al
  const inputs = document.querySelectorAll("#buttons input");

  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selected = input.id;
      //Eger hepsi seciliyse
      if (selected === "all") {
        renderCards(data.menu);
      } else {
        const filtered = data.menu.filter((item) => item.category == selected);
        renderCards(filtered);
      }

      // Filtreleme işlemi

      // Filtrelenmiş sonuçları ekrana bas
    });
  });
});

// console.log(data.menu);
// console.log(id);
