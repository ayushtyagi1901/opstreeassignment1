import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import AddCar from './components/AddCar';
import CarList from './components/CarList';


function App() {

  const [carList, setCarList] = useState([]);


  return (
    <div className="App">
      <h1>Car Mang. System</h1>
      <AddCar carList={carList} setCarList={setCarList} />
      <CarList carList={carList} />
    </div>
  );
}

export default App;
