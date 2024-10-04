import './App.css';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../src/Products/CartProvider'
// import ShopComponent from "./Products/NewShpComponents"

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Shop</h1>
        {/* <ShopComponent />  */}
        <Outlet />
      </div>
    </CartProvider>
  );
}

export default App;
