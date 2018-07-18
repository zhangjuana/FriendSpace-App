import React, { Component } from 'react';
import './App.css';

import {
  Route,
} from 'react-router-dom'

import LoginScreen from'./Screen/LoginScreen';
import HomeScreen from'./Screen/HomeScreen';
import RegisterScreen from'./Screen/RegisterScreen';
import CreateUserScreen from'./Screen/CreateUserScreen';
import TabBarScreen from'./Screen/TabBarScreen';
import ChangePersonInfoScreen from'./Screen/ChangePersonInfoScreen';
import ChangePassWordScreen from'./Screen/ChangePassWordScreen';
import CreateMessageScreen from'./Screen/CreateMessageScreen';
import UserScreen from'./Screen/UserScreen';
class App extends Component {
  render() {
    return (
     <div>
     <Route exact path={'/'} component={LoginScreen} />
          <Route path={'/RegisterScreen'} component={RegisterScreen}/>
          <Route path={'/HomeScreen'} component={HomeScreen}/> 
          <Route path={'/CreateUserScreen'} component={CreateUserScreen}/> 
          <Route path={'/TabBarScreen'} component={TabBarScreen}/> 
          <Route path={'/ChangePersonInfoScreen'} component={ChangePersonInfoScreen}/> 
          <Route path={'/ChangePassWordScreen'} component={ChangePassWordScreen}/> 
          <Route path={'/CreateMessageScreen'} component={CreateMessageScreen}/>
          <Route path={'/UserScreen'} component={UserScreen}/>
     </div>
    );
  }
}

export default App;
