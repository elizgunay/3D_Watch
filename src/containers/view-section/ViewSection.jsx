import React from 'react'
import View from './View.js';
import './view.css'

const ViewSection = () => {
  return (
    <div className='app__view'>
      <h1 className='p__cormorant'>3D View</h1>
      <View/>
    </div>
  )
}

export default ViewSection
