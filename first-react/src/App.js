import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Counter from './Components/Counter';
import './Counter.css';

function App() {
  return(
    <>
    <div className="main">
        <Header />
        <Counter />
    </div>
    </>
  )
}

export default App;
