import React from 'react'

import logo from '../../assets/logo.svg'
import './subheading.css'

const SubHeading = ({ title }) => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center' }}>
            <img src={logo} style={{marginRight:'0.5rem',width:'28px'}}></img>
            <p className='p__text'>{title}</p>
        </div>
    )
}

export default SubHeading
