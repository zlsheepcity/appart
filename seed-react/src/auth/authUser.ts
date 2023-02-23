//nom:authUser

interface IObject {
  [key:string]: any;
}
interface IO extends IObject {}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const authUserRequestCredentials =
  async (props:IO):Promise<IResponse> => {
    return emptyResponseTemplate
  }


import {
  IResponse,
  emptyResponseTemplate,
  successResponseTemplate,
} from 'Interfaces'
import {
  AUTH_USER_LOCAL_STORAGE_KEY as STORAGE_KEY,
  IAuthUser,
  emptyAuthUser,
  IAuthCredentials,
  mockedAuthCredentials,
  authRequestCredentials,
  authRequestLogout,
} from 'Auth'

export const authUserAuthorize = async ({
  credentials = mockedAuthCredentials,
  remember = false,
}:{
  credentials?: IAuthCredentials,
  remember?: boolean
}):Promise<IResponse> => {
  const userResponse = await authRequestCredentials({credentials})
  const user = userResponse.takeData || emptyAuthUser
  await authUserUpdate({user, remember})
  return { ...userResponse, takeData:user };
};

export const authUserLogout = async ():Promise<IResponse> => {
  const logoutResponse = await authRequestLogout()
  authUserStorageClear()
  return logoutResponse;
};

export const authUserRead = async ():Promise<IAuthUser> => {
  const user = await authUserStorageRead()
  return user?.id ? user : emptyAuthUser;
};
export const authUserReadToken = async ():Promise<string> => {
  const user = await authUserRead()
  return user?.token || '';
};

export const authUserUpdate = async ({
  user,
  remember = false,
}:{
  user: IAuthUser;
  remember?: boolean;
}):Promise<IResponse> => {
  const storageResponse = await authUserStorageUpdate({user, remember})
  return storageResponse;
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Local Storages

/** authUserStorageRead() async
 *  Reads `user` from browsers storages
 */
export const authUserStorageRead = async ():Promise<IAuthUser> => {
  let user:IAuthUser
  let storageUser
  try {
    storageUser = sessionStorage.getItem(STORAGE_KEY);
    if (!storageUser) storageUser = localStorage.getItem(STORAGE_KEY);
    if (!storageUser) storageUser = JSON.stringify(emptyAuthUser);
    user = await JSON.parse(storageUser)
  } catch(error) {
    return { ...emptyAuthUser, name:'Error', surname:JSON.stringify(error) };
  }
  return user;
};

/** authUserStorageUpdate() async
 *  Updates browsers storages with `user`
 */
export const authUserStorageUpdate = async ({
  user,
  remember = false,
}:{
  user: IAuthUser;
  remember?: boolean;
}):Promise<IResponse> => {
  try {
    const userToString = JSON.stringify(user)
    sessionStorage.setItem(STORAGE_KEY, userToString)
    if (remember) localStorage.setItem(STORAGE_KEY, userToString)
  } catch(error) {
    return makeCatchErrorResponse(error);
  }
  return { ...successResponseTemplate, takeData:user };
}

export const authUserStorageClear = () => {
  // A) Clear `user` data
  // sessionStorage.removeItem(STORAGE_KEY)
  // localStorage.removeItem(STORAGE_KEY)

  // B) Clear all local data, not only `user`
  sessionStorage.clear()
  localStorage.clear()
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Utils

const makeCatchErrorResponse = (error:any) => ({
  ...emptyResponseTemplate,
  message: JSON.stringify(error),
  takeData: error,
});

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ Development

export const authUserProfileRead = async ():Promise<IAuthUser> => {return emptyAuthUser;}
export const authUserProfileUpdate = async (user:IAuthUser) => {}
