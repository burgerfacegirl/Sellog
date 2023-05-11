/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/white_controller_1.glb -t
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane022: THREE.Mesh
    Circle035: THREE.Mesh
    Circle036: THREE.Mesh
    Circle037: THREE.Mesh
    Circle038: THREE.Mesh
    Circle040: THREE.Mesh
    Circle041: THREE.Mesh
    Circle042: THREE.Mesh
    Circle043: THREE.Mesh
    Circle039: THREE.Mesh
    Plane023: THREE.Mesh
    Plane024: THREE.Mesh
  }
  materials: {
    Black: THREE.MeshStandardMaterial
    ['Black.002']: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Grey: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/white_controller_1.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane022.geometry} material={nodes.Plane022.material} position={[-0.04, 0.96, 0]} rotation={[-0.07, 0.72, 0.18]} scale={1.48}>
        <mesh geometry={nodes.Circle035.geometry} material={materials.Black} position={[-0.01, 0.13, 0.11]} rotation={[-1.53, 1.51, 1.61]} scale={1.17} />
        <mesh geometry={nodes.Circle036.geometry} material={materials.Black} position={[0.08, 0.12, -0.07]} rotation={[1.6, 1.31, -1.62]} scale={1.17} />
        <mesh geometry={nodes.Circle037.geometry} material={materials.Black} position={[0.08, 0.12, 0.07]} rotation={[1.58, 1.31, -1.56]} />
        <mesh geometry={nodes.Circle038.geometry} material={materials['Black.002']} position={[-0.06, 0.12, 0]} rotation={[0, 0, 0.28]} scale={0.75} />
        <mesh geometry={nodes.Circle040.geometry} material={materials['Black.002']} position={[-0.01, 0.13, -0.08]} rotation={[0, 0, 0.06]} scale={0.45} />
        <mesh geometry={nodes.Circle041.geometry} material={materials['Black.002']} position={[-0.01, 0.13, -0.15]} rotation={[-0.14, 0, 0.04]} scale={0.45} />
        <mesh geometry={nodes.Circle042.geometry} material={materials['Black.002']} position={[0.02, 0.13, -0.11]} rotation={[-0.01, 0, -0.09]} scale={0.45} />
        <mesh geometry={nodes.Circle043.geometry} material={materials['Black.002']} position={[-0.03, 0.13, -0.11]} rotation={[-0.01, 0, 0.17]} scale={0.45} />
        <mesh geometry={nodes.Circle039.geometry} material={materials.White} position={[0, 0.14, 0.03]} scale={0.35} />
        <mesh geometry={nodes.Plane023.geometry} material={materials.White} position={[0.03, 0.13, 0]} rotation={[1.57, 1.5, -1.57]} scale={0.91} />
        <mesh geometry={nodes.Plane024.geometry} material={materials.Grey} />
      </mesh>
    </group>
  )
}

useGLTF.preload('/white_controller_1.glb')
