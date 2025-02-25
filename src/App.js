import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next'; // Import I18nextProvider
import i18n from './i18n'; // Import your i18n configuration

import LoginForm from './Components/Login';
import Home from './Components/Home';
import WeatherForecast from './Components/government schemes';
import Crops from './Components/cropsprizes';
import SignUp from './Components/singUp';
import FarmingTechniques from './Components/FerilitzersItems';
import Form from './Components/userF';
import Machinery from './Components/farmMachinery';
import Order from './Components/Order';
import './App.css';

const App = () => (
  <I18nextProvider i18n={i18n}> {/* Wrap your app with I18nextProvider */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/Weather" component={WeatherForecast} />
        <Route exact path="/CropPrizes" component={Crops} />
        <Route exact path="/FarmingTechniques" component={FarmingTechniques} />
        <Route exact path="/Machinery" component={Machinery} />
        <Route exact path="/Orders" component={Order} />
        <Route exact path="/SignUp" component={SignUp} /> {/* Fixed duplicate route */}
        <Route exact path="/UserNeeds" component={Form} />
      </Switch>
    </BrowserRouter>
  </I18nextProvider>
);

export default App;