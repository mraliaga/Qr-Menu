//Menu elemanlarinin listelenecegi arayuzu htmlden cagir

const menuList = document.getElementById("menu-list");

//MEnu elemanlarini render edecek fonksyon

export const renderCards = (data) => {
  const cardsHtml = data
    .map(
      (item) =>
        `<a
        href="./detail.html?id=${item.id}"
        id="card"
        class="d-flex flex-column flex-md-row text-dark text-decoration-none gap-3 mx-4 my-4"
      >
        <img src="${item.img}" class="rounded img-fluid shadow" />
        <div>
          <div class="d-flex justify-content-between">
            <h5>${item.title}</h5>
            <p class="text-success fw-bold">${item.price * 2} Euro</p>
          </div>
          <p class="lead">
            ${item.desc}
          </p>
        </div>
      </a>`
    )
    .join("");
  //Olusturulan Htmli #menuList divi icerisine aktar
  menuList.innerHTML = cardsHtml;
};

//Urun detay sayfasdini render eden fonksyon§
export const renderDetailPage = (product, outlet) => {
  outlet.innerHTML = `
  <div class="">
        <!-- Home Iconu -->
        <a href="/">
          <img width="35px" src="./images/home.png" alt="" />
        </a>
        <!-- Sayfa adı -->
        <p>anasayfa / ${product.category} / ${product.title.toLowerCase()}</p>
      </div>
      <h1 class="text-center my-4">${product.title} </h1>

      <img
        src="${product.img}"
        style="max-height: 400px"
        class="rounded object-fit-cover shadow"
        alt="image"
      />

      <h4 class="mt-4">
        Ürünün Kategorisi:
        <span class="text-success">${product.category}</span>
      </h4>

      <h4 class="mt-4">
        Ürünün Fiyatı:
        <span class="text-success">${product.price * 2} Euro</span>
      </h4>

      <p class="lead">
       ${product.desc}
      </p>
  `;
};

//Urun bulanamadiginda hata sayfasini render eden fonk

export const renderNotFoundedPage = (outlet) => {
  outlet.innerHTML = ` <div style="height:90vh" class="d-flex justify-content-center align-items-center ">
    <div class="d-flex flex-column align-items-center gap-3">
      <h1 class="fw-bold">Product didnt found(wtf)</h1>
      <a href='/'>Back To Main Page</a>
    </div>
  </div>`;
};
