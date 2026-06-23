import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';


const size = {
  width: window.innerWidth,
  height: window.innerHeight
}

// Scene
const scene = new THREE.Scene();

const clock = new THREE.Clock();

//Texture loader
const textureLoader = new THREE.TextureLoader(); // create texture loader

const texture = textureLoader.load('https://images.unsplash.com/photo-1780995173877-3c5d1c63fcdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8',
  () => {
    console.log('texture loaded')
  },
  () => {
    console.log('texture error')
  }
)

//RGBE loader
const envMap = new RGBELoader(); // create RGBE loader

//load envMap
envMap.load('./envMap.hdr', (envMap) => {
  envMap.mapping = THREE.EquirectangularReflectionMapping; // set envMap mapping
  scene.background = envMap; // set scene background
  scene.environment = envMap; // set scene environment
});

//Camara
const camera = new THREE.PerspectiveCamera(
  75, // This is for human eyes view
  size.width / size.height,  // screen aspect ratio rule
  0.01,  // near clipping plane
  100    // far clipping plane
)

camera.position.z = 6 // move camara to the back of the scene

const ambientLight = new THREE.AmbientLight('#ffffff', 1.2) // create ambient light

scene.add(ambientLight)

// const directionalLight = new THREE.DirectionalLight('#ffffff', 2) // create directional light

// directionalLight.position.set(1.45, 2, -4) // set light position

// scene.add(directionalLight)

// const directionLightHelper = new THREE.DirectionalLightHelper(directionalLight) // create light helper

// scene.add(directionLightHelper)

// const pointLight = new THREE.PointLight('#ffffff', 2, 1.2, 1) // create point light

// pointLight.position.set(0, 2, 0) // set light position

// scene.add(pointLight)

// const pointLightHelper = new THREE.PointLightHelper(pointLight) // create light helper

// scene.add(pointLightHelper)

//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1) // width, height, depth


const material = new THREE.MeshStandardMaterial({
  color: "red",
  metalness: 0.9,
  roughness: 0.01,
  // map: texture
})

const cube = new THREE.Mesh(geometry, material)

scene.add(cube) // add mesh to scene


//canvas
const canvas = document.querySelector('canvas') // canvas element

//renderer
const renderer = new THREE.WebGLRenderer({ canvas })

const controls = new OrbitControls(camera, renderer.domElement); // enable mouse controls

renderer.setSize(size.width, size.height) // set canvas size to the same as the window size

window.addEventListener('resize', () => {

  size.width = window.innerWidth
  size.height = window.innerHeight

  camera.aspect = size.width / size.height // update camera aspect ratio
  camera.updateProjectionMatrix()  // update camera projection matrix
  renderer.setSize(size.width, size.height) // update canvas size

})
const animate = () => {

  const delta = clock.getElapsedTime();

  cube.rotation.y = delta * 0.8; // rotate mesh on y axis

  controls.update(); // update mouse controls

  renderer.render(scene, camera) // render scene with camara

  requestAnimationFrame(animate) // call animate function on each frame

}

animate();