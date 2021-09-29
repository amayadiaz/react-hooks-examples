import './App.css';
import { State } from './components/State';
import { Effect } from './components/Effect';
import { Ref } from './components/Ref';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <State />
        <Effect />
        <Ref />
      </header>
    </div>
  );
}

export default App;
