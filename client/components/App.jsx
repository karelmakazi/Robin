import React from 'react'
import{HashRouter as Router, Route} from 'react-router-dom'

//Component Imports
import Start from './Start'
import Focus from './Focus'
import Session from './Session'
import Practice from './Practice'

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Start} />
      <Route exact path='/Focus' component={Focus} />
      <Route exact path='/Session' component={Session} />
      <Route exact path='/Practice' component={Practice} />
    </div>
  )
}

export default App
