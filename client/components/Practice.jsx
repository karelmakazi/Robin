import React from 'react'
import {Link} from 'react-router-dom'
import request from 'superagent'



//STATEFUL COMPONENT
class Practice extends React.Component {
  
  state = {
  }
  
  
  render(){
    return(
      <div className='mainContainer'>
        <div className='appContainer'>
          <div className='targetContainer'>
            <div className='ring'> 
              <div className='ring'>
                <div className='ring'>
                  <div className='ring'>
                    <div className='ring'>
                      <div className='ring'>
                        <div className='ring'>
                          <div className='ring'>
                            <div className='ring'>
                              <div className='ring'>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Practice