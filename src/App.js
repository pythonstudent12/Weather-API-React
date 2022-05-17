import logo from './logo.svg';
import './App.css';
import WeatherText from './WeatherText';
import ErrorBoundary from './ErrorBoundary';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      Прогноз погоды
      <ErrorBoundary>
        <WeatherText/>
      </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;



