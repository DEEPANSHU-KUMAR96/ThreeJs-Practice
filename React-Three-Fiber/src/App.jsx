import React from 'react'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { OrbitControls } from '@react-three/drei'


const App = () => {
  return (

    // <div className="parent w-full h-screen">
    // <Canvas camera={{ position: [0, 15, 0], fov: 45 }}> // set camera position 
    //   <OrbitControls/>
    //   <Experience/>
    // </Canvas>
    // </div>

     <div className="parent w-full h-screen">
    <Canvas > // set camera position 
      <OrbitControls/>
      <Experience/>
    </Canvas>
    </div>
  )
}

export default App
