import React, {useState} from 'react';
import './global.css';
import headerBackground from './headerBackground.png'
import Gallery from "./components/Gallery/Gallery";
import data from './lib/data.json'
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="App">
            <header className="App-header">
                <img src={headerBackground}
                     alt="rickAndMortyPicture"
                     height="248px"
                     width="640px"/>
            </header>
            <main>
                <SearchBar onSearch={setSearchInput}/>

                <Gallery characterList={data} searchText={searchInput}/>
            </main>
        </div>
    );
}

export default App;
