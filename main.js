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
    price: 15,
    seller: 'newrock',
    image: 'assets/wsto45.png'
  },
  {
    name: 'Botas',
    price: 15,
    seller: 'Demonia',
    image: 'assets/boots-demonian.png'
  },
  {
    name: 'Camiseta',
    price: 15,
    seller: 'newrock',
    image: './assets/camiseta-manga-larga.png',
  },
  {
    name: 'accesorios',
    price: 15,
    seller: 'babythess',
    image: 'assets/guantes-lolita.png'
  },
  {
    name: 'accesorios',
    price: 15,
    seller: 'babythess',
    image: 'assets/accesorio-1.png'
  },
  {
    name: 'Sudadera',
    price: 15,
    seller: 'newrock',
    image: 'assets/sudadera-fantasma.png'
  },
  {
    name: 'Botas',
    price: 15,
    seller: 'Demonia',
    image: 'assets/boots-demonia-2.png'
  },
];

const copyOfProducts = products.slice().sort((productA, productB) => productB.price < productA.price ? 1 : -1);


const boxContainer = document.querySelector('#shop-container');
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
const productsList = document.querySelector('#shop-container');


const setupProductsList = () => {
  const productsList = document.querySelector('#shop-container');

  for (const product of products) {
    productsList.innerHTML += getProducts(product)
  }

};


const newArray = (newArrayCreated) => {
  newArrayCreated.forEach(pr => {
    productsList.innerHTML += getProducts(pr)
  })
}


const searchProduct = (event) => {
  console.log(event.target.value)
  const prueba = event.target.value;
  const productsFilter = products.filter((producto) =>
    producto.seller.toLowerCase().includes(event.target.value.toLowerCase())
  );

  console.log(productsFilter);
  console.log(prueba)
  productsList.innerHTML = "";
  newArray(productsFilter);
};




// window.addEventListener("load", printProducts);

const searchIn = document.querySelector("#search-seller");
// searchIn.addEventListener("input", searchProduct);
searchButton.addEventListener('click', searchProduct);



// const addoptionsToTypeOfPick = () => {
//   const sellerPickerSelct = document.querySelector('#search-seller');

//   const typeOfSeller = () => {
//     const optionTypeOfSeller = [];


//     for (let i = 0; i < products.length; i++) {
//       const typeSeller = products[i].seller;

//       if (!optionTypeOfSeller.includes(typeSeller)) {
//         optionTypeOfSeller.push(typeSeller);
//       }
//     };

//     console.log(optionTypeOfSeller)

//     optionTypeOfSeller.forEach(element => {
//       const optionSeller = document.createElement('option');
//       optionSeller.innerText = element;
//       sellerPickerSelct.append(optionSeller);
//     });


//   };
//   typeOfSeller();
// };





// const filterTheSeller = (typeOfSeller) => {

//   const newArraySeller = [];
//   copyOfProducts.forEach(products => {
//     if (products.seller === typeOfSeller) {
//       newArraySeller.push(products)
//     };
//   })
//   console.log(newArraySeller)

// };


// const selectionOption = () => {
//   const options = document.querySelectorAll("#search-seller").value;
//   console.log(options);
// };

// selectionOption()

// const filterByPrice = (findPrice, newArryPrice) => {
//   copyOfProducts.forEach(products => {
//     if (products.price <= findPrice) {
//       newArryPrice.push(products)
//     };
//   })
// }

// const productsInBoxContainer = (newArrayCreated) => {
//   newArrayCreated.forEach(products => {
//     boxContainer.innerHTML += getProducts(products)
//   })
// }




// resetProducts.addEventListener('click', (ev) => {
//   const resetObjets = () => {
//     boxContainer.innerHTML = '';
//     setupProductsList();
//     sellerPickerSelct.value = '';
//     searchForSeller.value = `inserta el precio`;
//   }

//   setTimeout(() => resetObjets(), 1000)

// })









// addoptionsToTypeOfPick();
window.addEventListener('load', setupProductsList());

// searchButton.addEventListener('click', timeoutClick);
// searchForPrice.addEventListener('change', timeoutChange);