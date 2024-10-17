import cart from './assets/icon-cart.svg';
import image from './assets/image-product-desktop.jpg';
import {useState} from 'react';
import './App.css';

function App() {
  const [itemcount,setItemcount]=useState(0);
  const addToCart =()=> {
    setItemcount(itemcount+1)
    
}

  return (
    <>
    <div class="container">
      <div>
        <img src={image} class="image" />
      </div>
      <div class="details">
          <p class="perfume">PERFUME</p>
          <h2 class="name">Gabrielle Essence Eau De Parfum</h2>
          <p class="para">A floral,solar and voluptuous interpretation composed by Olivier Polge,Perfumer-creator for the House of CHANEL</p>
          <h2 class="price">$149.99 <del>$169.99</del></h2>
          <button class="cart" onClick={addToCart} ><img src={cart} />&nbsp; Add to Cart</button>
      </div>
    </div>
    <div class="cartinfo">
      <img src={cart} alt="" />
        <span class="itemcount" id="count">{itemcount}</span>
    </div>
</>
  );
}

export default App;
