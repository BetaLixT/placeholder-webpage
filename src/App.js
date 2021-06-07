import logo from './images/blt-logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          BetaLixT's Placeholder Webpage!!
        </p>
        <p>
          Get a hold of me on <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >Twitter</a> if you have a project idea for this domain</p>
      </header>
    </div>
  );
}

export default App;
