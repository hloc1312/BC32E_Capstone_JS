// console.log(axios);
const getDataProduct = () => {
  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product",
    method: "GET",
  });
  promise.then((result) => {
    console.log(result.data.content);
    renderProduct(result.data.content);
  });
  promise.catch((err) => {
    console.log(err);
  });
};

const renderProduct = (arrProduct) => {
  let reuslt = arrProduct.reduce((htmlString, val) => {
    return (htmlString += `
      <div class="col-lg-4 mb-4">
          <div class="card">
          <img src="${val.image}" alt="${val.name}" class="card-img-top" />
          <div class="card-body">
              <h5 class="card-title">${val.name}</h5>
              <p class="card-text">${val.shortDescription}</p>
          </div>
          <div class="card-footer">
              <a
              href="./detail.html?productid=${val.id}"
              class="btnStyle-buyNow"
              id="btnBuy"
              >Buy now</a
              >
              <span class="price">${val.price}$</span>
          </div>
          </div>
      </div>
      `);
  }, "");
  document.getElementById("productList").innerHTML = reuslt;
};

const renderProductID = (obj) => {
  const size = obj.size;
  const htmlSize = size.reduce((sizeString, val) => {
    return (sizeString += `
          <span>${val}</span>
      `);
  }, "");
  let htmlString = `
    <div class="col-lg-5">
        <img src="${obj.image}" alt="${obj.name}" />
    </div>
    <div class="col-lg-7">
        <h1 class="title">${obj.name}</h1>
        <p class="desc">${obj.description}</p>
        <p class="textSize">Available size</p>
        <div class="size">
        ${htmlSize}
        </div>
        <p class="price">${obj.price}$</p>
        <div class="button-wrap-increase">
        <button class="btnPlus">+</button>
        <span>1</span>
        <button class="btnPlus">-</button>
        </div>
        <a href="#" class="btnAddToCart mt-3">Add to cart</a>
    </div>
    
      `;
  document.getElementById("productIDList").innerHTML = htmlString;
};

const getDataProductID = (id) => {
  const promise = axios({
    url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=" + id,
    method: "GET",
  })
    .then((result) => {
      console.log(result);
      renderProductID(result.data.content);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  const url = new URLSearchParams(window.location.search);
  const myParam = url.get("productid");
  console.log("param", myParam);
  getDataProduct();
  getDataProductID(myParam);
};
