import React,{Suspense} from 'react'
import '../canvas/watch.css'

import {Model} from '../../assets/watch/Scene'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../../components/Loader';


const Watch = () => {
    return (
        <div className='watch' id='watch'>
            <Canvas camera={{fox:14}}>
                <ambientLight intensity={1.25} />
                <pointLight intensity={1} />
                <spotLight angle={12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}></spotLight>
                <directionalLight position={[0.4]} intensity={1} />

                <Suspense fallback={<CanvasLoader />}>
                <Model />
                <OrbitControls/>
                <Environment preset='sunset'/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Watch
