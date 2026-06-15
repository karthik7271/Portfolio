"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { GraphScene } from "./GraphScene";

export default function NodeGraphCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 11], fov: 42 }} dpr={[1, 1.5]} gl={{ antialias: true }}>
      <color attach="background" args={["#06060c"]} />
      <ambientLight intensity={0.6} />
      <pointLight position={[6, 6, 8]} intensity={80} color="#ffffff" />
      <pointLight position={[-7, -5, -3]} intensity={50} color="#3ce6ff" />
      <pointLight position={[0, 0, 6]} intensity={30} color="#ff3ec8" />

      <Sparkles count={70} scale={13} size={1.5} speed={0.15} opacity={0.35} color="#ffffff" />

      <GraphScene />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 2.6}
        maxPolarAngle={Math.PI / 1.6}
      />

      <EffectComposer multisampling={0}>
        <Bloom intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.4} mipmapBlur radius={0.65} />
      </EffectComposer>
    </Canvas>
  );
}
