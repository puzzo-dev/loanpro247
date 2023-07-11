// import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Content from "./pages/Content";
import Confirmation from "./pages/Confirmation";
import Error from "./pages/Error";
import "./styles/App.css";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
