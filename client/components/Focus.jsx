import React from 'react'
import {Link} from 'react-router-dom'
import Copy from './Copy'
import {addFocus} from '../api'


class Focus extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      f_timestamp: + new Date(),
      f_area: 8,
      f_detail:'',
      f_duration:'',
      }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event){
   this.setState({
     [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    addFocus(this.state)
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
      <div className='mainContentBox'>
        <div className='formContainer'>
          <form className='focusForm' onSubmit={this.handleSubmit}>
            <h3>Create a new Focus for your Archery Practice</h3>
            <div className='focusSelect'>
              <label htmlFor='focus'>Select a Focus: </label>
              <select id='focus' name='f_area' onChange={this.handleChange}>
                <option value='8'>Select a Focus</option>
                <option value='1'>Stance</option>
                <option value='2'>Bow Grip</option>
                <option value='3'>Draw</option>
                <option value='4'>Anchor</option>
                <option value='5'>Aim</option>
                <option value='6'>Release</option>
                <option value='7'>Follow Through</option>
                </select>
            </div>
            <div className='extraDescText'>
              <label htmlFor='extraDesc'>Extra Detail: </label>
              <textarea id='extraDesc' name='f_detail' rows='5' cols='35' 
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className='durationText'>
              <label htmlFor='duration'>Focus Duration: </label>
              <input type='number' id='duration' name='f_duration' maxLength="2"
                onChange={this.handleChange}>
              </input>
            </div>
          </form>
        </div>  
        <div className='copyContainer'>
          <Copy descId={this.state.f_area} />
          <div className=''>
            <Link to='/Session' onClick={this.handleSubmit}>
            <button className='mainButton' >Proceed</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
}}

export default Focus