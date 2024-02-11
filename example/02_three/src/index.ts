import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);
function makeSphere(rad: number = 1, wireframe: boolean, color: number) {
    const geometry = new THREE.SphereGeometry(rad, 32, 32);
    const material = new THREE.MeshBasicMaterial(
        {
            color: color,
            wireframe: wireframe
        });
    const sphere = new THREE.Mesh(geometry, material);
   
    return sphere;
}


const s1 = makeSphere(1,true,0xffffff);
const s2 = makeSphere(.99,false,0x000000);
scene.add(s1);
scene.add(s2);

camera.position.z = 5;


function animate() {
    requestAnimationFrame(animate);
    s1.rotation.x += 0.001;
    s1.rotation.y += 0.01;   
    s2.rotation.x += 0.001;
    s2.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();