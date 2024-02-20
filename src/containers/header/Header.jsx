import React,{useState,useLayoutEffect,useRef} from 'react'
import './header.css'
// import WatchCanvas from '../../canvas/Watch'

import WatchCanvas from '../../components/canvas/Watch'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from 'framer-motion'
import { fadeIn} from '../../utils/motion'


import SubHeading from '../../components/SubHeading/SubHeading'

const Header = () => {

  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const textOne = useRef(null);
  const textTwo = useRef(null);

  useLayoutEffect(() => {
    let t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .fromTo(textOne.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (t1) t1.kill();
    };
  }, []);


  return (
    <section className='app__wrapper section__padding' id='home' ref={sectionRef}>
      <motion.div className='app__wrapper_info' variants={fadeIn("right", "spring", 0.5, 0.75)} options={{ max: 45, scale: 1, speed: 450 }}>
        <SubHeading title="WATCH" ref={textOne} className="p__orange"/>
        <p className=' p__opensans' ref={textTwo}>Apple Watch features an innovative new display that allows<br />
          the time and important information to remain visible at all times.<br />Each watch face has been carefully optimized for the new display<br />and to preserve battery life.</p>
        <button type='button' className='custom__button'>Learn More</button>
      </motion.div>
     
    </section>
  )


}


export default Header
