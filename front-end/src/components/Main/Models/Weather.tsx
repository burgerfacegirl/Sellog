/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/weather.glb -t
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Roundcube008: THREE.Mesh;
    Roundcube009: THREE.Mesh;
    Roundcube010: THREE.Mesh;
    Roundcube011: THREE.Mesh;
    Roundcube012: THREE.Mesh;
    Roundcube002: THREE.Mesh;
    Roundcube003: THREE.Mesh;
    Roundcube001: THREE.Mesh;
    Roundcube004: THREE.Mesh;
    Roundcube005: THREE.Mesh;
    Roundcube006: THREE.Mesh;
    Roundcube007: THREE.Mesh;
    Curve: THREE.Mesh;
  };
  materials: {
    ["Material.004"]: THREE.MeshPhysicalMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

type ActionName =
  | "Roundcube.002Action.001"
  | "Roundcube.003Action.003"
  | "Roundcube.003Action.004"
  | "Roundcube.003Action.005"
  | "Roundcube.003Action.006"
  | "Roundcube.003Action.007"
  | "Roundcube.003Action.002"
  | "Roundcube.010Action.001"
  | "Roundcube.010Action.002"
  | "Roundcube.010Action"
  | "Roundcube.010Action.003"
  | "Roundcube.010Action.004"
  | "CurveAction";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Weather(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group | any>();
  const { nodes, materials, animations } = useGLTF(
    "/models/weather.glb"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions | any>(animations, group);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Area"
          position={[0, 3.23, 0.79]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <group
          name="Area001"
          position={[0.54, -3.36, 1.32]}
          rotation={[1.41, 0.16, 3.14]}
        />

        <mesh
          name="Roundcube002"
          geometry={nodes.Roundcube002.geometry}
          material={materials["Material.003"]}
          position={[-0.66, 0.45, -1.45]}
          rotation={[0, 0, Math.PI / 2]}
          scale={0.56}
        >
          <group name="Empty" rotation={[0, 0, -Math.PI / 6]} scale={1.77}>
            <mesh
              name="Roundcube003"
              geometry={nodes.Roundcube003.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              scale={0.14}
            />
          </group>
          <group name="Empty001" scale={1.77}>
            <mesh
              name="Roundcube001"
              geometry={nodes.Roundcube001.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              scale={0.14}
            />
          </group>
          <group name="Empty002" rotation={[0, 0, Math.PI / 6]} scale={1.77}>
            <mesh
              name="Roundcube004"
              geometry={nodes.Roundcube004.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              rotation={[0, 0, Math.PI / 6]}
              scale={0.14}
            />
          </group>
          <group name="Empty003" rotation={[0, 0, Math.PI / 3]} scale={1.77}>
            <mesh
              name="Roundcube005"
              geometry={nodes.Roundcube005.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              rotation={[0, 0, Math.PI / 3]}
              scale={0.14}
            />
          </group>
          <group name="Empty004" rotation={[0, 0, Math.PI / 2]} scale={1.77}>
            <mesh
              name="Roundcube006"
              geometry={nodes.Roundcube006.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              rotation={[0, 0, Math.PI / 2]}
              scale={0.14}
            />
          </group>
          <group name="Empty005" rotation={[0, 0, 2.09]} scale={1.77}>
            <mesh
              name="Roundcube007"
              geometry={nodes.Roundcube007.geometry}
              material={materials["Material.003"]}
              position={[0, 0.28, -0.34]}
              rotation={[0, 0, 2.09]}
              scale={0.14}
            />
          </group>
        </mesh>
        <mesh
          name="Curve"
          geometry={nodes.Curve.geometry}
          material={materials["Material.002"]}
          rotation={[Math.PI / 2, -0.02, 0]}
          scale={0.95}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/weather.glb");
