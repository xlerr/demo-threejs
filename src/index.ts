// @ts-ignore
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import './main.css';

let width = window.innerWidth;
let height = window.innerHeight;

//创建场景.
let scene: THREE.Scene = new THREE.Scene();
let bg: THREE.Color = new THREE.Color();
bg.setRGB(234, 234, 234);
scene.background = bg;

//相机
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(10, width / height, 0.1, 1000);
//渲染器
let renderer = new THREE.WebGLRenderer();
//设置画布大小
renderer.setSize(width, height);
//加入到body
document.body.appendChild(renderer.domElement);

// let grid: THREE.GridHelper = new THREE.GridHelper(200, 40, 0xffffff, 0xffffff);
// grid.material.opacity = 0.2;
// grid.material.transparent = true;
// scene.add(grid);


//第二步,创建几何体.
let geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
let cube: THREE.Mesh = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({color: 0x00ff00}),
    new THREE.MeshBasicMaterial({color: 0xff0000}),
    new THREE.MeshBasicMaterial({color: 0x0000ff}),
    new THREE.MeshBasicMaterial({color: 0xfff000}),
    new THREE.MeshBasicMaterial({color: 0xff0fff}),
    new THREE.MeshBasicMaterial({color: 0xff00f0}),
]);

//加入到场景
scene.add(cube);


//第二步,创建几何体.
let geometry1: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
let cube1: THREE.Mesh = new THREE.Mesh(geometry1, [
    new THREE.MeshBasicMaterial({color: 0x00ff00}),
    new THREE.MeshBasicMaterial({color: 0xff0000}),
    new THREE.MeshBasicMaterial({color: 0x0000ff}),
    new THREE.MeshBasicMaterial({color: 0xfff000}),
    new THREE.MeshBasicMaterial({color: 0xff0fff}),
    new THREE.MeshBasicMaterial({color: 0xff00f0}),
]);
cube1.position.x = 10;
cube1.position.y = 0;
cube1.position.z = 0;
scene.add(cube1);

//设置相机位置
camera.position.z = 53;

let controls = new OrbitControls(camera, renderer.domElement);
// const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
// controls.enabled = true;
// controls.maxDistance = 1500;
// controls.minDistance = 0;

let i: number = 0;

//渲染循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
