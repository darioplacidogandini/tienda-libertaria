import './App.css';
import ProductsContainer from './container/products.container';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Partido_Libertario_%28Argentina%29.png/800px-Partido_Libertario_%28Argentina%29.png" 
        className="App-logo" alt="logo"/>
        <h1 className="text-primary text-nowrap">Tienda Libertaria Corrientes</h1>
        <Button href="https://wa.me/+5493794141738">HACÉ TU PEDIDO</Button>
      </header>
      <ProductsContainer/>
    </div>
  );
}

export default App;
