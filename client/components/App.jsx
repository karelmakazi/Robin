import React from 'react'
import {Link} from 'react-router-dom'
import{HashRouter as Router, Route} from 'react-router-dom'

//Component Imports
import Start from './Start'
import Focus from './Focus'
import Session from './Session'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Start} />
      <Route exact path='/Focus' component={Focus} />
      <Route exact path='/Session' component={Session} />
    </div>
  )
}

export default App
