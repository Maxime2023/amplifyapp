import React from "react";
import { Account } from "./components/Accounts";
import Status from "./components/Status/Status";
import MapChart from './components/Map';
import Header from  "./components/Header/Header";
import LoginAndRegistration from "./components/LoginAndRegistration/LoginAndRegistration";
import './App.css';



class App extends React.Component {
  render() {
    return (
      <div>
        <Account>
          <Header/>
          <Status />
          <LoginAndRegistration/>
          <MapChart/>
        </Account>
      </div>
    )
  }
}

export default App