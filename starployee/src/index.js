import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import Feed from './components/pages/Feed'
import App from './App'
import Content from './components/layout/Content'

ReactDOM.render(
  <Feed />,
  document.getElementById('root')
)