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
window.onload = () => {
  getDataProduct();
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
            <span class="price">${val.price}</span>
        </div>
        </div>
    </div>
    `);
  }, "");
  document.getElementById("productList").innerHTML = reuslt;
};
