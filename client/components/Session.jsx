import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'

const key = 'e194032630d94a94e625089b27af504b'
const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=' + key

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
      windspeed:'',
      windDirection:'',
      humidity:'',
    }
    this.handleChange = this.handleChange.bind(this)
    this.windDirection = this.windDirection.bind(this)
  }

  componentDidMount(){
    request.get(weatherApi)
      .then(res => {
        console.log(res.body);
        let wind = res.body.wind
        let humidity = res.body.main
      

        this.setState({
          windspeed: wind.speed,
          windDirection: wind.deg,
          humidity: humidity.humidity,
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


  windDirection(deg){
      let cardinal =''
      switch (true) {
        case (deg >= 0 && deg <= 23):
          cardinal = ' North ';
          return cardinal
        case (deg >= 337 && deg <= 360):
          cardinal = ' North ';
          return cardinal
        case (deg >= 24 && deg <= 68):
          cardinal = ' North East ';
          return cardinal
        case (deg >= 69 && deg <= 113):
          cardinal = ' East ';
          return cardinal
        case (deg >= 114 && deg <= 158):
          cardinal = ' South East ';
          return cardinal
        case (deg >= 159 && deg <= 203):
          cardinal = ' South ';
          return cardinal
        case (deg >= 204 && deg <= 248):
          cardinal = ' South West ';
          return cardinal
        case (deg >= 249 && deg <= 293):
          cardinal = ' West ';
          return cardinal
        case (deg >= 294 && deg <= 336):
          cardinal = ' North West ';
          return cardinal
      }
    }
  
  
  render(){
    
    const sessionHeading = 'Session Details'
    const scoringNoteHeading = 'Weather Report'

    let windKnots = Math.round((this.state.windspeed * 1.94384))

    const windSpeedText = 'WIND SPEED: ' + windKnots + ' kn'
    const windDirectionText = 'WIND DIRECTION: ' + this.windDirection(this.state.windDirection)
    const humidityText = 'HUMIDITY: ' + this.state.humidity +'%'




    const details = 'Testing instinctive aiming with a recurve bow.'
    
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
      <div className='mainContentBox'>
      <div className='leftContentBox'>
        <div className='lcHeading'>
          {sessionHeading}
        </div>
        <div className='lcContent'>
          <div className='selectLocation'>
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
          <div className='distanceTextBox'>
            <label htmlFor='distance'>Distance: </label>
            <input type='text' id='distance' name='distance' maxLength="3" onChange={this.handleChange}></input>
          </div>
          <div className='quiverTextBox'>
            <label htmlFor='quiverSize'>Quiver: </label>
            <input type='text' id='quiver' name='quiver' maxLength="2" onChange={this.handleChange}></input>
          </div>
          <div className='scoringNotes'>
            <div className='scnHeading'>{scoringNoteHeading}</div>
            <div className='scnBody'>
              <div>
                {windDirectionText}
              </div>
              <div>
                {windSpeedText}
              </div>
              <div>
                {humidityText}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='rightContentBox'>
        <div className='rcTextBox'>
          <div>
            Current focus: {this.state.focusArea} 
          </div>
          <div className='sessionText'>
            Session: {this.state.focusProgress} of {this.state.focusDuration}
          </div>
          <div className='detailHeading'>
            Details:
          </div>
          <div className='detailText'>
            {details}
          </div>
        </div>
        <div className='rcButtonBox'>
          <Link to='/Practice'>
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

  // .then(res => {
  //   // this.setState({
  //   // focusID:res.body[0].id,
  //   // focusArea: res.body[0].area,
  //   // focusDuration: res.body[0].duration,
  //   // focusDetail: res.body[0].detail
  //   // })
  // })