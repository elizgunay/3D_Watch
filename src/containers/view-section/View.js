import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import {Model} from './Scene'
import './view.css'

const View = () => {
  return (
    <div id='watch1'>
      <Canvas camera={{fox:14}} style={{width:'600px',height:'500px'}}>
                <ambientLight intensity={1.25} />
                <pointLight intensity={1} />
                <spotLight angle={12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}/>
                <directionalLight position={[0.4]} intensity={1} />
               
                <Model rotation={[Math.PI / 8, 0, 0]}/>
                <OrbitControls autoRotate={true} enableZoom={true}  zoomSpeed={0.5} />
                <Environment preset='sunset'/>
            </Canvas>
    </div>
  )
}

export default View
