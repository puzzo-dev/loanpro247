// import logo from "./logo.svg";
import "./styles/App.css";
import Header from "./components/Header";
import Content from "./pages/Content";
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
