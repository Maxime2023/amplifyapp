import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "./Accounts";
import Map from "../map.jpg";

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  }, []);

  if (loggedIn) {
    return (
      <div>
          <div>
            <img src={Map}></img>
          </div>
    </div>
    );
  }
  else {
    return (null);
  }
};