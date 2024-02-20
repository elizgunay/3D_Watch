import React,{useRef,useLayoutEffect} from 'react'
import './about.css'
import SubHeading from '../../components/SubHeading/SubHeading'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef(null);

  const textOne = useRef(null);
  const textTwo = useRef(null);
  const textThree = useRef(null);

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
      .fromTo(textTwo.current, { x: 0 }, { x: "-20%" }, "key1")
      .fromTo(textThree.current, { x: 0 }, { x: "-40%" }, "key1");


    return () => {
      if (t1) t1.kill();
    };
  }, []);
  
  return (
    <div className='app__about flex__center section__padding' id='about' ref={sectionRef}>

        <div className='app__about-content'>

          <h1 ref={textOne}>Smarter.</h1>
          <h1 ref={textTwo}>Brighter.</h1>
          <h1 ref={textThree}>Mightier.</h1>

        </div>
    </div>
  )
}

export default About
