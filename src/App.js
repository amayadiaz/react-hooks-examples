import './App.css';
import { State } from './components/State';
import { Effect } from './components/Effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <State />
        <Effect />
      </header>
    </div>
  );
}

export default App;
