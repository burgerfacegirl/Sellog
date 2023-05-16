/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/brown_table_4.glb -t
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Table: THREE.Mesh;
    Vert: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
  };
};

export function Brown_table_4(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/models/items/brown_table_4.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Table.geometry}
        material={materials.Wood}
        scale={1.3}
        position={[0, -2, 0]}
        rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
      >
        <directionalLight
          color={"#ffffff"}
          intensity={1}
          position={[2, 6, 3]}
          castShadow={true}
          shadow-camera-far={20}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-normalBias={0.05}
        />
        <mesh
          geometry={nodes.Vert.geometry}
          material={materials.Wood}
          scale={1.07}
        />
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/brown_table_4.glb");