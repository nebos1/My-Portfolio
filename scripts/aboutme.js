import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

const container = document.getElementById("three-shapes-scene");

if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 10));
    container.appendChild(renderer.domElement);

    const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x74d67a, wireframe: true }); // half

    const softGreenMaterial = new THREE.MeshBasicMaterial({ color: 0xa6f3aa, wireframe: true }); // other half

    const shapes = [
        {
            mesh: new THREE.Mesh(new THREE.ConeGeometry(0.44, 0.85, 4), greenMaterial),
            position: [-4, 1, 0],
            rotationSpeed: [0.01, 0.001, 0.001]
        },
        {
            mesh: new THREE.Mesh(new THREE.BoxGeometry(0.68, 0.68, 0.68), softGreenMaterial),
            position: [0, 1, 0],
            rotationSpeed: [0.006, 0.013, 0.004]
        },
        {
            mesh: new THREE.Mesh(new THREE.SphereGeometry(0.44, 18, 12), greenMaterial),
            position: [4, 1, 0],
            rotationSpeed: [0.004, 0.011, 0.009]
        },
        {
            mesh: new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.42, 0.58), softGreenMaterial),
            position: [-4, -1, 0],
            rotationSpeed: [0.01, 0.006, 0.012]
        },
        {
            mesh: new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.85, 12), greenMaterial),
            position: [0, -1, 0],
            rotationSpeed: [0.007, 0.012, 0.006]
        },
        {
            mesh: new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.8), softGreenMaterial),
            position: [4, -1, 0],
            rotationSpeed: [0.011, 0.005, 0.01]
        }
    ];

    shapes.forEach((shape) => {
        shape.mesh.position.set(...shape.position);
        scene.add(shape.mesh);
    });

    const pointsGeometry = new THREE.BufferGeometry();
    const points = [];

    for (let i = 0; i < 1500; i++) {
        points.push( (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10 ); // x,y,z
    }

    pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

    const pointsMaterial = new THREE.PointsMaterial({ color: 0x74d67a, size: 0.018, transparent: true, opacity: 0.55 });

    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(particles);

    function resizeRenderer() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    window.addEventListener("resize", resizeRenderer);
    resizeRenderer();

    function animate() {
        requestAnimationFrame(animate);

        shapes.forEach((shape) => {
            shape.mesh.rotation.x += shape.rotationSpeed[0];
            shape.mesh.rotation.y += shape.rotationSpeed[1];
            shape.mesh.rotation.z += shape.rotationSpeed[2];
        });

        renderer.render(scene, camera);
    }

    animate();
}