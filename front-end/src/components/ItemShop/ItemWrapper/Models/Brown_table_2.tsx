/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/brown_table_2.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table002: THREE.Mesh;
    Plane049: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

export function Brown_table_2(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/brown_table_2.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table002.geometry}
        material={materials.Wood}
        position={[0, 0, -0.02]}
        scale={[0.54, 1.25, 0.82]}
      >
        <mesh geometry={nodes.Plane049.geometry} material={materials.Metal} />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/brown_table_2.glb");