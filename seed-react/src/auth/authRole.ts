//nom:authRole
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ roles

export const AUTH_ROLE_BASE = {
  guest: 'guest',
  developer: 'developer',
};

export const AUTH_ROLE_PROJECT = {
  super_user: 'super_admin',
};

export const AUTH_ROLE = {
  ...AUTH_ROLE_BASE,
  ...AUTH_ROLE_PROJECT,
};

export const AUTH_ROLES_LIST_ALL = Object.values(AUTH_ROLE)

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ utils

export const authRolesMatchList = (
  roles:string[] = [],
  access:string[] = [],
):boolean => {
  if (!access.length) return true; // no restrictions
  if (!roles.length) return false; // no roles
  if (roles.filter( role => access.includes(role) ).length > 0) return true;
  return false;
};

export const authRolesMatchAccessList = (
  roles:string[] = [],
  access:string[] = [],
):boolean => authRolesMatchList(
  roles,
  [
    ...access,
    // Super users:
    AUTH_ROLE.super_user,
    AUTH_ROLE.developer,
  ]
);