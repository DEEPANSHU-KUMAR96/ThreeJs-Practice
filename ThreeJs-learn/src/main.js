import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Scene
const scene = new THREE.Scene();

//Camara
const camera = new THREE.PerspectiveCamera(
  75, // This is for human eyes view
  window.innerWidth / window.innerHeight,  // screen aspect ratio rule
  0.01,  // near clipping plane
  100    // far clipping plane
)

camera.position.z = 5 // move camara to the back of the scene

//mesh
const geometry = new THREE.BoxGeometry(1, 1, 1) // width, height, depth
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })

const cube = new THREE.Mesh(geometry, material)

scene.add(cube) // add mesh to scene


//canvas
const canvas = document.querySelector('canvas') // canvas element

//renderer
const renderer = new THREE.WebGLRenderer({ canvas })

const controls = new OrbitControls(camera, renderer.domElement); // enable mouse controls

renderer.setSize(window.innerWidth, window.innerHeight) // set canvas size to the same as the window size


const animate = () => {
  cube.rotation.y += 0.06 // rotate mesh on y axis

  controls.update(); // update mouse controls

  renderer.render(scene, camera) // render scene with camara

  requestAnimationFrame(animate) // call animate function on each frame

}

animate();