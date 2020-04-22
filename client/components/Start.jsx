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
    const Active = 'You have an active area of focus set for your practive. ' + '\n' + 'Please enjoy your session.'
    const noActive = " You do not currently have an active Focus set for your practice."
    const dynamicMessage  = (this.state.activeCount) ? Active : noActive
    const welcomeHeading = "Welcome to Robin - your archery training & practice companion."
    const welcomeMessage = "Success in archery often comes down to muscle memory. This application is intended to help you keep track of your shots and can report on the impact of a particular training regimen on your Accuracy, Grouping and Consistency over a predetermined period."
    
    
    return(
      <div className='appContainer'>
        <div className='mainImage'>
          <div className='arrowContainer'><img className='arrows' src='/images/arrows.png'/> </div>
          <div className='mainImageTop'></div>
          <div className='mainImageMid'></div>
          <div className='mainImageBottom'>
            <div className='titleContainer'>ROBIN</div>
          </div>
        </div>
        <div className="mainContentBox">
          <div className='leftContentBox'>
            <div className='lcHeading'>
              {welcomeHeading}
            </div>
            <div className='lcContent'>
              {welcomeMessage}
            </div>
          </div>
          <div className='rightContentBox'>
            <div className='rcStartBox'>
              {dynamicMessage}
            </div>
            <div className='rcButtonBox'>
              <Link to={routeComponent}>
                <button className='mainButton'>{buttonDirection}</button>
              </Link>
              <Link to='/Focus'>
                <button className='mainButton'>REPORTING</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Start
