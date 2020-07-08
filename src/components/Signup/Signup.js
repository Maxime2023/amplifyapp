import React, { useState, useContext, useEffect } from 'react';
import UserPool from '../../UserPool';
import { AccountContext } from '../Accounts';
import { Input, Button, Form } from 'antd';
import './Signup.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmSecondPassword, confirmPassword] = useState('');
  const [isButtonPressed, changeButtonStatus] = useState(false);

  const checkPasswords = () => {
    if (password !== confirmSecondPassword) {
      return ("passwordDiff");
    }
    else {
      return ("passwordNotDiff");
    }
  }

  const [status, setStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  }, []);

  const onSubmit = event => {
    event.preventDefault();
    console.log(checkPasswords());
    changeButtonStatus(true);
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };


  return (
    <div className="signupForm">
      <h1 className="signupTitle">S'inscrire</h1>
      <Form onSubmit={onSubmit}>
        <div className="mailAdressTitleSignup">Adresse e-mail</div>
        <div className="setEmailSignup">
          <Input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div className="passwordTitleSignup">Mot de passe</div>
        <div className="setPasswordSignup">
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
        <div className="passwordConfirmSignup">Confirmer le mot de passe</div>
        <Input.Password
          value={confirmSecondPassword}
          onChange={event => confirmPassword(event.target.value)}
         />
        {isButtonPressed && checkPasswords() === "passwordDiff"? <div className="passwordDiff">Les mots de passe sont différents</div> : null}
        <div className="SignupButtonForm">
          <Button onClick={onSubmit}>S'inscrire</Button>
        </div>

        </Form.Item>
        </div>
      </Form>
    </div>
  );
};
