/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/low_table_1.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Stereo_Table: THREE.Mesh
    Stereo_Table_Legs: THREE.Mesh
  }
  materials: {
    ['Wood Dark']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/low_table_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Stereo_Table.geometry} material={materials['Wood Dark']} position={[-0.01, 0, -0.38]}>
        <mesh geometry={nodes.Stereo_Table_Legs.geometry} material={materials['Wood Dark']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/low_table_1.glb')
