//nom:RoutesConfig
import { IRoutes } from 'Interfaces'
import { routesAppCore } from './routesAppCore'
import { routes as routesPROJECT } from './routesPROJECT'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const routes:IRoutes = {
  ...routesAppCore,
  ...routesPROJECT,
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default {}
