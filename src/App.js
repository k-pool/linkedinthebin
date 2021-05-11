import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    // </div>
    <div>
      <header>Header - LinkedInTheBin</header>
      <div>
        <label for="template">Select a template:</label>
        <select name="template">
          <option>Cringe 1</option>
          <option>Cringe 2</option>
        </select>
        <br></br>
        <div>
          <input type="text" placeholder="Placeholder 1"></input><br></br>
          <input type="text" placeholder="Placeholder 2"></input>
        </div>
        <div id="output"></div>
        
      </div>
    </div>
  );
}

export default App;
