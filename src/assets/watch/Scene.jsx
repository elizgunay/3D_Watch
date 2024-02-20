

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap';
import { useThree } from '@react-three/fiber';
import ScrollTrigger from 'gsap/ScrollTrigger';


export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')

  let camera = useThree(state => state.camera);
  let scene = useThree(state => state.scene);


  useLayoutEffect(() => {
    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add({

      isDesktop: `(min-width: 48em)`,
      isMobile: `(max-width:48em`,


    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: "#watch",
          start: "top top",
          endTrigger: ".app__section",
          end: "center+=200 center",
          // markers: true,
          scrub: true
        }
      })
      const targetElement = document.querySelector('.watch');

      t1.fromTo(camera.position, { y: 3 ,x:3}, { y: 0 })
        .to(scene.rotation, { y: 7.5, x: isDesktop ? 0.4: 0.1, ease: "power2.out", })
        .to(targetElement, { duration: 1, ease: "power2.out", x: isDesktop ? "-300" : "-70" })
        .to(scene.rotation, { y: 0.1 })
        .to(targetElement, { duration: 1, ease: "power2.out", x: isDesktop ? "150":"50" })
        .to(camera.position, { x: 7 })
        .to(targetElement, { opacity: 0 })
        .to(targetElement, { display: 'none' })
    })




    // to.scene
  }, [])

  return (
    <group {...props} dispose={null}>
      <group scale={0.2}>
        <mesh geometry={nodes.MLFNgqDqViRzFAG.geometry} material={materials.HUwkFDLqEFoTaxW} />
        <mesh geometry={nodes.BpzHTNsUQYccQZO.geometry} material={materials.LLmsxstJxVgNsnb} />
        <mesh geometry={nodes.nTQgANoyTueuTWO.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.bAKLNmPbIOnlFCh.geometry} material={materials.JoIbGRmJFdsSNYI} />
        <mesh geometry={nodes.nzegwylKXokNRsu.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.zqzfMzpOMmkwooz.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.NviWfdPIAuwGhuw.geometry} material={materials.kVaeXYFaJhdUARb} />
        <mesh geometry={nodes.fSjUqbzpOBClCkp.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.jsYOceOPookXogG.geometry} material={materials.riakWjRZAXAqWsu} />
        <mesh geometry={nodes.nFcRxfWEoAIgIJM.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.FRHeKieRtsuKFqI.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.ICiLfTgRKmVDURH.geometry} material={materials.kXCmZWmPBarbEsJ} />
        <mesh geometry={nodes.zWHRYuSXNrwKuOu.geometry} material={materials.tbZIZBblUmkrxKp} />
        <mesh geometry={nodes.lQWqZzniJdQEyQf_0.geometry} material={materials.LLmsxstJxVgNsnb} />
        <mesh geometry={nodes.lxGVWzQjohjPxnt.geometry} material={materials.XybRtJquThvOCqQ} />
        <mesh geometry={nodes.IhbCJvqLshKQhue.geometry} material={materials.MDljgHDjAwWtGGq} />
        <mesh geometry={nodes.dkRonzbxLCwjzkb.geometry} material={materials.WkKmICuLIpNbpaj} />
        <mesh geometry={nodes.FjtjvYUJdMYiQQw.geometry} material={materials.akMNLWSaXiEtqoo} />
        <mesh geometry={nodes.LCtXMkfUukutNIX.geometry} material={materials.SlELGRYBEUAqHzo} />
        <mesh geometry={nodes.zckGhJEDdcidEBl.geometry} material={materials.hKCSgbIkkiPrZbN} />
        <mesh geometry={nodes.JvxFZHlxSggEiWF.geometry} material={materials.WZBNGWfTxwcsSLf} />
        <mesh geometry={nodes.mEszvIfbdUjfuly.geometry} material={materials.jHJGJrQrsYkmgQj} />
        <mesh geometry={nodes.hvGrKGneRLvJuto.geometry} material={materials.HvwaINjHNhePohJ} />
        <mesh geometry={nodes.cJKoXSmaNEvYEoi.geometry} material={materials.MDljgHDjAwWtGGq} />
        <mesh geometry={nodes.JGPnreQDUYirYCY.geometry} material={materials.MDljgHDjAwWtGGq} />
        <mesh geometry={nodes.MsbPtksJZInzUhu.geometry} material={materials.GNjoSxTDopqKuIq} />
        <mesh geometry={nodes.FrRXehOiqNjIFAr.geometry} material={materials.GNjoSxTDopqKuIq} />
        <mesh geometry={nodes.qvShfmDCzhKDUQe.geometry} material={materials.GNjoSxTDopqKuIq} />
        <mesh geometry={nodes.NqTzDYBhJHwdKFO.geometry} material={materials.MPCGBHstQClgXwb} />
        <mesh geometry={nodes.xjJcyeocVcXUcrL.geometry} material={materials.gdQqldeaKRUzcOc} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
