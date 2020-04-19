import request from 'superagent'


export function addFocus(focus){
  console.log('index.js')
  return request.post('/api/v1/focus')
    .send(focus)
  }