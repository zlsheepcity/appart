# //nom:Routes
- [index.ts](../index.ts)

# Docs
- [react-router](https://reactrouter.com/en/v6.3.0/api)
- [@types/react-router-dom](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-router-dom/index.d.ts)
- [history](https://github.com/remix-run/history/tree/dev/docs)

# Developer guides

## Routes config
- [interfaces.ts](../interfaces.ts)
- [routes.tsx](../routes.tsx)
- - [routesAppCore.tsx](../routes.tsx)
```ts
const routes:IRoutes = {
  ProjectPageTemplate: {
    ...routeTemplate,
    path: '/ProjectPage',
    title: 'ProjectPageTemplate',
    component: <PageComponent />,
  },
  // ...
}
```

## Add routes provider
- [ReactProviderRoutes](../components/ReactProviderRoutes.tsx)
- [App.tsx](../../App.tsx)
```ts
// App.tsx
import { ReactProviderRoutes } from 'Routes'
export const App:React.FC = () => {
  return(
    <div id="App">
      <ReactProviderRoutes />
    </div>
  );
}
```

## Use routes provider
```ts
// Component.tsx
import { useRoutesProvider } from 'Routes'
export const Component:React.FC = () => {
  const { routes, routePath } = useRoutesProvider()
  return <>...</>;
}
```

### `routes :IRoutes`
```ts
const { routes, IRoute } = useRoutesProvider()
const routeKey = 'AuthLogin'
const routeObject:IRoute = routes[routeKey]
```

### `routePath( routeKey:string, [params:object] ) :string`
```ts
const { routePath } = useRoutesProvider()
const pathString = routePath('AuthLogin')
const pathStringUseParams = routePath('AuthLoginMode', {mode:'test'})
```