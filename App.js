import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false)

  const showCartHandler = () => {
    setCartIsVisible(true)

  }

  const hideCartHandler = () => {
    setCartIsVisible(false)
  }

  return (
    <React.Fragment>
      {cartIsVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onCartVisible={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </React.Fragment>
  );
}

export default App;
