import { useState } from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  const [x, setx] = useState(0);

  return (
    <div>
      {x}
      <button onClick={() => setx(x + 1)}>Increment</button>

      <FirstComponent fn={setx}/>
    </div>
  );
}

export default App;
