import "./App.css";
import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ProductCard
        productName="Dog"
        price={100}
        productDescription="This dog won't bite."
        image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg"
      />
      <ProductCard
        productName="Dog"
        price={100}
        productDescription="This dog won't bite."
        image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg"
      />
      <ProductCard
        productName="Dog"
        price={100}
        productDescription="This dog won't bite."
        image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg"
      />
      <ProductCard
        productName="Dog"
        price={100}
        productDescription="This dog won't bite."
        image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg"
      />
      <ProductCard
        productName="Dog"
        price={100}
        productDescription="This dog won't bite."
        image="https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg"
      />
    </>
  );
};

export default App;
