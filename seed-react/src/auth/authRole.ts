//nom:authRole

export const AUTH_ROLE_BASE = {
  guest: 'guest',
  developer: 'developer',
}
export const AUTH_ROLE = {
  ...AUTH_ROLE_BASE,
  super_admin: 'super_admin',
  ikvd_admin: 'ikvd_admin',
  teacher: 'teacher',
  data_analyst: 'data_analyst',
  support_staff: 'support_staff',
};

export const authRolesMatchAccess = (
  roles:string[] = [],
  access:string[] = [],
):boolean => {
  if (!access.length) return true;
  if (access.length && !roles.length) return false;
  if (roles.filter( role => access.includes(role) ).length > 0) return true;
  return false
};
