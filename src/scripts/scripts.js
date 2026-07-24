import * as THREE from "three";

const container = document.getElementById("three-shapes-scene");

if (container) {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 100);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x74d67a, wireframe: true });

    const softGreenMaterial = new THREE.MeshBasicMaterial({ color: 0xa6f3aa, wireframe: true });

const shapes = [
    {
        mesh: new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), greenMaterial ),
        xPercent: 0.18,
        yPercent: 0.72,
        rotationSpeed: [0.008, 0.012, 0.004]
    },

    {
        mesh: new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.85, 14), softGreenMaterial),
        xPercent: 0.50,
        yPercent: 0.72,
        rotationSpeed: [0.007, 0.012, 0.006]
    },

    {
        mesh: new THREE.Mesh(new THREE.SphereGeometry(0.48, 18, 12), greenMaterial),
        xPercent: 0.82,
        yPercent: 0.72,
        rotationSpeed: [0.005, 0.01, 0.007]
    },

    {
        mesh: new THREE.Mesh(new THREE.ConeGeometry(0.58, 0.9, 4), softGreenMaterial),
        xPercent: 0.18,
        yPercent: 0.28,
        rotationSpeed: [0.01, 0.006, 0.004]
    },

    {
        mesh: new THREE.Mesh(new THREE.BoxGeometry(0.95, 0.42, 0.58), greenMaterial),
        xPercent: 0.50,
        yPercent: 0.28,
        rotationSpeed: [0.01, 0.006, 0.012]
    },

    {
        mesh: new THREE.Mesh(new THREE.CylinderGeometry(0.38, 0.38, 0.9, 16), softGreenMaterial),
        xPercent: 0.82,
        yPercent: 0.28,
        rotationSpeed: [0.007, 0.005, 0.01]
    }
];

    shapes.forEach((shape) => {
        scene.add(shape.mesh);
    });

    const pointsGeometry = new THREE.BufferGeometry();
    const pointPercents = [];
    const points = [];

    for (let i = 0; i < 2000; i++) {
        const xPercent = Math.random();
        const yPercent = Math.random();
        const z = (Math.random() - 0.5) * 2;

        pointPercents.push(xPercent, yPercent, z);
        points.push(0, 0, z);
    }

    pointsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(points, 3));

    const pointsMaterial = new THREE.PointsMaterial({color: 0x74d67a, size: 0.022, transparent: true, opacity: 0.55});

    const particles = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(particles);

    function percentToWorldX(percent, worldWidth) {
        return -worldWidth / 2 + worldWidth * percent;
    }

    function percentToWorldY(percent, worldHeight) {
        return -worldHeight / 2 + worldHeight * percent;
    }

    function updateSceneLayout() {
        const width = container.clientWidth;
        const height = container.clientHeight;

        renderer.setSize(width, height, false);

        const worldHeight = 4;
        const worldWidth = worldHeight * (width / height);

        camera.left = -worldWidth / 2;
        camera.right = worldWidth / 2;
        camera.top = worldHeight / 2;
        camera.bottom = -worldHeight / 2;
        camera.updateProjectionMatrix();

        const scaleByWidth = worldWidth / 8;
        const scaleByHeight = worldHeight / 4;

        const finalScale = THREE.MathUtils.clamp(Math.min(scaleByWidth, scaleByHeight), 0.35, 1.15);

        shapes.forEach((shape) => {
            const x = percentToWorldX(shape.xPercent, worldWidth);
            const y = percentToWorldY(shape.yPercent, worldHeight);

            shape.mesh.position.set(x, y, 0);
            shape.mesh.scale.set(finalScale, finalScale, finalScale);
        });

        const positions = particles.geometry.attributes.position.array;

        for (let i = 0; i < positions.length; i += 1) {
            const xPercent = pointPercents[i];
            const yPercent = pointPercents[i + 1];
            const z = pointPercents[i + 2];

            positions[i] = percentToWorldX(xPercent, worldWidth);
            positions[i + 1] = percentToWorldY(yPercent, worldHeight);
            positions[i + 2] = z;
        }

        particles.geometry.attributes.position.needsUpdate = true;
    }

    window.addEventListener("resize", updateSceneLayout);
    updateSceneLayout();

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