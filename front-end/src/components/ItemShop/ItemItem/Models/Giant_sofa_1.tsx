/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/giant_sofa_1.glb -t
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useRecoilState } from "recoil";
import { itemTargetState } from "@/recoil/myroom/atoms";
import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
    Plane002: THREE.Mesh;
    Plane003: THREE.Mesh;
    Plane004: THREE.Mesh;
    Plane005: THREE.Mesh;
    Plane006_1: THREE.Mesh;
    Plane006_2: THREE.Mesh;
    Circle001: THREE.Mesh;
    Circle003: THREE.Mesh;
    Circle005: THREE.Mesh;
  };
  materials: {
    Leather: THREE.MeshStandardMaterial;
    ["Leather Bright"]: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
  };
};

export function Giant_sofa_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/giant_sofa_1.glb"
  ) as GLTFResult;

  // 좌표 (서버에 저장된 좌표로 수정하기)
  const [position, setPosition] = useState({ x: 0, y: -2.5, z: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // 회전 유무 판단
  const [isRotation, setIsRotation] = useState(false);

  // 회전 정보 (서버에 저장된 좌표로 수정하기)
  const [rotation, setRotation] = useState(0);

  // 타겟 정보
  const [target, setTarget] = useRecoilState(itemTargetState);

  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();

  function intersect(pos: THREE.Vector2) {
    raycaster.setFromCamera(pos, camera);
    return raycaster.intersectObjects(scene.children);
  }

  useEffect(() => {
    if (props.activePage === "myitems") {
      gl.domElement.addEventListener("click", () => {
        if (isDragging) {
          setIsDragging(false);
        }
      });
    }

    // const handleWindowClick = (e: MouseEvent) => {
    //   if (isDragging) {
    //     setIsDragging(false);
    //   }
    // };
  }, [isDragging]);

  useFrame(({ mouse }) => {
    if (props.activePage === "myitems") {
      if (isDragging) {
        const found = intersect(mouse);

        if (found.length > 0) {
          for (let i = 0; i < found.length; i++) {
            if (!found[i].object.userData.ground) continue;

            // 물체가 마우스와 만난 지점으로 위치를 업데이트하기
            const newPosition = found[i].point;
            setPosition({ x: newPosition.x, y: -2.5, z: newPosition.z });
            break;
          }
        }
      }
    }
  });

  // 물체 회전
  if (
    props.rotationLeftButtonRef.current &&
    props.rotationRigthButtonRef.current
  ) {
    if (target === "Giant_sofa_1") {
      props.rotationLeftButtonRef.current.addEventListener("click", () => {
        setRotation((rotation - 10) % 360);
      });
      props.rotationRigthButtonRef.current.addEventListener("click", () => {
        setRotation((rotation + 10) % 360);
      });
    }
  }

  return (
    <group
      {...props}
      dispose={null}
      scale={0.7}
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Giant_sofa_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Giant_sofa_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials.Leather}
        scale={0.95}
      >
        <mesh
          geometry={nodes.Plane002.geometry}
          material={materials["Leather Bright"]}
        />
        <mesh
          geometry={nodes.Plane003.geometry}
          material={materials["Leather Bright"]}
        />
        <mesh geometry={nodes.Plane004.geometry} material={materials.Leather} />
        <mesh
          geometry={nodes.Plane005.geometry}
          material={materials["Leather Bright"]}
        />
        <mesh
          geometry={nodes.Circle001.geometry}
          material={materials.Metal}
          position={[-0.62, 1.15, 0]}
          scale={0.86}
        />
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials.Metal}
          position={[-0.12, 1.15, 0]}
          scale={0.86}
        />
        <mesh
          geometry={nodes.Circle005.geometry}
          material={materials.Metal}
          position={[-0.62, 1.33, -2.36]}
          scale={0.86}
        />
        <mesh
          geometry={nodes.Plane006_1.geometry}
          material={materials.Leather}
        />
        <mesh
          geometry={nodes.Plane006_2.geometry}
          material={materials.Leather}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/giant_sofa_1.glb");
