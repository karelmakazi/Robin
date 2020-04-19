import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'



//STATEFUL COMPONENT
class Start extends React.Component {
  
  state = {
    activeCount: 0
  }
  
  componentDidMount(){
    request.get('/api/v1/active')
    .then(res => {
      this.setState({
        activeCount: res.body
      })
    })
  }
  
  render(){
    
    //VARIABLE DIRECTION
    let buttonDirection = (this.state.activeCount) ? "NEW SESSION" : "SET FOCUS"
    let routeComponent = (this.state.activeCount) ? "/Session" : "/Focus"
    
    
    //VARIABLE MESSAGING
    const Active = " You have an active Focus for your practice. Enjoy your session."
    const noActive = " You do not currently have an active Focus set for your practice."
    const dynamicMessage  = (this.state.activeCount) ? Active : noActive
    
    
    return(
      <div className='appContainer'>
        <div className='mainImage'>
          <div className='arrowContainer'>
            <img className='arrows' src='/images/arrows.png'/>
          </div>
          <div className='mainImageTop'></div>
          <div className='mainImageMid'></div>
          <div className='mainImageBottom'>
            <div className='titleContainer'>ROBIN</div>
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
              <button className='mainButton'>{buttonDirection}</button>
            </Link>
            <Link to='/Session'>
              <button className='mainButton'>REPORTING</button>
            </Link>
          </div>
         </div> 
      </div>
    )
  }
}

export default Start