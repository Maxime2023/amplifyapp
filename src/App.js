import React from "react";
import { Account } from "./components/Accounts";
import Signup from "./components/Signup";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword";
import Status from "./components/Status";
import Settings from "./components/Settings";
import MapChart from './components/Map';
import Header from  "./components/Header/Header";


class App extends React.Component {
  render() {
    return (
      <div>
        <Account>
          <Header/>
          <Status />
          <Signup />
          <Login />
          <ForgotPassword />
          <Settings />
          <MapChart/>
        </Account>
      </div>
    )
  }
}

export default App
// export default () => {
//   return (
//     <Account>
//       <Header/>
//       <Status />
//       <Signup />
//       <Login />
//       <ForgotPassword />
//       <Settings />
//       <MapChart/>
//     </Account>
//   );
// };