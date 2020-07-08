import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Accounts';
import { Button } from 'antd';
import './Status.css';

export default () => {
  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  }, []);

  return (
    <div className="status">
      {status ? (
        <div className="statusLogged">
          Vous etes connectés.
          <Button onClick={logout}>Se déconnecter</Button>
        </div>
      ) : <div className="statusWait"> Merci de bien vouloir vous connecter / s'inscrire</div>}
    </div>
  );
};