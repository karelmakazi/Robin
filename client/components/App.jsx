import React from 'react'
import {Link} from 'react-router-dom'
import{HashRouter as Router, Route} from 'react-router-dom'

//Component Imports
import Start from './Start'
import Focus from './Focus'

const App = () => {
  return (
    <div className='mainContainer'>
      <Route exact path='/' component={Start} />
      <Route exact path='/Focus' component={Focus} />
    </div>
  )
}

export default App
