# Store example
- [storeExample.ts](./storeExample.ts)

# Usage example
```ts
import {
  useDispatch,
  useSelector,
  storeExampleGetTitle,
  storeExampleSetTitle,
} from 'Components/Redux'
export const Component:React.FC = () => {
  // get value
  const title = useSelector(storeExampleGetTitle)
  // set value
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(storeExampleSetTitle('New value'))
  }, [])
  //
  return <></>;
}
```