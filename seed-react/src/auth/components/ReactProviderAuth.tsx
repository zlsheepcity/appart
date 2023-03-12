import React from 'react'
import {
  IResponse,
  responseTemplate,
  responseTemplateSuccess,
} from 'Interfaces'
import {
  authUserLogout as appAuthUserLogout,
  authUserLogin as appAuthUserLogin,
  authUserSet as appAuthUserSet,
  IAuthUser,
  IAuthCredentials,
  authUserTemplate,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ AuthContext

export interface IAuthContext {
  auth: boolean;
  authUser: IAuthUser;
  authUserLogout: () => Promise<boolean>;
  authUserLogin: (credentials:IAuthCredentials, remember:boolean) => Promise<IResponse>;
  authUserSet: (user:IAuthUser, remember:boolean) => Promise<IAuthUser>;
};
export const authContextInitial:IAuthContext = {
  auth: false,
  authUser: authUserTemplate,
  authUserLogout: appAuthUserLogout,
  authUserLogin: appAuthUserLogin,
  authUserSet: appAuthUserSet,
};

const AuthContext = React.createContext<IAuthContext>(authContextInitial)

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ AuthProvider

export interface IAuthProviderProps {
  user: IAuthUser;
  children?: React.ReactNode;
};
export const ReactProviderAuth:React.FC<IAuthProviderProps> = ({ user, children }) => {
  let [authUser, setAuthUser] = React.useState(user)
  let [auth, setAuth] = React.useState(!!user.id)

  const authUserLogout = async () => {
    const success = await appAuthUserLogout()
    setAuthUser(authUserTemplate)
    return success;
  }

  const authUserLogin = async (credentials:IAuthCredentials, remember:boolean) => {
    const response = await appAuthUserLogin(credentials, remember)
    const user = response.data
    setAuthUser(user)
    return response;
  }

  const authUserSet = async (user:IAuthUser, remember:boolean) => {
    await appAuthUserSet(user, remember)
    setAuthUser(user)
    return user;
  }

  React.useEffect(() => { // watch authUser
    setAuth(!!authUser.id)
  }, [authUser])

  const providerValue = {
    auth,
    authUser,
    authUserLogout,
    authUserLogin,
    authUserSet,
  }
  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ useAuthProvider

export const useAuthProvider = () => React.useContext(AuthContext);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ 

export default {};
