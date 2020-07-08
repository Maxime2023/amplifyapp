import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-2_YYxCSyCPY',
  ClientId: '5iogq2p00g0qu0jevchgf13489'
};

export default new CognitoUserPool(poolData);