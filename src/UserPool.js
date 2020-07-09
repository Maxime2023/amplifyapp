import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'eu-central-1_cosPuLBeK',
  ClientId: '6cl7iogefk5mjfk5qfsgo2ogmq'
};

export default new CognitoUserPool(poolData);