import { useState } from 'react';
import ListOfGifs from './components/ListOfGifs';
import SearchGif from './components/SearchGif';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState("cosmos")
  return (
    <div className="App">
      <section className="App-content">
          <SearchGif/>
          <button onClick={()=>{setKeyword("beach")}}>Buscar</button>
          <ListOfGifs keyword ={keyword}/>
      </section>
    </div>
  );
}

export default App;
