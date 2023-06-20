let text = document.getElementById('text');
let ramaIzq = document.getElementById('rama-izq');
let ramaDer = document.getElementById('rama-der');
let vallaIzq = document.getElementById('valla-izq');
let vallaDer = document.getElementById('valla-der');

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  text.style.marginTop = value * 1 + 'px';
  ramaIzq.style.left = value * -1.5 + 'px';
  ramaDer.style.left = value * 1.5 + 'px';
  vallaIzq.style.left = value * 0.7 + 'px';
  vallaDer.style.left = value * -0.7 + 'px';
});



const products = [
  {
    name: 'corset',
    price: 39.00,
    seller: 'NewsKill',
    image: 'assets/corset-mujer-1.png'
  },
  {
    name: 'corset',
    price: 69.99,
    seller: 'NewKill',
    image: 'assets/corset-2.png'
  },
  {
    name: 'Zapatos',
    price: 225.00,
    seller: 'NewRock',
    image: 'assets/biker-boots.png'
  },
  {
    name: 'Zapatos',
    price: 119.99,
    seller: 'buffalo',
    image: './assets/buffalo1.png'
  },
  {
    name: 'Zapatos',
    price: 315.00,
    seller: 'buffalo',
    image: './assets/buffalo2.png'
  },
  {
    name: 'botas',
    price: 255,
    seller: 'newrock',
    image: 'assets/wsto45.png'
  },
  {
    name: 'Botas',
    price: 215,
    seller: 'Demonia',
    image: 'assets/boots-demonian.png'
  },
  {
    name: 'Camiseta',
    price: 30,
    seller: 'newrock',
    image: './assets/camiseta-manga-larga.png',
  },
  {
    name: 'accesorios',
    price: 20,
    seller: 'babythess',
    image: 'assets/guantes-lolita.png'
  },
  {
    name: 'accesorios',
    price: 47,
    seller: 'babythess',
    image: 'assets/accesorio-1.png'
  },
  {
    name: 'Sudadera',
    price: 35,
    seller: 'newrock',
    image: 'assets/sudadera-fantasma.png'
  },
  {
    name: 'Botas',
    price: 324.99,
    seller: 'Demonia',
    image: 'assets/boots-demonia-2.png'
  },
];

const copyOfProducts = products.slice().sort((productA, productB) => productB.price < productA.price ? 1 : -1);


const resetProducts = document.querySelector('#button-reset');
const searchForSeller = document.querySelector('#search-seller');
const searchButton = document.querySelector('#button-filter');
const searchForPrice = document.querySelector('.filter-price');




const getProducts = (product) => {
  return `
<div class="box">
  <div class="image">
  <img src=${product.image} alt="${product.name}" >
  </div>
  <div class="contenido">
  <h4>${product.name}</h4>
  <h4>${product.seller}</h4>
<div class="price">${product.price}€</div>
  </div>
</div>
  `;

};
const boxContainer = document.querySelector('#shop-container');


const setupProductsList = () => {
  const boxContainer = document.querySelector('#shop-container');

  for (const product of products) {
    boxContainer.innerHTML += getProducts(product)
  }

};


const newArray = (newArrayCreated) => {
  newArrayCreated.forEach(pr => {
    boxContainer.innerHTML += getProducts(pr)
  })
}


const searchProduct = () => {
  const productsFilter = products.filter((producto) =>
    producto.seller.toLowerCase().includes(searchForSeller.value.toLowerCase()) || producto.name.toLowerCase().includes(searchForSeller.value.toLowerCase())
  );


  boxContainer.innerHTML = "";
  newArray(productsFilter);
};

const searchPrice = () => {
  const productsPrice = products.filter((producto) =>
    producto.price >= searchForPrice.value && producto.price <= searchForPrice.value
  );
  console.log(productsPrice)
};










const resetObjets = () => {
  boxContainer.innerHTML = '';
  setupProductsList();
  searchForPrice.value = '';
  searchForSeller.value = '';
}








const searchIn = document.querySelector("#search-seller");

searchButton.addEventListener('click', searchProduct);
resetProducts.addEventListener('click', resetObjets);
window.addEventListener('load', setupProductsList());

