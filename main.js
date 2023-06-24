// scrolling

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
    seller: 'Newkill',
    image: 'assets/corset-mujer-1.png'
  },
  {
    name: 'corset',
    price: 69.99,
    seller: 'Newkill',
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
    seller: 'Buffalo',
    image: './assets/buffalo1.png'
  },
  {
    name: 'Zapatos',
    price: 315.00,
    seller: 'Buffalo',
    image: './assets/buffalo2.png'
  },
  {
    name: 'botas',
    price: 255,
    seller: 'NewRock',
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
    seller: 'NewRock',
    image: './assets/camiseta-manga-larga.png',
  },
  {
    name: 'accesorios',
    price: 20,
    seller: 'BabyThess',
    image: 'assets/guantes-lolita.png'
  },
  {
    name: 'accesorios',
    price: 47,
    seller: 'BabyThess',
    image: 'assets/accesorio-1.png'
  },
  {
    name: 'Sudadera',
    price: 35,
    seller: 'NewRock',
    image: 'assets/sudadera-fantasma.png'
  },
  {
    name: 'Botas',
    price: 324.99,
    seller: 'Demonia',
    image: 'assets/boots-demonia-2.png'
  },
];

const copyOfProducts = products.sort((productA, productB) => productB.price < productA.price ? 1 : -1);

const resetProducts = document.querySelector('#button-reset');
const searchButton = document.querySelector('#button-filter');
const boxContainer = document.getElementById("shop-container");


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

const setupProductsList = (productToPrint) => {
  const boxContainer = document.querySelector('#shop-container');

  boxContainer.innerHTML = '';

  for (const product of productToPrint) {
    boxContainer.innerHTML += getProducts(product);
  }
};

const filtrarProductos = () => {
  const searchForSeller = document.getElementById("search-seller").value;
  const searchForPrice = document.getElementById("search-price").value;

  const productFiltered = products.filter((product) => {
    if (product.price <= searchForPrice || product.seller === searchForSeller) {
      return product;
    }
  });

  setupProductsList(productFiltered);
};

const resetObjects = () => {
  const boxContainer = document.querySelector('#shop-container');
  const searchForPrice = document.querySelector('input[type="number"]');
  const searchForSeller = document.getElementById("search-seller");

  boxContainer.innerHTML = '';
  setupProductsList(products);
  searchForPrice.value = '';
  searchForSeller.value = '';
};

const searchForPrice = document.querySelector('input[type="number"]');
const searchForSeller = document.getElementById("search-seller");

searchButton.addEventListener('click', filtrarProductos);
resetProducts.addEventListener('click', resetObjects);
window.addEventListener('load', () => setupProductsList(products));
