//nom:authUser
import {
  IObject as IO,
  IDocument,
  IResponse,
} from 'Interfaces'
import {
  IAuthUser,
  IAuthCredentials,
  authRequestCredentials,
  authRequestLogout,
  localStorageCRUD,
} from 'Auth'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const authUserSet = async (user:IAuthUser, remember = false):Promise<IAuthUser> => {
  const response = await localStorageCRUD.update({...user, remember})
  const newUser = response.data
  return newUser;
};

export const authUserGet = async ():Promise<IAuthUser> => {
  const response = await localStorageCRUD.read()
  const user = response.data
  return user;
};

export const authUserGetToken = async ():Promise<string> => {
  const user = await authUserGet()
  const token = user.token || ''
  return token;
};

export const authUserLogin = async (credentials:IAuthCredentials, remember = false):Promise<IResponse> => {
  const response = await authRequestCredentials(credentials)
  if (response.success) {
    const user = response.data
    await authUserSet(user, remember)
  }
  return response;
};

export const authUserLogout = async ():Promise<boolean> => {
  const apiResponse = await authRequestLogout()
  const localResponse = await localStorageCRUD.delete()
  return apiResponse.success && localResponse.success;
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
