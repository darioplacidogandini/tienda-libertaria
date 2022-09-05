import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardComponent from './component/card.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Partido_Libertario_%28Argentina%29.png/800px-Partido_Libertario_%28Argentina%29.png" 
        className="App-logo" alt="logo"/>
        <p>
          Tienda Libertaria Corrientes
        </p>
        <CardComponent/>
      </header>
    </div>
  );
}

export default App;
