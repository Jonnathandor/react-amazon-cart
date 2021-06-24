import './App.css';
import Header from './components/Header';
import CartTotal from './components/CartTotal';
import CartItems from './components/CartItems';

function App() {

  return (
    <div className="App">
      <Header title="Amazon Cart"/>
      <div className="app-main">
        <CartItems/>
        <CartTotal/>
      </div>
    </div>
  );
}

export default App;
