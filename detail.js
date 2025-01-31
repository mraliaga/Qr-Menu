/* js url parameterlerilirn urslsearchparams classiyla daha kolay sekilde yonetebilriz.Bu class kendine urlin parametre olarak girilmesini ister.Devaminda get metoduyla ilgili parametre alinir.*/

import { renderDetailPage, renderNotFoundedPage } from "./ui.js";

const params = new URLSearchParams(window.location.search);

const id = parseInt(params.get("id"));

//Urun detayinin aktarilacagi HTML elemani.

const outlet = document.getElementById("outlet");

//Yukaridaki classdan ornek alinarak urldeki parametre ulasildi.

//Sayfa yuklendiginde caliscak fonksyon

document.addEventListener("DOMContentLoaded", async () => {
  // db.json dosyasina istek at

  const res = await fetch("./db.json");
  //Verileri js nesnesine cevir dedik.
  const data = await res.json();

  const product = data.menu.find((item) => item.id === id);

  if (!product) {
    renderNotFoundedPage(outlet);

    //Urunbulunamadi
  } else {
    renderDetailPage(product, outlet);
  }
});
