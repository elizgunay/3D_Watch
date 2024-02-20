import React from 'react'

import { staggerContainer } from '../utils/motion.js';
import { motion } from 'framer-motion'
import './sectionWrapper.css'

const SectionWrapper = (Component, idName) => {
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.25 }}
                className="wrapper__section"
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };
    return HOC;
}

export default SectionWrapper
