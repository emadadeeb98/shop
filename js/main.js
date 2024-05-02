// document.onload(alert('welcome to our website'));
// احصل على العناصر من DOM
let arr = [0,0,0,0];
// var products;
async function getProducts() {
  let url = "products.json";
  try {
    let res = await fetch(url);
    // console.log(await res.json())
    // products=res.;
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
// getProducts()
async function renderProducts() {
  let products = await getProducts();
  let html = "";
  products.forEach((product) => {
    let htmlSegment = `
        <div class="col-md-4 text-center img-thumbnail">
                    <a style="text-decoration: none; color: #333;" href=" ${product.title}.html">
                        <img src="${product.image}" class="img-fluid " alt="">
                        <h3> ${product.title} </h3>
                        <h2 >${product.price} $</h2>
                    </a>
                    
                </div>`;
    html += htmlSegment;
  });
  let container = document.querySelector("#prod");
  container.innerHTML = html;
}
renderProducts();

function addToCart(id, s) {
  // alert(s);
  let arrs = JSON.parse(localStorage.getItem("userCart"));
  arrs[id-1]=s;
  localStorage.setItem("userCart", JSON.stringify(arrs));
  alert("success");
}

function handleInputChange() {
  const inputValue = document.getElementById("quantity").value;
  // console.log('قيمة الحقل:', inputValue);
  return inputValue;
}
async function gett(){
  let items = JSON.parse(localStorage.getItem("userCart"));
  const arrId = items.map((element) => element[0]);
console.log(items)
console.log(arrId); // [1, 4]

}
async function getCart() {

  let choosen_products = [];
  let items = JSON.parse(localStorage.getItem("userCart"));
  let products = await getProducts();
  console.log("item",products);
  // items.forEach((item) => {
  //   em[i][j] = item[i][j];
  //   let s = em[i];
  //   console.log(em[i][j]);
  //   console.log(s);
  // });
  for(let i =0; i<items.length;i++)
  {
    // choosen_products.push(products.find((product)=>product.id==items[]));
    if(items[i]>0)
    {
      choosen_products.push(products.find((product)=>product.id==i+1));
    }
  }
  console.log("shoo",choosen_products)
  addCartItemToDom(choosen_products)
  // console.log(products);
}

function addCartItemToDom(items){
  let html = '';
  let quantity = JSON.parse(localStorage.getItem("userCart"));
  console.log("q",quantity)
  items.forEach(item => {
 
    // let htmlSegment = `
    // <div class="product">
    // <img src="${item.image}" alt="منتج 1">
    // <div class="product-info">
    // <h3> ${item.title} </h3>
    // <p>price: $ ${item.price}</p>
    // <p> quantity: ${quantity[item.id-1]} </p>
    // </div>
    // <button class="delete-button" onclick="deleteFromCart(${item.id})" >delete</button>
    // </div>
    // `;
    let htmlSegment = `
    <div class="product">
    <img src="${item.image}" alt="منتج 1">
    <div class="product-info">
    <h3> ${item.title} </h3>
    <p>price: $ ${item.price}</p>
    <p> quantity: ${quantity[item.id-1]} </p>
    </div>
    <button class= "btn btn-danger " onclick="deleteFromCart(${item.id})" >delete</button>
    </div>
    `;
    html += htmlSegment;
  });
  let container= document.querySelector('#cart');
  container.innerHTML= html;
}
function deleteFromCart(id){
  let item = JSON.parse(localStorage.getItem("userCart"));
  console.log('i',item);
  item[id-1]=0;
  localStorage.setItem("userCart", JSON.stringify(item));
}
// async function getProducts() {
  //   let url = "https://fakestoreapi.com/products";
  //   try {
    //     let res = await fetch(url);
    //     return await res.json();
    //   } catch (error) {
//     console.log(error);
//   }
// }

// async function renderProducts() {
//   let products = await getProducts();
//   let html = '';
//   products.forEach(product => {
//     let htmlSegment = `
//         <div class="col-md-4 text-center img-thumbnail">
//                     <a style="text-decoration: none; color: #333;" href="product1.html">
//                         <img src="${product.image}" class="img-fluid " alt="">
//                         <h3> ${product.title} </h3>
//                         <h2 >${product.price} $</h2>
//                     </a>
//                 </div>`;
//     html += htmlSegment;
//   });
//   let container= document.querySelector('.container');
//   container.innerHTML= html;
// }
// renderProducts()
