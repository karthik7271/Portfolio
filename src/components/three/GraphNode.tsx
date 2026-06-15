"use client";

import { useRef } from "react";
import { useFrame, type ThreeEvent } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import type { GraphNode as GraphNodeData } from "@/lib/data/graph";
import type { AccentColor } from "@/lib/data/skills";
import { accentHex } from "@/lib/accent";
import { cn } from "@/lib/utils";

export type NodeVisualState = "default" | "highlighted" | "dimmed";

const accentLabelClass: Record<AccentColor, string> = {
  lime: "border-lime/50 text-lime bg-lime/10",
  magenta: "border-magenta/50 text-magenta bg-magenta/10",
  cyan: "border-cyan/50 text-cyan bg-cyan/10",
  violet: "border-violet/50 text-violet bg-violet/10",
};

export function GraphNode({
  node,
  state,
  onHover,
}: {
  node: GraphNodeData;
  state: NodeVisualState;
  onHover: (id: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const color = accentHex[node.accent];
  const isCurrent = node.id === "glance-inmobi";

  useFrame(() => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!mesh || !material) return;

    const baseScale = state === "highlighted" ? 1.4 : 1;
    const pulse = isCurrent ? 1 + Math.sin(performance.now() * 0.0022) * 0.07 : 1;
    const target = baseScale * pulse;
    mesh.scale.setScalar(THREE.MathUtils.lerp(mesh.scale.x, target, 0.12));

    const targetOpacity = state === "dimmed" ? 0.18 : 1;
    material.opacity = THREE.MathUtils.lerp(material.opacity, targetOpacity, 0.12);

    const targetEmissive = state === "highlighted" ? 1.7 : 0.55;
    material.emissiveIntensity = THREE.MathUtils.lerp(material.emissiveIntensity, targetEmissive, 0.12);
  });

  const handlePointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(node.id);
    document.body.style.cursor = "pointer";
  };

  const handlePointerOut = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    onHover(null);
    document.body.style.cursor = "auto";
  };

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    document.querySelector(node.target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const showLabel = node.type === "project" || state === "highlighted";

  return (
    <group position={node.position}>
      <mesh ref={meshRef} onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} onClick={handleClick}>
        <sphereGeometry args={[node.size, 32, 32]} />
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          emissive={color}
          emissiveIntensity={0.55}
          transparent
          opacity={1}
          toneMapped={false}
        />
      </mesh>
      {showLabel && (
        <Html center distanceFactor={9} position={[0, node.size + 0.32, 0]} style={{ pointerEvents: "none" }}>
          <div
            className={cn(
              "whitespace-nowrap rounded-full border px-2.5 py-1 font-mono font-bold tracking-wider uppercase backdrop-blur-sm transition-opacity duration-200",
              accentLabelClass[node.accent],
              state === "dimmed" ? "opacity-0" : "opacity-100",
              node.type === "project" ? "text-[11px]" : "text-[9px]",
            )}
          >
            {node.label}
          </div>
        </Html>
      )}
    </group>
  );
}
