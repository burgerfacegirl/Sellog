/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/old_tv_1.glb -t
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
    Plane040: THREE.Mesh;
    Plane040_1: THREE.Mesh;
    Plane019: THREE.Mesh;
    Plane020: THREE.Mesh;
    Plane021: THREE.Mesh;
  };
  materials: {
    black: THREE.MeshStandardMaterial;
    ["black-gloss"]: THREE.MeshStandardMaterial;
    ["screen-dos-game"]: THREE.MeshStandardMaterial;
    grey: THREE.MeshStandardMaterial;
    led: THREE.MeshStandardMaterial;
  };
};

export function Old_tv_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/old_tv_1.glb"
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
    if (target === "Old_tv_1") {
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
      scale={1}
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Old_tv_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Old_tv_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh
        geometry={nodes.TV.geometry}
        material={materials.black}
        scale={1.22}
      >
        <mesh geometry={nodes.Plane019.geometry} material={materials.black} />
        <mesh geometry={nodes.Plane020.geometry} material={materials.grey} />
        <mesh
          geometry={nodes.Plane021.geometry}
          material={materials.led}
          position={[0.52, 0.09, 0.31]}
        />
        <mesh
          geometry={nodes.Plane040.geometry}
          material={materials["black-gloss"]}
        />
        <mesh
          geometry={nodes.Plane040_1.geometry}
          material={materials["screen-dos-game"]}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/old_tv_1.glb");
