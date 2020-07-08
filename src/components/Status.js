import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from './Accounts';
import { Button } from 'antd';

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
    <div>
      {status ? (
        <div>
          Vous etes connectés.
          <Button onClick={logout}>Se déconnecter</Button>
        </div>
      ) : <div>Merci de bien vouloir vous connecter</div>}
    </div>
  );
};