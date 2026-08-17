import * as THREE from 
"https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";


const scene = new THREE.Scene();

scene.background = new THREE.Color(0x222222);


const camera = new THREE.PerspectiveCamera(
60,
window.innerWidth/window.innerHeight,
0.1,
1000
);


const renderer = new THREE.WebGLRenderer({
antialias:true
});

renderer.setSize(
window.innerWidth,
window.innerHeight
);

document.body.appendChild(renderer.domElement);


// sol du hangar

const floor = new THREE.Mesh(
new THREE.PlaneGeometry(50,50),
new THREE.MeshStandardMaterial({
color:0x555555
})
);

floor.rotation.x=-Math.PI/2;
scene.add(floor);


// avion (premier prototype)

const body = new THREE.Mesh(
new THREE.CylinderGeometry(1,1,8,32),
new THREE.MeshStandardMaterial({
color:0xffffff
})
);

body.rotation.z=Math.PI/2;
body.position.y=2;

scene.add(body);


// ailes

const wings = new THREE.Mesh(
new THREE.BoxGeometry(6,0.1,1),
new THREE.MeshStandardMaterial({
color:0xffffff
})
);

wings.position.y=2;
scene.add(wings);


// lumière

const light = new THREE.DirectionalLight(
0xffffff,
3
);

light.position.set(5,10,5);
scene.add(light);


camera.position.set(
0,
5,
12
);


camera.lookAt(0,2,0);



function animate(){

requestAnimationFrame(animate);

body.rotation.x += 0.002;

renderer.render(
scene,
camera
);

}

animate();
