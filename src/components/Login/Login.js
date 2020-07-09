import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Accounts';
import { Input, Button, Form } from 'antd';
import './Login.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const [loggedIn, setLoggedIn] = useState(false);

  const { getSession } = useContext(AccountContext);
  

  useEffect(() => {
    getSession().then(() => {
      setLoggedIn(true);
    });
  });

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
        window.location.reload(false);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })

  };
  
  if (!loggedIn) {
  return (
<div>
    <div className="loginForm">
      <Form onSubmit={onSubmit}>
        <h1 className="loginTitle">Se connecter</h1>
        <div className="mailAdressTitle">Adresse e-mail</div>
        <div className="setEmail">
          <Input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="passwordTitle">Mot de passe</div>
        <div className="setPassword">
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Merci de bien vouloir entrer votre mot de passe',
              },
            ]}
          >
          <Input.Password
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <div className="LoginButtonForm">
            <Button onClick={onSubmit}>Se connecter</Button>
          </div>

          </Form.Item>
        </div>
      </Form>

    </div>

    </div>
  );
  }
  else {
    return (null);
  }
};