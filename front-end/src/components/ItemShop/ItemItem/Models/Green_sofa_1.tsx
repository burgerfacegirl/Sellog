/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/green_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sofa: THREE.Mesh;
    Blanket: THREE.Mesh;
    Cushion004: THREE.Mesh;
    Cushion005: THREE.Mesh;
  };
  materials: {
    Beige: THREE.MeshStandardMaterial;
    Green: THREE.MeshStandardMaterial;
    Pillow: THREE.MeshStandardMaterial;
  };
};

export function Green_sofa_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/green_sofa_1.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Sofa.geometry}
        material={materials.Beige}
        position={[0.51, -0.01, 0.58]}
        rotation={[Math.PI, -0.67, Math.PI]}
        scale={[1.36, 1.36, 1.05]}
      >
        <mesh
          name="Blanket"
          geometry={nodes.Blanket.geometry}
          material={materials.Green}
          morphTargetDictionary={nodes.Blanket.morphTargetDictionary}
          morphTargetInfluences={nodes.Blanket.morphTargetInfluences}
          position={[-0.25, 1.74, 0]}
        />
      </mesh>
      <mesh
        geometry={nodes.Cushion004.geometry}
        material={materials.Pillow}
        position={[-0.41, 0.98, -0.27]}
        rotation={[-2.84, -1.17, 2.58]}
        scale={1.01}
      />
      <mesh
        geometry={nodes.Cushion005.geometry}
        material={materials.Pillow}
        position={[0.1, 0.98, 0.69]}
        rotation={[3.08, 0.31, 2.55]}
        scale={1.38}
      />
    </group>
  );
}

useGLTF.preload("/models/items/green_sofa_1.glb");
