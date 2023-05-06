import { useState } from "react";
const ProductDetails = ({price}) => {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   if (count == 0) {
  //     return updatedPrice= priceFloat*count;
  //   }
  // }, [count]);
  const add = () => {
    setCount((count) => {
      return count + 1;
    });
  };
  const subtract = () => {
    setCount((count) => {
      return count === 0 ? count : count - 1;
    });
  };

  return (
    <div class="product-details">
      <span class="product-price">
        ${count === 0 ? price : price * count}
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
