import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { cartItems } from './data';

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
