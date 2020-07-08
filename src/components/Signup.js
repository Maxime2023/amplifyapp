import React, { useState } from 'react';
import UserPool from '../UserPool';
import { Input, Button } from 'antd';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) console.error(err);
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div>
          <Input
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </div>
        <div>
          <Button type='submit'>S'inscrire</Button>
        </div>



      </form>
    </div>
  );
};
