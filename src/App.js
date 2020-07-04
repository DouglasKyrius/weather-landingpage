import React, { useState } from 'react';
import Info from './Components/Info/Info';

import './App.css'

function App() {
  let [tempSymbol, setTempSymbol] = useState('C');
  return (
    <div className="app">
      <main>
        <Info tempSymbol={tempSymbol} setTempSymbol={() => setTempSymbol(tempSymbol === 'C' ? 'F' : 'C')} />
      </main>
    </div>
  );
}

export default App;
