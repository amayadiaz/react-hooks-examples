import './App.css';
import { State } from './components/State';
import { Effect } from './components/Effect';
import { Ref } from './components/Ref';
import { ProjectContextProvider } from './context/ProjectContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectContextProvider>
          <State />
          <Effect />
          <Ref />
        </ProjectContextProvider>
      </header>
    </div>
  );
}

export default App;
