import React, { useState, useContext, useEffect } from 'react';
import { AccountContext } from '../Accounts';
import { Input, Button, Form } from 'antd';
import './Login.css';

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
  }, []);

  const onSubmit = event => {
    event.preventDefault();

    authenticate(email, password)
      .then(data => {
        console.log('Logged in!', data);
      })
      .catch(err => {
        console.error('Failed to login!', err);
      })
  };

  function onLogin() {
    window.location.reload(false);
  }
  

  return (
    
    <div>
      {!loggedIn && (
      <Form onSubmit={onSubmit}>
        <h1>Se connecter</h1>
        <div>Adresse email</div>
        <div className="setEmail">
          <Input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>Mot de passe</div>

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
        </Form.Item>
      </Form>)}

      <Button onClick={onSubmit}>Login</Button>
    </div>
  );
};