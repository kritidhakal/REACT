


import ProductCard from './ProductCard';


const Product = ({price,productName,productDescription,image}) => {
  

  return (
    <>
  

<ProductCard  price={price} image={image} productDescription={productDescription} productName={productName}/>
    </>
  )};

export default Product;