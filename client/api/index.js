import request from 'superagent'

export function addFocus(focus){
  console.log(focus)
  return request.post('/api/v1/focus')
    .send(focus)
    .then(res => console.log('res:', res))
    .catch(err => console.log(err))
  }