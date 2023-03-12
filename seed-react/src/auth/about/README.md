# //nom:Auth
- [index.ts](../index.ts)
- [interfaces.ts](../index.ts)
- [authUser](../authUser.ts)
- [authRole](../authRole.ts)
- [AuthReactProvider.ts](../components/AuthReactProvider.tsx)

## authUser

```js
import {
  IAuthUser,
  IAuthCredentials,
  authUserSet,
  authUserGet,
  authUserGetToken,
  authUserLogin,
  authUserLogout,
} from 'Auth'

async authUserSet(user, remember) :IAuthUser
async authUserGet() :IAuthUser
async authUserGetToken() :string
async authUserLogin(credentials, remember) :IResponse
async authUserLogout() :boolean
```

## authRole

```js
import {
  AUTH_ROLE,
  authRolesMatchAccess,
} from 'Auth'

const accessList = [AUTH_ROLE.super_admin, AUTH_ROLE.developer]
const allow = authRolesMatchAccess(user.roles, accessList)
```

## AuthReactProvider

```js
import { useAuthProvider } from 'Auth'

const {
  auth,
  authUser,
  authUserLogin,
  authUserLogout,
  authUserSet,
} = useAuthProvider()

isAuthorized = auth
userID = authUser.id
userToken = authUser.token
userRoles = authUser.roles
async authUserSet(user, remember) :IAuthUser
async authUserLogin(credentials, remember) :IResponse
async authUserLogout() :boolean
```
