/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/trooper_figure_1.glb -t
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
    Figure002: THREE.Mesh;
    Circle016: THREE.Mesh;
    Circle007: THREE.Mesh;
    Circle008: THREE.Mesh;
    Circle009: THREE.Mesh;
    Circle010: THREE.Mesh;
    Circle011: THREE.Mesh;
    Circle013: THREE.Mesh;
    Circle014: THREE.Mesh;
    Circle015: THREE.Mesh;
    Circle017_1: THREE.Mesh;
    Circle018: THREE.Mesh;
    Circle020: THREE.Mesh;
    Circle020_1: THREE.Mesh;
    Cylinder001: THREE.Mesh;
  };
  materials: {
    ["default"]: THREE.MeshStandardMaterial;
    ["white.001"]: THREE.MeshStandardMaterial;
    ["black.004"]: THREE.MeshStandardMaterial;
  };
};

export function Trooper_figure_1(props: JSX.IntrinsicElements["group"] | any) {
  const { nodes, materials } = useGLTF(
    "/models/items/trooper_figure_1.glb"
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
    if (target === "Trooper_figure_1") {
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
      position={[position.x, position.y, position.z]}
      userData={{ draggable: true, name: "Trooper_figure_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Trooper_figure_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh geometry={nodes.Figure002.geometry} material={materials["default"]}>
        <mesh
          geometry={nodes.Circle016.geometry}
          material={materials["white.001"]}
          position={[0, 0.04, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.37}
        >
          <mesh
            geometry={nodes.Circle007.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle008.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle009.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle010.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle011.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle013.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle014.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle015.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle017_1.geometry}
            material={materials["white.001"]}
          />
          <mesh
            geometry={nodes.Circle018.geometry}
            material={materials["black.004"]}
          />
          <group position={[0, 3.26, 0]}>
            <mesh
              geometry={nodes.Circle020.geometry}
              material={materials["white.001"]}
            />
            <mesh
              geometry={nodes.Circle020_1.geometry}
              material={materials["black.004"]}
            />
          </group>
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials["black.004"]}
            position={[-0.92, 1.66, 0.4]}
            rotation={[2.83, -0.05, 1.91]}
          />
        </mesh>
      </mesh>
    </group>
  );
}

useGLTF.preload("/models/items/trooper_figure_1.glb");
