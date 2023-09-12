import {Box as ChackraBok} from "@chakra-ui/react";
import { Canvas,useFrame} from "@react-three/fiber";
import { Mesh } from 'three';
import { useRef } from "react";

const Cube = () => {
    const Box = (props:JSX.IntrinsicElements['mesh'])=>{
         const ref = useRef<Mesh>(null);

         useFrame(()=>{
            ref.current.rotation.x += 0.01
         })
        return (
            <mesh ref={ref} scale ={2} {...props}>
                <boxGeometry arges={[1,1,1]}/>
                <meshStandardMaterial color ="orange"/>
            </mesh>
        );
    }


    return (
       <ChackraBok bg ="black">
        <Canvas dpr = {[1,2]}>
            <ambientLight intensity ={0.5}/>
            <spotLight position={[10,10,10]} angle ={0.5} penumbra ={1}/>
            <pointLight position={[-10,-10,-10]}/>
            <Box position={[-3.2,0,0]}/>
            <Box position={[4.2,0,0]}/>
        </Canvas>
       </ChackraBok>
        
    );
};

export default Cube;