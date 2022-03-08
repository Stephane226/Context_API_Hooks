import logo from './logo.svg';
import './App.css';
import CarContextProvider from './components/CarsContext'
import Navbar from './components/navbar'
import CarsList from './components/carsList';


function App() {
  return (
    <div className="App">
     <CarContextProvider>

          <Navbar/>
          <CarsList/>
     </CarContextProvider>

    </div>
  );
}

export default App;
