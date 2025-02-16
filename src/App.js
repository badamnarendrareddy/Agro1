import { HashRouter,Route, Switch } from "react-router-dom";

import LoginForm from "./Components/Login";
import Home from "./Components/Home";
import WeatherForecast from "./Components/government schemes";
import Crops from "./Components/cropsprizes";
import SignUp from "./Components/singUp";
import FarmingTechniques from "./Components/FerilitzersItems";
import Form from "./Components/userF";
import Machinery from "./Components/farmMachinery";
import Order from "./Components/Order";
import './App.css'

const App=()=>(
 
    <HashRouter>
    
    
      <Switch>
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Weather" component={WeatherForecast} />
        <Route exact path="/CropPrizes" component={Crops} />
        <Route exact path="/FarmingTechniques" component={FarmingTechniques} />
        
        <Route exact path="/Machinery" component={Machinery} />
        <Route exact path="/Orders" component={Order} />
        <Route exact path="/Orders" component={SignUp} />
   

      
        <Route exact path="/UserNeeds" component={Form} />
      
    

      </Switch>
     
  
    </HashRouter>

)
export default App