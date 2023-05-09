/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 ./public/models/items/katana_decoration_1.glb -t
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
    Katana: THREE.Mesh;
    Plane051: THREE.Mesh;
    Plane052: THREE.Mesh;
    Mesh: THREE.Mesh;
    Mesh_1: THREE.Mesh;
    Mesh_2: THREE.Mesh;
    Mesh_3: THREE.Mesh;
  };
  materials: {
    Wood: THREE.MeshStandardMaterial;
    ["Metal.001"]: THREE.MeshStandardMaterial;
    Metal: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    ["Black Leather"]: THREE.MeshStandardMaterial;
  };
};

export function Katana_decoration_1(
  props: JSX.IntrinsicElements["group"] | any
) {
  const { nodes, materials } = useGLTF(
    "/models/items/katana_decoration_1.glb"
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
    if (target === "Katana_decoration_1") {
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
      userData={{ draggable: true, name: "Katana_decoration_1" }}
      onClick={() => {
        if (props.activePage === "myitems") {
          if (!isDragging) setIsDragging(true);
          setTarget("Katana_decoration_1");
        }
      }}
      rotation={[0, THREE.MathUtils.degToRad(rotation), 0]}
    >
      <mesh
        geometry={nodes.Katana.geometry}
        material={materials.Wood}
        scale={0.78}
      >
        <mesh geometry={nodes.Plane051.geometry} material={materials.Wood} />
        <mesh geometry={nodes.Plane052.geometry} material={materials.Wood} />
        <group position={[0, 0.8, -0.44]} scale={0.67}>
          <mesh
            geometry={nodes.Mesh.geometry}
            material={materials["Metal.001"]}
          />
          <mesh geometry={nodes.Mesh_1.geometry} material={materials.Metal} />
          <mesh geometry={nodes.Mesh_2.geometry} material={materials.black} />
          <mesh
            geometry={nodes.Mesh_3.geometry}
            material={materials["Black Leather"]}
          />
        </group>
      </mesh>
    </group>
  );
}

// useGLTF.preload("/models/items/katana_decoration_1.glb");
