import {
  IObject as IO,
  IDocument,
  IResponse,
} from 'Interfaces'
import { AUTH_ROLE } from 'Auth';

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export interface IAuthUserBase extends IO {
  token?: string;
  auth?: boolean;
  rolesList?: string[];
  rememberDevice?: boolean;
}
export interface IAuthUserDocument extends IO {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  active?: boolean;
}
export interface IAuthUser
  extends
    IAuthUserBase, 
    IAuthUserDocument,
    IO {}

export const authUserTemplate:IAuthUser = {
  id: 0,
  rolesList: [AUTH_ROLE.guest],
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export interface IAuthCredentials {
  email: string;
  password: string;
};
export const authCredentialsTemplate:IAuthCredentials = {
  email: '',
  password: '',
}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
