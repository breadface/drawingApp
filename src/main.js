import React from 'react'
import { render } from 'react-dom'
// import {AppContainer} from 'react-hot-loader'
import App from './components/App'

const renderer = () => render(
  // <AppContainer>
    <App />
  // </AppContainer>
    ,
  document.getElementById('root')
)

renderer()

// if(module.hot){
//   module.hot.accept('./components/App', renderer)
// }

