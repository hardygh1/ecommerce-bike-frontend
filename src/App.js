import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <div className="">
        <Navigation />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
