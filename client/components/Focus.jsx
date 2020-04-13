import React from 'react'
import {Link} from 'react-router-dom'
import Copy from './Copy'

class Focus extends React.Component {
  constructor(props){
    super(props)
    this.state = {focus: 8}
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
   this.setState({focus: event.target.value})
  }

  render(){
    return(
    <>
      <div className='mainImage'>
      </div>
      <div className='formContainer'>
        <form>
          <h3>Create a new Focus for your Archery Practice</h3>
          <div className='focusSelect'>
            <label htmlFor='focus'>Select a Focus: </label>
            <select id='focus' name='focus' onChange={this.handleChange}>
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
            <textarea id='extraDesc' name='extraDesc' rows='5' cols='40'>
            </textarea>
          </div>
          <div className='durationText'>
            <label htmlFor='duration'>Focus Duration: </label>
            <input type='text' id='duration' name='duration' maxLength="2"></input>
          </div>
          <div className='buttonDiv'>
            <Link to=''>
            <button className='proceedButton'>Proceed</button>
            </Link>
          </div>  
        </form>
      </div>
        <div className='copyContainer'>
          <Copy descId={this.state.focus} />
        </div>    
    </>
    )
}}

export default Focus