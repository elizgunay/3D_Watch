import React from 'react'
import './product.css'
import { apple1, apple2, apple3 } from './imports';

import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn} from '../../utils/motion'
import logo from '../../assets/logo.svg'
import { SectionWrapper } from "../../hoc";

const ProductCard = ({ imgSrc, altText, title, textColor }) => (
  <Tilt className='app__products-content-card flex__center'>
    <motion.div variants={fadeIn("right", "spring", 0.5, 0.75)} options={{ max: 45, scale: 1, speed: 450 }} >
      <img style={{ width: '200px', height: '220px' }} src={imgSrc} alt={altText} />
        <h3 style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }}>
          <img src={logo} style={{ marginRight: '0.3rem', verticalAlign: 'middle' }} alt='brand_logo' />
          WATCH <span style={{ color: textColor, fontSize: '26px', fontWeight: 'bold' }}>{title}</span>
        </h3>

    </motion.div>
  </Tilt>
);

const Products = () => {



  return (
    <section className='app__products section__padding' id='products'>
      <motion.h1 variants={fadeIn("right", "spring", 0.9, 0.95)} options={{ max: 55, scale: 1, speed: 650 }}>Which Apple Watch is right for you?</motion.h1>
      <div className='app__products-content'>
      <ProductCard imgSrc={apple1} altText='apple_imgSE' title='SE' textColor='pink' />
      <ProductCard imgSrc={apple2} altText='apple_imgS6' title='Series 6' textColor='white' />
      <ProductCard imgSrc={apple3} altText='apple_imgSUltra' title='Ultra 2' textColor='#ff4500' />
      </div>
      
    </section>
   
  );
}

export default SectionWrapper(Products,'products');
