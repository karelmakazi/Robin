import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

class Session extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      focusID: '',
      focusArea: '',
      focusDuration: '',
      focusProgress: 0,
      location:'',
      distance:'',
      quiver:'',
    }
    this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    request.get('/api/v1/session')
    .then(res => {
      this.setState({
      focusID:res.body[0].id,
      focusArea: res.body[0].area,
      focusDuration: res.body[0].duration,
      })
    })
  }

  handleChange(event){
    this.setState({
      [event.target.name]: event.target.value
     })
   }

  handleSubmit(event){
    event.preventDefault()
    addSession(this.state)
  }

  render(){
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
          <div>
            Current focus: {this.state.focusArea} 
          </div>
          <div>
            Session {this.state.focusProgress} of {this.state.focusDuration}
          </div>
          <div>
            <label htmlFor='location'>Location: </label>
            <select id='location' name='location' onChange={this.handleChange}>
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
             <input type='text' id='distance' name='distance' maxLength="3" onChange={this.handleChange}></input>
           </div>
           <div>
             <label htmlFor='quiverSize'>Quiver: </label>
             <input type='text' id='quiver' name='quiver' maxLength="2" onChange={this.handleChange}></input>
           </div>
          <div className='buttonContainer'>
            <Link to=''>
              <button className='mainButton'>START SESSION</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    
    )
  }
}

export default Session