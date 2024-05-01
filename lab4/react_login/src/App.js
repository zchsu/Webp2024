import logo from './logo.svg';
import './App.css';
import CGU_Login from './cgu.login';

function App() {
  return (
    <div className="App">
      <div>
       { CGU_Login() }
      </div>
    </div>
  );
}

export default App;
