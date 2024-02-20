import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../../utils/motion'
import logo from '../../assets/logo.svg'

import './article.css'

const ArticleCard = ({ index, title, img }) => (
    <Tilt className='app__products-content flex__center'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='app__products-content_card'>
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='app__product-cardContent'
            >

                <img style={{ width: '140px', height: '160px' }} src={img} alt='article_image'></img>
                <h3><img src={logo}></img>
                    {title}</h3>

            </div>

        </motion.div>
    </Tilt>
)

export default ArticleCard