/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/old_computer_1.glb -t
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
    Plane054: THREE.Mesh;
    Plane054_1: THREE.Mesh;
    Plane045: THREE.Mesh;
    Plane056: THREE.Mesh;
    Plane056_1: THREE.Mesh;
    Plane056_2: THREE.Mesh;
  };
  materials: {
    ["computer-beige"]: THREE.MeshStandardMaterial;
    ["screen-dos"]: THREE.MeshStandardMaterial;
    grey: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
  };
};

export function Old_computer_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/old_computer_1.glb"
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
    if (target === "Old_computer_1") {
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
      userData={{ draggable: true, name: "Old_computer_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Old_computer_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <group>
        <mesh
          geometry={nodes.Plane054.geometry}
          material={materials["computer-beige"]}
        />
        <mesh
          geometry={nodes.Plane054_1.geometry}
          material={materials["screen-dos"]}
        />
        <mesh
          geometry={nodes.Plane045.geometry}
          material={materials.grey}
          position={[0.46, 0.22, 0.05]}
          rotation={[Math.PI / 2, 1.35, -Math.PI / 2]}
          scale={1.25}
        />
        <mesh geometry={nodes.Plane056.geometry} material={materials.black} />
        <mesh
          geometry={nodes.Plane056_1.geometry}
          material={materials["computer-beige"]}
        />
        <mesh geometry={nodes.Plane056_2.geometry} material={materials.grey} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/items/old_computer_1.glb");
