
import './App.css';
import Shows from './screens/shows';
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Description from './screens/Description';

function App() {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shows />} />
      <Route path="/description" element={<Description />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;
