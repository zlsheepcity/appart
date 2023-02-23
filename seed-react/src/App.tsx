import React from 'react'

//nom:AppRunDefault
export const AppDefault:React.FC = () => {

  const appPreload = async () => {
  }

  React.useEffect(() => {
    appPreload()
    }, [])

  return(
    <div id="App">
    </div>
  );
}

export const App = AppDefault
export default App
