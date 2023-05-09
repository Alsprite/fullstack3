import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutation';

export const useSignIn = () => {
    const [mutate, result] = useMutation(SIGN_IN);
  
    const signIn = async ({ username, password }) => {
      const result = await mutate({variables: { credentials: { username, password }}});
  };
  return [signIn, result];
}