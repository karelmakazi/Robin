import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

//DATA: Database - Check active Focus - stand-in variable
const activeFocus = false

//VARIABLE DIRECTION
let buttonDirection = (activeFocus) ? "NEW SESSION" : "SET FOCUS"
let routeComponent = (activeFocus) ? "/Session" : "/Focus"


//VARIABLE MESSAGING
const Active = " You have an active Focus for your practice. Enjoy your session."
const noActive = " You do not currently have an active Focus set for your practice."
const dynamicMessage  = (activeFocus) ? Active : noActive


//STATEFUL COMPONENT
class Start extends React.Component {

  state = {
    activeCount: 0
  }

  componentDidMount(){
    request.get('/active')
      .then(res => {
        this.setState({
          activeCount: 1
        })
      })
  }

  render(){
    return(
      <div className='appContainer'>
        <div className='mainImage'>
          <div className='mainImageTop'></div>
          <div className='mainImageMid'></div>
          <div className='mainImageBottom'>
            ROBIN
          </div>
        </div>
        <div className="mainContentBox">
          <div className='introBox'>
            <p className='welcomeMessage'>
              Welcome to Robin - your archery training companion.<br></br>{dynamicMessage}
            </p>
          </div>
          <div className='buttonContainer'>
            <Link to={routeComponent}>
              <button className='startButton'>{buttonDirection}</button>
            </Link>
          </div>
         </div> 
      </div>
    )
  }
}

export default Start