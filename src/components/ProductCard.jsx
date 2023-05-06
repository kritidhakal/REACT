import ProductDetails from "./ProductDetails";

const ProductCard = ({price,productName,productDescription,image}) => {
  return (
    <>
      <div class="product-card">
        <img src={image} alt="Product Image" />
        <h3>{productName}</h3>
        <p>{productDescription}</p>
        <ProductDetails price = {price}/>
      </div>
    </>
  );
};

export default ProductCard;
