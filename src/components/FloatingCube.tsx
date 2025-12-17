import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const FloatingCube = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Create different geometries for glitch effect
    const geometries = [
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.TetrahedronGeometry(2),
      new THREE.OctahedronGeometry(2),
      new THREE.IcosahedronGeometry(2),
      new THREE.DodecahedronGeometry(2),
    ];

    const material = new THREE.LineBasicMaterial({ 
      color: 0x000000,
      linewidth: 2,
      transparent: true,
      opacity: 0.7
    });

    // Start with cube (index 0)
    let currentGeometryIndex = 0;
    let edges = new THREE.EdgesGeometry(geometries[0]);
    const shape = new THREE.LineSegments(edges, material);
    scene.add(shape);

    camera.position.z = 12;

    // Floating animation variables
    let time = 0;
    const floatSpeed = 0.01;
    const floatAmplitude = 1;

    // Glitch effect variables
    let isGlitching = false;
    let glitchEndTime = 0;
    let glitchOffsetX = 0;
    let glitchOffsetY = 0;
    let glitchScale = 1;

    const triggerGlitch = () => {
      isGlitching = true;
      glitchEndTime = time + 0.05 + Math.random() * 0.1; // Glitch duration: 50-150ms
      glitchOffsetX = (Math.random() - 0.5) * 0.5;
      glitchOffsetY = (Math.random() - 0.5) * 0.5;
      glitchScale = 0.9 + Math.random() * 0.2;

      // Change geometry randomly
      const newIndex = Math.floor(Math.random() * geometries.length);
      if (newIndex !== currentGeometryIndex) {
        currentGeometryIndex = newIndex;
        edges.dispose();
        edges = new THREE.EdgesGeometry(geometries[currentGeometryIndex]);
        shape.geometry = edges;
      }
    };

    const resetGeometry = () => {
      // Reset to cube (index 0)
      if (currentGeometryIndex !== 0) {
        currentGeometryIndex = 0;
        edges.dispose();
        edges = new THREE.EdgesGeometry(geometries[0]);
        shape.geometry = edges;
      }
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Random glitch trigger (roughly every 2-5 seconds)
      if (!isGlitching && Math.random() < 0.003) {
        triggerGlitch();
      }

      // End glitch
      if (isGlitching && time > glitchEndTime) {
        isGlitching = false;
        glitchOffsetX = 0;
        glitchOffsetY = 0;
        glitchScale = 1;
        resetGeometry();
      }

      // Rotation
      shape.rotation.x += 0.0005;
      shape.rotation.y += 0.001;

      // Floating movement + glitch offset
      shape.position.x = Math.sin(time * floatSpeed) * floatAmplitude + glitchOffsetX;
      shape.position.y = Math.cos(time * floatSpeed * 0.7) * floatAmplitude * 0.5 + glitchOffsetY;

      // Glitch scale
      shape.scale.set(glitchScale, glitchScale, glitchScale);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      geometries.forEach(g => g.dispose());
      edges.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default FloatingCube;
