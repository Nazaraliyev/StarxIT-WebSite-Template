import '../src/App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from './components/Home/Home';



function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>} />
      </Routes>


      <Footer></Footer>
    </div>
  );
}

export default App;
