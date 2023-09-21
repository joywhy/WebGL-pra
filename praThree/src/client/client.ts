import * as THREE from "three"
 

const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color:0x00ffff,
})

const cube = new THREE.Mesh(geometry,material);
scene.add(cube)

const camera = new THREE.PerspectiveCamera(
    75,1,0.1,10
)
camera.position.z=3
const canvas = document.getElementById("c1")
const renderer = new THREE.WebGLRenderer({canvas:canvas!})
renderer.setSize(200,200)

function render(){

    renderer.render(scene, camera)
}


render()