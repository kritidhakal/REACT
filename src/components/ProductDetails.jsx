import { useState } from "react";
const ProductDetails = (price) => {
  const priceFloat = parseFloat(price);
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  const subtract = () => {
    setCount((count) => {
      return count == 0 ? count : count - 1;
    });
  };

  return (
    <div class="product-details">
      <span class="product-price">
        ${count == 0 ? priceFloat : priceFloat * count}
      </span>
      <div class="quantity">
        <button onClick={subtract}>-</button>
        <input type="text" value={count} />
        <button onClick={add}>+</button>
      </div>
      <button class="add-to-cart">Add to Cart</button>
    </div>
  );
};

export default ProductDetails;
