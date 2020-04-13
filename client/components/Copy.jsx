import React, { Component } from 'react';

//DATA: Local - Focus Descriptions
import descriptions from '../../public/data/descriptionContent'

const Copy = props => {
 
  //DATA: Populating description field. 
  const descriptionReq = Number(props.descId)
  const selectedCopy = descriptions.find(desc => desc.descId === descriptionReq)
  const focusName = selectedCopy.descName
  const focusDescription = selectedCopy.descCont
 
  return(
    <>
      <h3>{focusName}</h3>
      <p className='copyText'> {focusDescription} </p>
    </>
  )}

export default Copy;