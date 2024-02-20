import React, {
  Suspense, useEffect, useLayoutEffect, useRef, useState, useImperativeHandle, useCallback
} from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import CanvasLoader from '../Loader';
import { gsap, ScrollTrigger } from 'gsap/all';

import './watch.css'

gsap.registerPlugin(ScrollTrigger);


const Watch = ({ previewMode }) => {
  // const  scene  = useGLTF('../../../watch/scene.gltf');
  const group = useRef();
  let camera = useThree(state => state.camera); // Reference to the camera
  let scene = useThree(state => state.scene)

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('../../../watch/scene.gltf', (gltf) => {

      const mesh = gltf.scene;

      mesh.scale.set(70, 70, 70);

     
      mesh.traverse((child) => {
        if (child.isMesh) {
          // Set material color to white
          child.material.transparent = true;  // Настройте материала за прозрачност
          child.material.alphaTest = 0.5;  //
          child.material.color = new THREE.Color(0xffffff);
        }
      });

      group.current.add(mesh);

      // Create a point light for internal lighting
      const internalLight = new THREE.PointLight(0xffffff, 0.5);
      internalLight.position.set(2, 2, 2); // Adjust the position as needed
      mesh.add(internalLight);


    });



  }, []); // Empty dependency array ensures the effect runs once on mount



  useLayoutEffect(() => {

    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    const targetElement = document.querySelector('.watch');

    const canvas = document.querySelector('canvas');
    let mm = gsap.matchMedia();

    mm.add({

      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: 601px)`,
      isMobile: `(max-width:600px`,


    }, (context) => {

      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isMobile,isDesktop } = context.conditions;

      const targetElement = document.querySelector('.watch');

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: '.app__wrapper',
          start: 'top top',
          end: "center+=300 center",
          endTrigger: '.app__section',
          scrub: true,
          // markers: true,
          // repeat: -1,
          // toggleActions:'play reverse reverse complete'

        }
      });
 
    
      t1.fromTo(camera.position, { y: isMobile ? 15: 10, }, { x: 2 })
        .to(scene.rotation, { y: isMobile? -5.4 : 5,ease: "power2.out" })
        .to(scene.rotation,{y: isMobile ? 0.5 : 1})

      t1.to(targetElement, { duration: 1, ease: "power2.out", x: isMobile ? "-100":"-400"})// Плавнo преместване отляво надясно

      .to(camera.position, { x: isMobile? 10 : 10})
        .to(scene.rotation, { y: isMobile ? -5.8 : 1 ,ease: "power2.out",})

      t1.to(targetElement, { duration: 1, ease: "power2.out", x: "50" })
        .to(camera.position, { x: 3 })
        // .to(scene.rotation, { x: -0.11, y: -0.56 })
        .to(targetElement, { opacity: 0 })
        .to(targetElement, { display: 'none' })


      if (isMobile) {
        camera.fov = 10;
        camera.updateProjectionMatrix();
      }
      return () => {
        if (t1) t1.kill();
      }
    })
    }, []);
  
  // const targetElement = document.querySelector('.watch');

  // const t1 = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: '.app__wrapper',
  //     start: 'top top',
  //     end: "center+=300 center",
  //     scrub: true,
  //     markers: true,
  //     // repeat: -1,
  //     // toggleActions:'play reverse reverse complete'
  //     endTrigger: '.app__section',

  //   }
  // });
  // t1.to(targetElement, { duration: 1, ease: "power2.out", x: "-500" }); // Плавнo преместване отляво надясно


  //   t1.fromTo(camera.position, { y: 15, }, { x: 0 })
  //     .to(scene.rotation, { y: -5.8 })
  //   // .to(scene.rotation,{y:1})

  //   t1.to(targetElement, { duration: 1, ease: "power2.out", x: "-500" })// Плавнo преместване отляво надясно
  //     .to(camera.position, { x: 13 })
  //     .to(scene.rotation, { y: -5.8 })

  //   t1.to(targetElement, { duration: 1, ease: "power2.out", x: "50" })
  //     .to(camera.position, { x: 3 })
  //     .to(scene.rotation, { x: -0.11, y: -0.56 })
  //     .to(targetElement,{opacity:0})
  //     .to(targetElement,{display:'none'})

  // }, []); // Add camera as a dependency


  return (
    <group ref={group} >
      <ambientLight intensity={0.5} />
      <pointLight intensity={1} />
      <spotLight angle={12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}></spotLight>
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Other 3D components can be added here */}
    </group>

  );
};


const WatchCanvas = ({ isZoomEnabled }) => {
  const [isLoading, setIsLoading] = useState(true);
  const controlsRef = useRef();


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Replace this with actual logic to determine when to stop showing the loader

    const handleKeyDown = (event) => {
      // Проверете дали бутона, който сте натиснали, е този, който искате (например, 'Z')
      if (event.key === 'z') {
        // Активирайте или деактивирайте зуума
        controlsRef.current.enableZoom = !controlsRef.current.enableZoom;
      }
    };

   
  


    

    // Добавете събитие за натискане на клавиш
    window.addEventListener('keydown', handleKeyDown);

    // Почистете събитието при размонтиране на компонентата
    return () => {
      window.removeEventListener('keydown', handleKeyDown);

    };
  }, [controlsRef]);





  return (
    <div className="watch">

      <Canvas
        frameloop="always"
        gl={{ preserveDrawingBuffer: true }}
        // antialias="true"
        
        camera={{
          position: [20, 3, 30], // Adjust the camera position
          fov: window.innerWidth < 600 ? 25 : 35,
          near: 1,
          far: 1000,
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enablePan={false} enableZoom={false} // Първоначално зуумът е изключен
            ref={controlsRef} />
          <Watch />
        </Suspense>
        {isLoading && <CanvasLoader />}
      </Canvas>
    </div>
  );
};

export default WatchCanvas;