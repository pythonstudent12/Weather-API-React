import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WeatherText from './WeatherText';
import ErrorBoundary from './ErrorBoundary';

function App() {


  return (
    <div className="App">
      <header className="App-header">
      Прогноз погоды-3
      <ErrorBoundary>
        <WeatherText/>
      </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;



