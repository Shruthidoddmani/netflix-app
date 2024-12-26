import { } from 'react'
import Body from './components/Body';
import store from './utils/AppStore';
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
          <Body />
      </Provider>
    </>
  )
}

export default App
