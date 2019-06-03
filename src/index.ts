// @ts-ignore
import * as THREE from 'three';
import './main.css';

const OrbitControls = require('three-orbitcontrols/OrbitControls')
const TransformControls = require('three-transformcontrols/index')
const DragControls = require('three-dragcontrols/lib/index')

let width = window.innerWidth;
let height = window.innerHeight;

//创建场景.
let scene: THREE.Scene = new THREE.Scene();
// scene.background = new THREE.Color(0xe0e0e0);

//相机
let camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
camera.position.set(1800, 2400, 4400);
//渲染器
let renderer = new THREE.WebGLRenderer();
//设置画布大小
renderer.setSize(width, height);

// var axes: THREE.AxisHelper = new THREE.AxisHelper(10);//参数设置了三条轴线的长度
// scene.add(axes);

//加入到body
document.body.appendChild(renderer.domElement);

let grid: THREE.GridHelper = new THREE.GridHelper(5000, 60, 0xffffff, 0xffffff);
grid.position.y = 0;
grid.material.opacity = 0.25;
grid.material.transparent = true;
scene.add(grid);


//第二步,创建几何体.
let geometry: THREE.BoxGeometry = new THREE.BoxGeometry(500, 500, 500);
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
let geometry1: THREE.BoxGeometry = new THREE.BoxGeometry(500, 100, 100);
let cube1: THREE.Mesh = new THREE.Mesh(geometry1, [
    new THREE.MeshBasicMaterial({color: 0x00ff00}),
    new THREE.MeshBasicMaterial({color: 0xff0000}),
    new THREE.MeshBasicMaterial({color: 0x0000ff}),
    new THREE.MeshBasicMaterial({color: 0xfff000}),
    new THREE.MeshBasicMaterial({color: 0xff0fff}),
    new THREE.MeshBasicMaterial({color: 0xff00f0}),
]);
cube1.position.x = 500;
cube1.position.y = 0;
cube1.position.z = 0;
scene.add(cube1);

let controls = new OrbitControls(camera, renderer.domElement);
// controls.damping = 0.2;

let transformControl = new TransformControls(camera, renderer.domElement);
transformControl.setMode('translate'); // scale, rotate, translate
transformControl.attach(cube);
transformControl.addEventListener('dragging-changed', function (event) {
    controls.enabled = !event.value
    window.removeEventListener('click', select);
});
scene.add(transformControl);


// let dragControls = new DragControls([cube, cube1], camera, renderer.domElement);
// dragControls.addEventListener('dragstart', function () {
//     controls.enabled = false;
// });
// dragControls.addEventListener('dragend', function () {
//     controls.enabled = true;
// });

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var selectedObjects = [];
window.addEventListener('click', select);

function select (event) {
    var x, y;

    if (event.changedTouches) {

        x = event.changedTouches[0].pageX;
        y = event.changedTouches[0].pageY;

    } else {

        x = event.clientX;
        y = event.clientY;

    }

    mouse.x = (x / window.innerWidth) * 2 - 1;
    mouse.y = -(y / window.innerHeight) * 2 + 1;

    checkIntersection();
}

function addSelectedObject(object) {
    selectedObjects = [];
    selectedObjects.push(object);
}

function checkIntersection() {

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects([cube, cube1], true);

    if (intersects.length > 0) {
        transformControl.attach(intersects[0].object)
    } else {
        transformControl.detach(transformControl.object);
        // outlinePass.selectedObjects = [];
    }
}

//渲染循环
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
