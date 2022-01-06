import './App.css';
import Homepage from './Components/Homepage';
import AnimatedCursor from "react-animated-cursor"
import Loader from './Components/Loader'
import {useState} from 'react'
function App() {
  const [loader, setLoader] = useState(true)
  
    setTimeout(function () {
        setLoader(false)
      }, 3000)
  return (
    <div className="App">
      
      
      
      <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color="0,161,157"
      outerAlpha={0.4}
      innerScale={0.6}
      outerScale={0}
    />
      {loader ? <Loader /> : <Homepage />}
    </div>
  );
}

export default App;
