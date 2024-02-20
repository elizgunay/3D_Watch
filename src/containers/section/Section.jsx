import React, { useState,useRef,useLayoutEffect } from 'react'
import logo from '../../assets/logo.svg'
import './section.css'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = () => {

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
      .fromTo(textOne.current, { x: 0 }, { x: "-40%" }, "key1")
      .fromTo(textTwo.current, { x: 0 }, { x: "-20%" },"key1")


    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <div className='app__section section__padding' ref={sectionRef}>

      <div className='app__section-content'>

        <div className='app__section-content_about'>
          <div className='app__section-content_about-heading' ref={textOne}>
            <img src={logo}></img>
            <h1>WATCH</h1>
          </div>

          <p className='orange-gradient' ref={textTwo}>Next Level Adventure</p>
        </div>

      </div>
      


    </div>
  )
}

export default Section
