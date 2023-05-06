const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <div class="cart">
            <a href="#">Cart</a>
            <span class="cart-count">0</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
