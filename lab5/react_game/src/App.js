import logo from './logo.svg';
import './App.css';
import Game from './reactgame';

function App() {
  return (
    <div className="App">
      { Game() }
    </div>
  );
}

export default App;
