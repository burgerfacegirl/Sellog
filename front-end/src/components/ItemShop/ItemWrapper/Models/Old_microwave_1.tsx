/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/old_microwave_1.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    TV: THREE.Mesh
    Circle002: THREE.Mesh
    Circle003: THREE.Mesh
    Plane018: THREE.Mesh
    Plane020_1: THREE.Mesh
    Plane021: THREE.Mesh
    Plane022: THREE.Mesh
  }
  materials: {
    ['Painted Metal.001']: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    Silver: THREE.MeshStandardMaterial
    ['Black Gloss']: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/old_microwave_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.TV.geometry} material={materials['Painted Metal.001']} position={[0.01, 2.12, 0]}>
        <mesh geometry={nodes.Circle002.geometry} material={materials.Black} position={[0.47, 0.75, -0.49]} />
        <mesh geometry={nodes.Circle003.geometry} material={materials.Black} position={[0.47, 0.51, -0.49]} />
        <mesh geometry={nodes.Plane018.geometry} material={materials.Black} />
        <mesh geometry={nodes.Plane020_1.geometry} material={materials.Black} position={[0.47, 0.25, -0.49]} />
        <mesh geometry={nodes.Plane021.geometry} material={materials.Silver} />
        <mesh geometry={nodes.Plane022.geometry} material={materials['Black Gloss']} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/old_microwave_1.glb')
