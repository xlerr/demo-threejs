// @ts-ignore
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

//创建场景.
let scene: THREE.Scene = new THREE.Scene();
//相机
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
//渲染器
let renderer = new THREE.WebGLRenderer();
//设置画布大小
renderer.setSize(400, 400);
//加入到body
document.body.appendChild(renderer.domElement);


//第二步,创建几何体.

let geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
let material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
let cube: THREE.Mesh = new THREE.Mesh(geometry, material);
cube.rotation.x = 10;
//加入到场景

scene.add(cube);

//设置相机位置
camera.position.z = 3;

let controls = new OrbitControls(camera, renderer.domElement);
// const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
// controls.enabled = true;
// controls.maxDistance = 1500;
// controls.minDistance = 0;

//渲染循环
function animate() {
    cube.rotation.y = (cube.rotation.y + 0.02) % 360;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
