import React from 'react'
import {Link} from 'react-router-dom'

//DATA: Database - Check active Focus - stand-in variable
const activeFocus = false

//VARIABLE DIRECTION
let buttonDirection = (activeFocus) ? "New Session" : "Create Focus"
let routeComponent = (activeFocus) ? "/Session" : "/Focus"


//VARIABLE MESSAGING
const Active = " You have an active Focus for your practice. "
const noActive = " You do not have an active Focus for your practice. "
const dynamicMessage  = (activeFocus) ? Active : noActive

const Start = () => {
  return(
    <>
      <div className='mainImage'>
        <div className='mainImageTop'></div>
        <div className='mainImageMid'></div>
        <div className='mainImageBottom'>
          Robin
        </div>
      </div>
      <div className='introBox'>
        <p className='welcomeMessage'>
          Welcome to Robin - your archery training companion & progress tracker.{dynamicMessage}
        </p>
        <Link to={routeComponent}>
          <button className='startButton'>{buttonDirection}</button>
        </Link>
      </div>
    </>
  )
}

export default Start