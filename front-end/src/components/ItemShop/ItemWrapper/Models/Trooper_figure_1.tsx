/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/trooper_figure_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Figure002: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle007: THREE.Mesh;
    Circle008: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle010: THREE.Mesh;
    Circle011: THREE.Mesh;
    Circle013: THREE.Mesh;
    Circle014: THREE.Mesh;
    Circle015: THREE.Mesh;
    Circle017_1: THREE.Mesh;
    Circle018: THREE.Mesh;
    Circle020: THREE.Mesh;
    Circle020_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
    ["white.001"]: THREE.MeshStandardMaterial;
    ["black.004"]: THREE.MeshStandardMaterial;
  };
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/trooper_figure_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Figure002.geometry}
        material={materials["default"]}
        position={[-3.67, 1.99, 3.28]}
      >
        <mesh
          geometry={nodes.Circle016.geometry}
          material={materials["white.001"]}
          position={[0, 0.04, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.37}
        >
          <mesh
            geometry={nodes.Circle007.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle008.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle010.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle011.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle013.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle014.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle015.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle017_1.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle018.geometry}
            material={materials["black.004"]}
          />
          <group position={[0, 3.26, 0]}>
            <mesh
              geometry={nodes.Circle020.geometry}
              material={materials["white.001"]}
            />
            <mesh
              geometry={nodes.Circle020_1.geometry}
              material={materials["black.004"]}
            />
          </group>
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials["black.004"]}
            position={[-0.92, 1.66, 0.4]}
            rotation={[2.83, -0.05, 1.91]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/trooper_figure_1.glb");