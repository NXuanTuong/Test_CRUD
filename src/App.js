import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import EmpCreate from './components/EmpCreate';
import EmpEdit from './components/EmpEdit';
import { EmpListing } from './components/EmpListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>
          <Route path='/employee/edit/:id' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

  
}

export default App;
