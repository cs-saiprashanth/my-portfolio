"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function makeFeather(material: THREE.Material, length: number, width: number) {
  const feather = new THREE.Mesh(
    new THREE.ConeGeometry(width, length, 5),
    material
  );
  feather.rotation.z = Math.PI / 2;
  feather.rotation.y = Math.PI / 2;
  return feather;
}

function createEagle() {
  const eagle = new THREE.Group();
  const darkMaterial = new THREE.MeshStandardMaterial({
    color: 0x171d27,
    roughness: 0.72,
    metalness: 0.12,
  });
  const featherMaterial = new THREE.MeshStandardMaterial({
    color: 0x2e3a4c,
    roughness: 0.82,
    metalness: 0.08,
  });
  const lightMaterial = new THREE.MeshStandardMaterial({
    color: 0x8fa1b8,
    roughness: 0.58,
    metalness: 0.08,
  });
  const beakMaterial = new THREE.MeshStandardMaterial({
    color: 0xd5a84d,
    roughness: 0.46,
    metalness: 0.12,
  });

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), darkMaterial);
  body.scale.set(1.45, 0.78, 0.8);
  body.rotation.z = -0.18;
  eagle.add(body);

  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.3, 14, 10), lightMaterial);
  chest.position.set(0.27, -0.01, 0.12);
  chest.scale.set(0.82, 1.15, 0.72);
  eagle.add(chest);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.27, 16, 12), lightMaterial);
  head.position.set(0.52, 0.22, 0.03);
  head.scale.set(1.12, 1.08, 0.95);
  eagle.add(head);

  const brow = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), darkMaterial);
  brow.position.set(0.68, 0.27, 0.22);
  eagle.add(brow);

  const eye = new THREE.Mesh(
    new THREE.SphereGeometry(0.025, 8, 6),
    new THREE.MeshBasicMaterial({ color: 0xffd56a })
  );
  eye.position.set(0.72, 0.22, 0.23);
  eagle.add(eye);

  const beak = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.28, 5), beakMaterial);
  beak.position.set(0.83, 0.16, 0.03);
  beak.rotation.z = -Math.PI / 2;
  beak.rotation.y = Math.PI / 2;
  eagle.add(beak);

  const tail = new THREE.Group();
  tail.position.set(-0.58, -0.08, 0);
  for (let index = -2; index <= 2; index += 1) {
    const feather = makeFeather(lightMaterial, 0.58, 0.11);
    feather.position.set(-0.16, index * 0.08, index * 0.05);
    feather.rotation.z = Math.PI / 2 + index * 0.08;
    tail.add(feather);
  }
  eagle.add(tail);

  const wings: THREE.Group[] = [];
  for (const side of [-1, 1]) {
    const wing = new THREE.Group();
    wing.position.set(-0.08, 0.18, side * 0.22);
    wing.rotation.x = side * 0.12;
    wing.rotation.z = side * 0.32;

    for (let index = 0; index < 7; index += 1) {
      const feather = makeFeather(featherMaterial, 0.78 - index * 0.045, 0.13);
      feather.position.set(-0.22 - index * 0.08, 0.05 - index * 0.055, side * (0.05 + index * 0.035));
      feather.rotation.z = Math.PI / 2 + side * (0.18 + index * 0.04);
      feather.rotation.y = side * 0.16;
      wing.add(feather);
    }
    eagle.add(wing);
    wings.push(wing);
  }

  const feathers = new THREE.Group();
  const featherMaterialGlow = new THREE.MeshBasicMaterial({
    color: 0x9ec8f5,
    transparent: true,
    opacity: 0.7,
  });
  for (let index = 0; index < 9; index += 1) {
    const feather = makeFeather(featherMaterialGlow, 0.15 + (index % 3) * 0.04, 0.025);
    feather.position.set(-0.75 + (index % 3) * 0.12, 0.08 - Math.floor(index / 3) * 0.1, (index % 2 ? 1 : -1) * 0.35);
    feather.rotation.z = Math.PI / 2 + (index % 2 ? 0.2 : -0.2);
    feathers.add(feather);
  }
  eagle.add(feathers);

  eagle.userData.wings = wings;
  eagle.userData.feathers = feathers;
  return eagle;
}

export default function EagleScrollGuide() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 0, 4.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(180, 140, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xc9e4ff, 0x10131c, 2.1));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(2, 3, 4);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0x4bb9ff, 2.2, 5);
    rimLight.position.set(-2, 0, 2);
    scene.add(rimLight);

    const eagle = createEagle();
    eagle.rotation.y = 0.28;
    scene.add(eagle);

    let targetX = 0;
    let targetY = -0.1;
    let currentX = 0;
    let currentY = -0.1;
    let idleUntil = 0;

    const updateTarget = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2.45;
      targetY = -(event.clientY / window.innerHeight - 0.5) * 1.65;
      idleUntil = performance.now() + 240;
    };

    const resize = () => {
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("mousemove", updateTarget, { passive: true });
    window.addEventListener("resize", resize);

    let animationFrame = 0;
    const animate = (time: number) => {
      currentX = THREE.MathUtils.lerp(currentX, targetX, 0.075);
      currentY = THREE.MathUtils.lerp(currentY, targetY, 0.075);
      const flying = time < idleUntil;
      const wingBeat = flying ? Math.sin(time * 0.014) * 0.36 : Math.sin(time * 0.004) * 0.1;
      const wings = eagle.userData.wings as THREE.Group[];
      wings[0].rotation.y = -0.24 - wingBeat;
      wings[1].rotation.y = 0.24 + wingBeat;

      eagle.position.x = currentX;
      eagle.position.y = currentY;
      eagle.rotation.z = THREE.MathUtils.lerp(eagle.rotation.z, (targetY - currentY) * 0.18, 0.08);
      eagle.rotation.y = THREE.MathUtils.lerp(eagle.rotation.y, flying ? (targetX - currentX) * 0.16 : 0.18, 0.06);
      eagle.rotation.x = Math.sin(time * 0.002) * 0.025;
      mount.style.left = `${50 + (currentX / 2.45) * 100}%`;
      mount.style.top = `${50 - (currentY / 1.65) * 100}%`;
      mount.style.bottom = "auto";

      const featherGroup = eagle.userData.feathers as THREE.Group;
      featherGroup.rotation.y = Math.sin(time * 0.006) * 0.08;
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", updateTarget);
      window.removeEventListener("resize", resize);
      eagle.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) object.material.forEach((material) => material.dispose());
          else object.material.dispose();
        }
      });
      renderer.dispose();
      if (renderer.domElement.parentElement === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed bottom-8 left-1/2 z-40 h-[140px] w-[180px] -translate-x-1/2 opacity-90 transition-opacity duration-500"
    />
  );
}
