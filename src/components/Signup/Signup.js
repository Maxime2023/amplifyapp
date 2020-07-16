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
  const [verificationCode, setverificationcod] = useState('');
  const [status, setStatus] = useState(false);
  const { getSession } = useContext(AccountContext);
  const [user, setUser] = useState('');
  const [error, seterror] = useState('');
  const [connexionError, setConnexionError] = useState(false);
  const [registersuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState(false);

  useEffect(() => {
    getSession()
      .then(session => {
        console.log('Session:', session);
        setStatus(true);
      })
  });

  const onSubmit = event => {
    event.preventDefault();
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err.code);
        seterror(err.code);
        setConnexionError(true);
      }
      else {
        changeButtonStatus(true);
      }
      if (data)
        setUser(data.user);
    });
  };

  const checkPasswords = () => {
    if (password !== confirmSecondPassword) {
      return ("passwordDiff");
    }
    else {
      return ("passwordNotDiff");
    }
  }

  const resetErrorMessage = () => {
    seterror('')
  }

  if (!status) {
    return (
      <div className="signupForm">
        <h1 className="signupTitle">S'inscrire</h1>
        <Form onSubmit={onSubmit}>
          <div className="mailAdressTitleSignup">Adresse e-mail</div>
          <div className="setEmailSignup">
            <Input
              value={email}
              onChange={event => setEmail(event.target.value)}
              onClick={resetErrorMessage}
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
            onClick={resetErrorMessage}
          />
          <div className="passwordConfirmSignup">Confirmer le mot de passe</div>
          <Input.Password
            value={confirmSecondPassword}
            onChange={event => confirmPassword(event.target.value)}
            onClick={resetErrorMessage}
          />
          {isButtonPressed && checkPasswords() === "passwordDiff" ? <div className="passwordDiff">Les mots de passe sont différents</div> : null}
          {connexionError && error === "UsernameExistsException" ? <div className="connexionError">Cette e-mail est deja utilisée</div> : null}
          {connexionError && error === "InvalidParameterException" ? <div className="connexionError">Le mot de passe doit contenir au moins 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial</div> : null}
          <div className="SignupButtonForm">
            <Button onClick={onSubmit}>S'inscrire</Button>
            </div>

            {isButtonPressed && !error ? <div className="registerDoneWithCode">Votre demande d'inscription à bien été prise en compte, vous allez recevoir un mail de confirmation lorsque votre demande sera acceptée.</div> : <div></div>}

          </Form.Item>
          </div>
        </Form>
      </div>
    );
  }
  else {
    return (null);
  }
};
