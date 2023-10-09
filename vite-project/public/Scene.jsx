/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf 
Author: kane_sk06 (https://sketchfab.com/kanesk06)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/sneakers-game-ready-textured-mockup-d9a4eda1845249a69d3c79814be9efc0
Title: Sneakers - Game Ready - Textured (Mockup)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.TEXTURE} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.TEXTURE} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.TEXTURE} />
    </group>
  )
}

useGLTF.preload('/scene.gltf')