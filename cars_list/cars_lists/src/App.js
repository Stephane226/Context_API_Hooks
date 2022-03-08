import logo from './logo.svg';
import './App.css';
import CarContextProvider from './components/CarsContext'
import Navbar from './components/navbar'
import CarsList from './components/carsList';
import Form from './components/form';


function App() {
  return (
    <div className="App">
     <CarContextProvider>

          <Navbar/>
          <CarsList/>
          <Form/>
     </CarContextProvider>

    </div>
  );
}

export default App;
