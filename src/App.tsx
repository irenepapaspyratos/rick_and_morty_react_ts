import React from 'react';
import './global.css';
import headerBackground from './headerBackground.png'
import Gallery from "./components/Gallery/Gallery";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={headerBackground}
                     alt="rickAndMortyPicture"
                     height="248px"
                     width="640px"/>
            </header>
            <main>
            </main>
        </div>
    );
}

export default App;
