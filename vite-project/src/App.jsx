import './App.css'
import React, { Suspense,useRef,useState } from 'react'
import {OrbitControls, useGLTF } from '@react-three/drei'
import {Canvas} from "@react-three/fiber"

export function Model(props) {
  
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.TEXTURE}  />
      <mesh geometry={nodes.Object_5.geometry} material={materials.TEXTURE} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.TEXTURE}  />
      {/* material-color={"red"}  */}
    </group>
  )
}
function App() {

  return (
    <>
    <Canvas  
     style={{ width: "70vw", height: "80vh", border: "1px solid black" }}
     camera={{
      aspect: 1,
      fov: 100,
      near: 0.1,
      far: 1000,
      position: [10, 10, 10],
    }}
     >
      <ambientLight intensity={1.2}/>
      {/* scene 내의 모든 object들에 전 방향에서 조명을 비춰준다. 강도 */}
      {/* <directionalLight  position={[0, 0, 1]} /> */}
     <Model/>
      <OrbitControls 
             enablePan={true}
             enableRotate={true}
             enableZoom={true}
             />
    </Canvas>
      
    </>
  )
}

export default App
