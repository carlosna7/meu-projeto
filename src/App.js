import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

    const nome = "Eduardo"

  return (
    <div className="App">

      <SayMyName nome="Carlos" />
      <SayMyName nome={nome} />
      <Pessoa 
        nome="Jorje" 
        idade="31"
        profissao="dev"
        foto="https://via.placeholder.com/150"
      />
      
    </div>
  );
}

export default App;
