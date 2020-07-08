import React from "react";
import { Account } from "./components/Accounts";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword";
import Status from "./components/Status/Status";
import Settings from "./components/Settings";
import MapChart from './components/Map';
import Header from  "./components/Header/Header";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div>
        <Account>
          <Header/>
          <Status />
          <div className="SignUpAndLogin">
            <Signup />
            <Login />
          </div>
          <MapChart/>
        </Account>
      </div>
    )
  }
}

export default App