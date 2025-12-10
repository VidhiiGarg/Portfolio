import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function NeonTorus() {
  return (
    <Float speed={2.2} rotationIntensity={1.1} floatIntensity={1.6}>
      <mesh castShadow receiveShadow>
        <torusKnotGeometry args={[1, 0.32, 256, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          metalness={0.8}
          roughness={0.15}
          emissive="#22d3ee"
          emissiveIntensity={1.4}
        />
      </mesh>
      <mesh position={[1.7, -0.4, 0.6]}>
        <sphereGeometry args={[0.26, 32, 32]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1.8}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[-1.8, 0.6, -0.4]}>
        <octahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1.5}
          metalness={0.75}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        intensity={2}
        position={[4, 6, 3]}
        castShadow
        color="#e0f2fe"
      />
      <pointLight intensity={1.4} position={[-4, -2, -2]} color="#22c55e" />
      <pointLight intensity={1.3} position={[4, 0, -4]} color="#a855f7" />
    </>
  );
}

export function HeroScene() {
  return (
    <Canvas
      className="r3f-canvas"
      camera={{ position: [3, 1.8, 4.5], fov: 45 }}
      shadows
    >
      <color attach="background" args={["#020617"]} />
      <Suspense fallback={null}>
        <SceneLights />
        <NeonTorus />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.1}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
}
