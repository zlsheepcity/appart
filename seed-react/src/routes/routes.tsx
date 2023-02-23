//nom:RoutesConfig
import React from 'react'

import {
  AUTH_ROLES as ROLES,
} from 'Auth'

interface IObject {
  [key:string]: any;
}
interface IO extends IObject {}
interface IAuthRole extends IO {}

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export interface IRoute extends IO {
  path?: string;
  pathMaker?: (params:IO) => string;
  roleRequired?: boolean;
  roleAccessList?: string[];
  element?: any;
}
export const routeBaseTemplate:IRoute = {
  path: '/',
  pathMaker: undefined, // params => `./`
  roleRequired: false,
  roleAccessList: [], // [ROLES.super_admin, ROLES.developer]
  element: undefined, // <div></div>
}

export interface IORoutes { [key:string]:IRoute }

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

export const routes:IORoutes = {
  RouteKey: { ...routeBaseTemplate },
}

export default {}
