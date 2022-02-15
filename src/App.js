import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
