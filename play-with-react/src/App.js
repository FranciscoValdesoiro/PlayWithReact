import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState([])

  const getListData = () => {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=1&limit=999')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      //console.log(myJson);
      setData(myJson.results);
    });
  }
getListData()

const listItems = data.map((element, key) =>
  <li key={key} >{element.name}</li>
);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          {listItems}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
