import React from 'react'
import { Html, useProgress } from '@react-three/drei';

const Loader = () => {
    const {progress} = useProgress();
    return (
      <Html  >
        <span className='canvas-loader'></span>
        <p
          style={{
            fontSize: 14,
            color: '#000000',
            fontWeight: 800,
            marginTop: 40
          }}
        >
          Loading:
          {progress.toFixed(2)}%
        </p>
      </Html>
  )
}

export default Loader
