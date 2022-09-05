import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductsContainer from './container/products.container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Partido_Libertario_%28Argentina%29.png/800px-Partido_Libertario_%28Argentina%29.png" 
        className="App-logo" alt="logo"/>
        <h1>Tienda Libertaria Corrientes</h1>
        <ProductsContainer/>
      </header>
    </div>
  );
}

export default App;
