"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SmokeEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    const geometry = new THREE.PlaneGeometry(2, 2);

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;

        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
        }

        float noise(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          f = f * f * (3.0 - 2.0 * f);
          return mix(
            mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
            mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
            f.y
          );
        }

        float fbm(vec2 p) {
          float value = 0.0;
          float amplitude = 0.5;
          for (int i = 0; i < 5; i++) {
            value += amplitude * noise(p);
            p *= 2.0;
            amplitude *= 0.5;
          }
          return value;
        }

        void main() {
          vec2 uv = vUv;
          vec2 p = uv;
          p.x *= 1.25;
          p.y *= 0.82;
          p.x += uTime * 0.024;
          p.y -= uTime * 0.012;

          float smoke = fbm(p * 3.8);
          float detail = fbm(p * 8.0 + vec2(-uTime * 0.018, uTime * 0.01));
          smoke = mix(smoke, detail, 0.35);

          float mask = smoothstep(0.38, 0.68, smoke);
          float edgeFade =
            smoothstep(0.02, 0.18, uv.x) *
            smoothstep(0.98, 0.82, uv.x) *
            smoothstep(0.02, 0.15, uv.y) *
            smoothstep(0.98, 0.75, uv.y);

          float subjectClear = smoothstep(0.16, 0.48, distance(uv, vec2(0.5, 0.46)));
          mask *= edgeFade * subjectClear * 0.42;
          vec3 smokeColor = vec3(0.68, 0.74, 0.84);
          gl_FragColor = vec4(smokeColor, mask);
        }
      `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight, false);
    };

    let animationFrame = 0;
    const animate = (time: number) => {
      material.uniforms.uTime.value = time * 0.001;
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="smoke-effect" aria-hidden="true" />;
}
