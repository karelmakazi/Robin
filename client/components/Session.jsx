import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Session extends React.Component {

  state = {
    focusID: 1,
    focusArea: 'Draw',
    focusDuration: 10,
    focusProgress: 4,
  }

  // componentDidMount(){
    // }

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
            <div>
              Current focus: {this.state.focusArea} 
            </div>
            <div>
              Session {this.state.focusProgress} of {this.state.focusDuration}
            </div>
            <div>
              <label htmlFor='location'>Location: </label>
              <select id='location' name='location'>
                <option value='8'>Select a Location</option>
                <option value='1'>Auckland Archery Club</option>
                <option value='2'>Mountain Green Club (outdoor)</option>
                <option value='3'>Mountain Green Club (indoor)</option>
                <option value='4'>Massey Archery Club</option>
                <option value='5'>Shore Archery Club</option>
                <option value='6'>Whitford Forrest Archers</option>
                <option value='7'>Private Range (no weather data)</option>
              </select>
            </div>
            <div>
              <label htmlFor='distance'>Distance: </label>
              <input type='text' id='distance' name='distance' maxLength="3"></input>
            </div>
            <div>
              <label htmlFor='quiverSize'>Quiver: </label>
              <input type='text' id='quiver' name='quiver' maxLength="2"></input>
            </div>
          <div className='buttonContainer'>
            <Link to=''>
              <button className='startButton'>START SESSION</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    
    )
  }
}

export default Session