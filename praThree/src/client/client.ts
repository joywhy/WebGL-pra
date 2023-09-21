import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from "three/examples/jsm/libs/stats.module"
import { GUI } from 'dat.gui'
const scene = new THREE.Scene()
//스크린에 x축 , y축, z 축 가상선 생성하기 
//AxesHelper는 LineSegments를 확장한 객체임
 scene.add(new THREE.AxesHelper(5)) //5단위길이의 가상선

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
// controls.addEventListener("change", render);//마우스로 움직일때마다 렌더함수를 호출합니다.

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)//브라우저 창 사이즈가 변경될때마다 리렌더
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    //render()
}
const stats = new Stats() //프레임 렌더링 계산
document.body.appendChild(stats.dom)
const gui = new GUI()
const cubeFolder= gui.addFolder("cube")

const cubeRotationFolder = cubeFolder.addFolder("Rotation");
cubeRotationFolder.add(cube.rotation,"x",0, Math.PI *2)
cubeRotationFolder.add(cube.rotation,"y",0, Math.PI *2)
cubeRotationFolder.add(cube.rotation,"z",0, Math.PI *2)
cubeFolder.open()
cubeRotationFolder.open()

const cubePositionFolder = cubeFolder.addFolder("Position");
cubePositionFolder.add(cube.position,"x",-10, 10)
cubePositionFolder.add(cube.position,"y",-10, 10)
cubePositionFolder.add(cube.position,"z",-10, 10)
cubePositionFolder.open()

const cubeScaleFolder = cubeFolder.addFolder("scale");
cubeScaleFolder.add(cube.scale,"x",0,5)
cubeScaleFolder.add(cube.scale,"y",0,5)
cubeScaleFolder.add(cube.scale,"z",0,5)

cubeScaleFolder.open()

cubeFolder.add(cube, 'visible')

//폴더가 열린채가 디폴트가 된다.
//그전에 카메라 z위치로 설정해준값이 디폴트로 자리잡아 랜더된다. 
// 우리는 그전에 2로 설정했기때문에  2로 랜더된다.
function animate() {
//     // 초당 60프레임으로 동작
    requestAnimationFrame(animate)

    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    render()
    stats.update()
}

function render() {
    renderer.render(scene, camera)
}

animate()
//  render()