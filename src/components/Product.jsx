


import Navbar from './Navbar';
import ProductCard from './ProductCard';


const Product = ({price,productName,productDescription,image}) => {
  

  return (
    <>
  
<Navbar/>
<ProductCard  price={price} image={image} productDescription={productDescription} productName={productName}/>
    </>
  )};

export default Product;