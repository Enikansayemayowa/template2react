import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom'
import Homescreen from "./Screen/Homescreen";
import About from "./Screen/About";

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/Homescreen"> < Homescreen /></Route>
       {/* <Route path="/About">< About /> </Route> */}
     </Switch>
      
    <About/>
   </Router>
  );
}

export default App;
