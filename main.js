const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailClose = document.querySelector('.product-detail-close');
const cardsConteiner = document.querySelector('.cards-container');

const menu = document.querySelector('img.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#ShoppingCardtConteiner');
const productDetailConteiner = document.querySelector('#product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menu.addEventListener('click', togglemobileMenu);
menuCarritoIcon.addEventListener('click', toggleproductDetail);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideOpen = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideOpen) {
        shoppingCartContainer.classList.add('inactive');
        }
    desktopMenu.classList.toggle('inactive');
    
}


function togglemobileMenu(){
    const isAsideOpen = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideOpen) {
        shoppingCartContainer.classList.add('inactive');
        }
        
        closeProductDetailAside()

    mobileMenu.classList.toggle('inactive');
}

function toggleproductDetail(){
    const isMobileMenuOpen = mobileMenu.classList.contains('inactive');


    if (!isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
        }

        const isProdictDetailOpen = productDetailConteiner.classList.contains('inactive');


        if (!isProdictDetailOpen) {
            productDetailConteiner.classList.add('inactive');
            }

        shoppingCartContainer.classList.toggle('inactive');
   
}

function openProductDetalle(){
  shoppingCartContainer.classList.add('inactive');

    productDetailConteiner.classList.remove('inactive');
}

function closeProductDetailAside(){
    productDetailConteiner.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        
});

productList.push({
    name: 'Pantalla',
    price: 1120,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhcddP6Nb4Zg9Z4rxroKHJTo_fGx7S4AgM1zh_0kJmklvjP-7YklVITFEFjveEdyxiR-Y&usqp=CAU',
        
});

productList.push({
    name: 'PC',
    price: 5120,
    image: 'https://m.media-amazon.com/images/I/71fVpfx5oiL._AC_SX466_.jpg',
        
});

function renderProductos(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetalle);

         const productInfo = document.createElement('div');
         productInfo.classList.add('product-info');
         
     
         const productInfodiv = document.createElement('div');
     
         const productInfoPPrecio = document.createElement('p');
         productInfoPPrecio.innerText = '$' + product.price;
         const productInfoPName = document.createElement('p');
         productInfoPName.innerText = product.name;
     
         productInfodiv.appendChild(productInfoPPrecio);
         productInfodiv.appendChild(productInfoPName);
     
     
         const productInfoFigure = document.createElement('figure');
         const productImgCart = document.createElement('img');
         productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
         productInfoFigure.appendChild(productImgCart);
     
         productInfo.appendChild(productInfodiv);
         productInfo.appendChild(productInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsConteiner.appendChild(productCard);
     
     }
}

renderProductos(productList);