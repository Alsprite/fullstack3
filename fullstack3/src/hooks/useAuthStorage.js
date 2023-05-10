import { createContext } from 'react';
import { useContext } from 'react'; 

const AuthStorageContext = createContext();

export const useAuthStorage = () => {
  return useContext(AuthStorageContext);
};
export const setAccessToken = (token) => {
    console.log(token)
}

export default AuthStorageContext;