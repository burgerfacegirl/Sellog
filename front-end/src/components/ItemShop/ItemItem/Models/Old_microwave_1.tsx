/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/old_microwave_1.glb -t
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
    TV: THREE.Mesh;
    Circle002: THREE.Mesh;
    Circle003: THREE.Mesh;
    Plane018: THREE.Mesh;
    Plane020_1: THREE.Mesh;
    Plane021: THREE.Mesh;
    Plane022: THREE.Mesh;
  };
  materials: {
    ["Painted Metal.001"]: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
    Silver: THREE.MeshStandardMaterial;
    ["Black Gloss"]: THREE.MeshStandardMaterial;
  };
};

export function Old_microwave_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/old_microwave_1.glb"
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
    if (target === "Old_microwave_1") {
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
      scale={0.8}
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Old_microwave_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Old_microwave_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh
        geometry={nodes.TV.geometry}
        material={materials["Painted Metal.001"]}
      >
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials.Black}
          position={[0.47, 0.75, -0.49]}
        />
        <mesh
          geometry={nodes.Circle003.geometry}
          material={materials.Black}
          position={[0.47, 0.51, -0.49]}
        />
        <mesh geometry={nodes.Plane018.geometry} material={materials.Black} />
        <mesh
          geometry={nodes.Plane020_1.geometry}
          material={materials.Black}
          position={[0.47, 0.25, -0.49]}
        />
        <mesh geometry={nodes.Plane021.geometry} material={materials.Silver} />
        <mesh
          geometry={nodes.Plane022.geometry}
          material={materials["Black Gloss"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/old_microwave_1.glb");
