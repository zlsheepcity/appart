//nom:RoutesConfig
import React from 'react'
import {
  IObject as IO,
  IRoutes,
  routeTemplate,
} from 'Interfaces'

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export const routes:IRoutes = {
  ProjectPageTemplate: {
    ...routeTemplate,
    path: '/',
    title: 'ProjectPageTemplate',
    roleRequired: false,
    roleAccessList: [],
    component: <div></div>,
  },
};

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
export default routes
