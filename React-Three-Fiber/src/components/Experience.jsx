import { useGLTF, useTexture } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import * as THREE from 'three'

const Experience = () => {

    const cubeRef = useRef(null)

    // useFrame((state, delta) => {
    //     cubeRef.current.rotation.y += delta // rotate mesh on y axis
    // })

    const driTexture = useTexture('https://images.unsplash.com/photo-1781436331651-c754cc6463e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D');

    // const texture = useLoader(THREE.TextureLoader, 'https://images.unsplash.com/photo-1781436331651-c754cc6463e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D', (texture) => {
    //     texture.wrapS = THREE.RepeatWrapping
    //     texture.wrapT = THREE.RepeatWrapping
    // })

    // model use

    const {scene} = useGLTF('./model.glb')




    return (
        <>
            {/* <mesh position={[-2, 0, 0]}> // set mesh position

                <boxGeometry args={[3, 2, 1]} /> // width, height, depth

                <torusGeometry args={[2, 0.5, 16, 100]} /> // width, height, radialSegments, tubularSegments

                <meshBasicMaterial color={'red'} />
            </mesh> */}

                {/* <mesh ref={cubeRef}> 

                <boxGeometry args={[3, 3, 1]} /> // width, height, depth

                <meshBasicMaterial map={texture} />
            </mesh> */}


              {/* <mesh ref={cubeRef}> 

                <boxGeometry args={[3, 3, 1]} /> // width, height, depth

                <meshBasicMaterial map={driTexture} />
            </mesh> */}

            // for model
             <ambientLight intensity={3} color={'white'} />
            <primitive object={scene} position={[0, -2, 0]} />
        </>
    )
}

export default Experience
