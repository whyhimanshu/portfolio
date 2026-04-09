import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated particle field with floating geometric shapes.
 * Uses a blue / white palette on a transparent background.
 *
 * Props
 * ─────
 * variant  : "hero" | "subtle"  (default "hero")
 *            hero   → large shapes, fast particles
 *            subtle → tiny dots, slow rotation
 */
export default function ThreeScene({ variant = "hero" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // ── Renderer ───────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ── Scene & Camera ─────────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = variant === "hero" ? 30 : 40;

    // ── Lights ─────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0x93c5fd, 0.8);
    scene.add(ambient);
    const pointLight = new THREE.PointLight(0x3b82f6, 3, 120);
    pointLight.position.set(10, 10, 20);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x60a5fa, 2.5, 100);
    pointLight2.position.set(-15, -10, 15);
    scene.add(pointLight2);

    // ── Particles ──────────────────────────────────────────────
    const particleCount = variant === "hero" ? 600 : 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const spread = variant === "hero" ? 60 : 80;

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * spread;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: variant === "hero" ? 0.15 : 0.08,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ── Floating shapes (hero only) ────────────────────────────
    const shapes = [];
    if (variant === "hero") {
      const blueMat = new THREE.MeshPhongMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.55,
        wireframe: true,
      });
      const whiteMat = new THREE.MeshPhongMaterial({
        color: 0xdbeafe,
        transparent: true,
        opacity: 0.40,
        wireframe: true,
      });

      // Random positions with minimum distance to prevent overlapping
      const geos = [
        new THREE.IcosahedronGeometry(2.5, 1),
        new THREE.OctahedronGeometry(2, 0),
        new THREE.TorusGeometry(2, 0.5, 8, 20),
        new THREE.TetrahedronGeometry(1.8, 0),
        new THREE.DodecahedronGeometry(1.6, 0),
      ];

      const placedPositions = [];
      const minDist = 10; // minimum distance between any two shapes

      const getSpacedPosition = () => {
        for (let attempt = 0; attempt < 50; attempt++) {
          const x = (Math.random() - 0.5) * 34;
          const y = (Math.random() - 0.5) * 22;
          const z = (Math.random() - 0.5) * 12;
          const tooClose = placedPositions.some(
            (p) => Math.hypot(x - p[0], y - p[1], z - p[2]) < minDist
          );
          if (!tooClose) return [x, y, z];
        }
        // fallback: still return a random position
        return [(Math.random() - 0.5) * 34, (Math.random() - 0.5) * 22, (Math.random() - 0.5) * 12];
      };

      geos.forEach((geo, i) => {
        const pos = getSpacedPosition();
        placedPositions.push(pos);
        const mesh = new THREE.Mesh(geo, i % 2 === 0 ? blueMat : whiteMat);
        mesh.position.set(pos[0], pos[1], pos[2]);
        mesh.userData = {
          rotSpeed: 0.002 + Math.random() * 0.005,
          floatSpeed: 0.3 + Math.random() * 0.5,
          floatAmp: 0.5 + Math.random() * 1,
          startY: pos[1],
        };
        scene.add(mesh);
        shapes.push(mesh);
      });
    }

    // ── Connection lines (hero) ────────────────────────────────
    let lineMesh = null;
    if (variant === "hero") {
      const lineGeo = new THREE.BufferGeometry();
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x3b82f6,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending,
      });
      lineMesh = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lineMesh);
    }

    // ── Mouse interactivity ────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const onMouseMove = (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ── Animation loop ─────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Rotate particles
      particles.rotation.y = elapsed * (variant === "hero" ? 0.05 : 0.02);
      particles.rotation.x = elapsed * 0.015;

      // Mouse parallax on camera
      camera.position.x += (mouse.x * 3 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Animate shapes
      shapes.forEach((s) => {
        s.rotation.x += s.userData.rotSpeed;
        s.rotation.y += s.userData.rotSpeed * 1.3;
        s.position.y =
          s.userData.startY +
          Math.sin(elapsed * s.userData.floatSpeed) * s.userData.floatAmp;
      });

      // Update connection lines between nearby particles
      if (lineMesh && variant === "hero") {
        const posArr = particleGeo.attributes.position.array;
        const linePositions = [];
        const threshold = 8;
        // sample a subset to avoid perf issues
        for (let i = 0; i < Math.min(particleCount, 120); i++) {
          const ix = i * 3;
          for (let j = i + 1; j < Math.min(particleCount, 120); j++) {
            const jx = j * 3;
            const dx = posArr[ix] - posArr[jx];
            const dy = posArr[ix + 1] - posArr[jx + 1];
            const dz = posArr[ix + 2] - posArr[jx + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
            if (dist < threshold) {
              linePositions.push(posArr[ix], posArr[ix + 1], posArr[ix + 2]);
              linePositions.push(posArr[jx], posArr[jx + 1], posArr[jx + 2]);
            }
          }
        }
        lineMesh.geometry.dispose();
        const newGeo = new THREE.BufferGeometry();
        newGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(linePositions, 3)
        );
        lineMesh.geometry = newGeo;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ── Resize ─────────────────────────────────────────────────
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    // ── Cleanup ────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant]);

  return (
    <div
      ref={mountRef}
      className="three-canvas"
      aria-hidden="true"
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}
