import React from 'react';
import '../App.css';


function MainComponent(){

    const alt = "Not found";
    const imgSource = require("../images/image-product-desktop.jpg");

    const header = "P E R F U M E";
    const title = "Gabrielle Essence Eau De Parfum";

    const text = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";
    
    const price = "$149.99";
    const discount = "$169.99";
    const buttonText = "Add to Cart"

    const headerClass = 'Paragraph Header';
    const titleClass = 'Title';
    const textClass = 'Paragraph';
    const priceClass = 'Price';
    const discountClass = 'Paragraph Discount';
    const buttonClass = 'Button';

    return (
        <div className='Main-square'>

          <div className='SquareChild'>
            <img src={imgSource} alt={alt} className= "Main-image"/>
          </div>

          <div className='SquareChild SecondHalf'>
            <h1 className={headerClass}>{header}</h1>
            <h1 className={titleClass}>{title}</h1>
            <p className={textClass}>{text}</p>
            <h2 className={priceClass}>{price}</h2>
            <h2 className={discountClass}>{discount}</h2>
            <button className={buttonClass}>{buttonText}</button>
          </div>
        </div>
      )
}
export default MainComponent;