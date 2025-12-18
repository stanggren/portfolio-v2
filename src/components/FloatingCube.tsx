import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface FloatingCubeProps {
  delay?: number; // Delay before cube appears (ms)
  blurDuration?: number; // Duration of blur-in effect (ms)
  initialBlur?: number; // Initial blur amount (px)
}

const FloatingCube = ({ delay = 0, blurDuration = 800, initialBlur = 5 }: FloatingCubeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(initialBlur); // Start fully blurred
  const [glitchBlur, setGlitchBlur] = useState(0);

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
    shape.visible = false; // Hidden until delay passes
    scene.add(shape);

    camera.position.z = 12;

    // Floating animation variables
    const floatSpeed = 0.01;
    const floatAmplitude = 1;

    // Time tracking
    const startTime = performance.now();
    const delayMs = delay;

    // Visibility and entrance glitch
    let hasAppeared = false;
    let entranceGlitchCount = 0;
    const maxEntranceGlitches = 5; // Number of rapid glitches on entrance

    // Blur-in animation
    let blurStartTime = 0;

    // Glitch effect variables
    let isGlitching = false;
    let glitchEndTime = 0;
    let glitchOffsetX = 0;
    let glitchOffsetY = 0;
    let glitchScale = 1;
    let animTime = 0;

    const triggerGlitch = () => {
      isGlitching = true;
      glitchEndTime = animTime + 0.05 + Math.random() * 0.1; // Glitch duration: 50-150ms
      glitchOffsetX = (Math.random() - 0.5) * 0.5;
      glitchOffsetY = (Math.random() - 0.5) * 0.5;
      glitchScale = 0.9 + Math.random() * 0.2;

      // 40% chance to add blur during glitch
      if (Math.random() < 0.4) {
        setGlitchBlur(2 + Math.random() * 3); // Random blur 2-5px
      }

      // Change geometry randomly
      const newIndex = Math.floor(Math.random() * geometries.length);
      if (newIndex !== currentGeometryIndex) {
        currentGeometryIndex = newIndex;
        edges.dispose();
        edges = new THREE.EdgesGeometry(geometries[currentGeometryIndex]);
        shape.geometry = edges;
      }
    };

    const triggerEntranceGlitch = () => {
      isGlitching = true;
      glitchEndTime = animTime + 0.03 + Math.random() * 0.05; // Shorter glitches for entrance
      glitchOffsetX = (Math.random() - 0.5) * 1.5; // More extreme offset
      glitchOffsetY = (Math.random() - 0.5) * 1.5;
      glitchScale = 0.5 + Math.random() * 1.0; // More extreme scale

      // Change geometry randomly
      const newIndex = Math.floor(Math.random() * geometries.length);
      currentGeometryIndex = newIndex;
      edges.dispose();
      edges = new THREE.EdgesGeometry(geometries[currentGeometryIndex]);
      shape.geometry = edges;
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
      
      const elapsed = performance.now() - startTime;
      animTime += 0.01;

      // Check if delay has passed
      if (!hasAppeared) {
        if (elapsed >= delayMs) {
          hasAppeared = true;
          shape.visible = true;
          blurStartTime = performance.now();
          triggerEntranceGlitch();
          entranceGlitchCount = 1;
        } else {
          renderer.render(scene, camera);
          return;
        }
      }

      // Animate blur-in effect
      if (blurStartTime > 0) {
        const blurElapsed = performance.now() - blurStartTime;
        const blurProgress = Math.min(blurElapsed / blurDuration, 1);
        const newBlur = Math.max(0, initialBlur * (1 - blurProgress));
        setBlurAmount(newBlur);
        if (blurProgress >= 1) {
          blurStartTime = 0; // Stop updating blur
        }
      }

      // Entrance glitch sequence
      if (entranceGlitchCount > 0 && entranceGlitchCount < maxEntranceGlitches && !isGlitching) {
        triggerEntranceGlitch();
        entranceGlitchCount++;
      }

      // Random glitch trigger (roughly every 2-5 seconds)
      if (!isGlitching && entranceGlitchCount >= maxEntranceGlitches && Math.random() < 0.003) {
        triggerGlitch();
      }

      // End glitch
      if (isGlitching && animTime > glitchEndTime) {
        isGlitching = false;
        glitchOffsetX = 0;
        glitchOffsetY = 0;
        glitchScale = 1;
        setGlitchBlur(0); // Clear glitch blur
        if (entranceGlitchCount >= maxEntranceGlitches) {
          resetGeometry();
        }
      }

      // Rotation
      shape.rotation.x += 0.0005;
      shape.rotation.y += 0.001;

      // Floating movement + glitch offset
      shape.position.x = Math.sin(animTime * floatSpeed) * floatAmplitude + glitchOffsetX;
      shape.position.y = Math.cos(animTime * floatSpeed * 0.7) * floatAmplitude * 0.5 + glitchOffsetY;

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
  }, [delay, blurDuration, initialBlur]);

  const totalBlur = blurAmount + glitchBlur;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 1,
        filter: totalBlur > 0 ? `blur(${totalBlur}px)` : 'none',
        transition: glitchBlur > 0 ? 'none' : 'filter 0.1s ease-out',
      }}
    />
  );
};

export default FloatingCube;
