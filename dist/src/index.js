// @ts-ignore
import * as THREE from 'three';
import './main.css';
var OrbitControls = require('three-orbitcontrols/OrbitControls');
var TransformControls = require('three-transformcontrols/index');
var DragControls = require('three-dragcontrols/lib/index');
var width = window.innerWidth;
var height = window.innerHeight;
//创建场景.
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xe0e0e0);
//相机
var camera = new THREE.PerspectiveCamera(70, width / height, 1, 10000);
camera.position.set(0, 1000, 1800);
//渲染器
var renderer = new THREE.WebGLRenderer();
//设置画布大小
renderer.setSize(width, height);
//加入到body
document.body.appendChild(renderer.domElement);
var grid = new THREE.GridHelper(5000, 60, 0x000000, 0x000000);
grid.position.y = 0;
grid.material.opacity = 0.25;
grid.material.transparent = true;
scene.add(grid);
//第二步,创建几何体.
var geometry = new THREE.BoxGeometry(500, 500, 500);
var cube = new THREE.Mesh(geometry, [
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    new THREE.MeshBasicMaterial({ color: 0xfff000 }),
    new THREE.MeshBasicMaterial({ color: 0xff0fff }),
    new THREE.MeshBasicMaterial({ color: 0xff00f0 }),
]);
//加入到场景
scene.add(cube);
//第二步,创建几何体.
var geometry1 = new THREE.BoxGeometry(500, 100, 100);
var cube1 = new THREE.Mesh(geometry1, [
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }),
    new THREE.MeshBasicMaterial({ color: 0xff0000 }),
    new THREE.MeshBasicMaterial({ color: 0x0000ff }),
    new THREE.MeshBasicMaterial({ color: 0xfff000 }),
    new THREE.MeshBasicMaterial({ color: 0xff0fff }),
    new THREE.MeshBasicMaterial({ color: 0xff00f0 }),
]);
cube1.position.x = 500;
cube1.position.y = 0;
cube1.position.z = 0;
scene.add(cube1);
// let controls = new OrbitControls(camera, renderer.domElement);
// controls.damping = 0.2;
var transformControl = new TransformControls(camera, renderer.domElement);
transformControl.addEventListener('dragging-changed', function (event) {
    // controls.enabled = !event.value
});
scene.add(transformControl);
transformControl.setMode('translate'); // scale, rotate, translate
var dragControls = new DragControls([cube, cube1], camera, renderer.domElement);
// dragControls.addEventListener('mousedown', function (event) {
//     transformControl.attach(event.object);
// });
// controls.addEventListener('change', render);
// const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
// controls.enabled = true;
// controls.maxDistance = 1500;
// controls.minDistance = 0;
var i = 0;
//渲染循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
//# sourceMappingURL=index.js.map